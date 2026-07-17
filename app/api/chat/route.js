import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT, matchSuggestions } from '../../../lib/aiEcosystemContext';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-2.0-flash';
// Upstream Gemini calls must never hang the request indefinitely - a stalled
// fetch previously left the concierge "thinking" forever with no way for the
// client's own request to resolve. 20s comfortably covers normal latency.
const GEMINI_TIMEOUT_MS = 20_000;

function geminiEndpoint(model, key) {
  return `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`;
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const messages = Array.isArray(body?.messages) ? body.messages.slice(-12) : [];
  if (!messages.length) {
    return NextResponse.json({ error: 'No message provided.' }, { status: 400 });
  }

  const latestUserMessage = [...messages].reverse().find((m) => m.role === 'user')?.content || '';
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      reply:
        "The Discovery Room isn't connected to Gemini yet - add a GEMINI_API_KEY to the environment to bring the AI concierge online. In the meantime, explore Travel, Restaurants, Shopping, Villas, Yachts, Car Rentals, Sportsbooks and Events from the navigation above.",
      suggestions: matchSuggestions(latestUserMessage),
      configured: false
    });
  }

  const contents = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && m.content)
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: String(m.content).slice(0, 4000) }]
    }));

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);

  try {
    const response = await fetch(geminiEndpoint(GEMINI_MODEL, apiKey), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { role: 'system', parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: { temperature: 0.7, topP: 0.9, maxOutputTokens: 480 }
      }),
      cache: 'no-store',
      signal: controller.signal
    });

    if (!response.ok) {
      // Log only the status and upstream error body server-side for debugging -
      // never the request payload or the API key - and never forward either to
      // the client.
      const errText = await response.text();
      console.error('Gemini API error', response.status, errText);

      let reply = 'The concierge hit a snag reaching Gemini just now. Please try again in a moment.';
      if (response.status === 429) {
        reply = 'The concierge is getting a lot of requests right now - please try again in a few seconds.';
      } else if (response.status === 401 || response.status === 403) {
        reply = 'The concierge Gemini key looks invalid or unauthorized. Please check GEMINI_API_KEY.';
      }

      return NextResponse.json({ reply, suggestions: [], configured: true, error: true });
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('').trim() ||
      "I couldn't quite catch that - could you rephrase?";

    return NextResponse.json({
      reply,
      suggestions: matchSuggestions(`${latestUserMessage} ${reply}`),
      configured: true
    });
  } catch (error) {
    if (error?.name === 'AbortError') {
      console.error('Gemini request timed out after', GEMINI_TIMEOUT_MS, 'ms');
      return NextResponse.json({
        reply: 'The concierge is taking longer than expected to respond. Please try again in a moment.',
        suggestions: [],
        configured: true,
        error: true
      });
    }
    console.error('Gemini request failed', error);
    return NextResponse.json({
      reply: 'The concierge is temporarily unavailable. Please try again shortly.',
      suggestions: [],
      configured: true,
      error: true
    });
  } finally {
    clearTimeout(timeout);
  }
}
