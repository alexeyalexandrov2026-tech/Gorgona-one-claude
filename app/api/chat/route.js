import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT, matchSuggestions } from '../../../lib/aiEcosystemContext';
import { getLanguageMeta, isSupportedLanguage, DEFAULT_LANGUAGE } from '../../../lib/languages';
import { getTranslation } from '../../../lib/i18n';

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

// matchSuggestions() returns a stable topic `id` plus an English fallback
// `label`; resolve the real display label from the request's locale here so
// the "Open X" quick-links in the chat aren't always in English.
function localizeSuggestions(list, t) {
  return list.map((s) => ({ href: s.href, label: t.ai.suggestionTopics[s.id] || s.label }));
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

  // The site's current locale (sent by the client) drives both the model's
  // reply language and this route's own status/error messages below - none
  // of those were locale-aware before, so the concierge always answered (and
  // failed) in English regardless of the selected language.
  const requestLocale = isSupportedLanguage(body?.locale) ? body.locale : DEFAULT_LANGUAGE;
  const t = getTranslation(requestLocale);
  const localeLabel = getLanguageMeta(requestLocale)?.label;
  const languageDirective = localeLabel
    ? `\n\nRespond in ${localeLabel}, matching the guest's language. If the guest's most recent message is clearly written in a different language, respond in that language instead.`
    : '';

  if (!apiKey) {
    return NextResponse.json({
      reply: t.ai.geminiNotConnected,
      suggestions: localizeSuggestions(matchSuggestions(latestUserMessage), t),
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
        systemInstruction: { role: 'system', parts: [{ text: SYSTEM_PROMPT + languageDirective }] },
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

      let reply = t.ai.geminiSnag;
      if (response.status === 429) {
        reply = t.ai.geminiRateLimited;
      } else if (response.status === 401 || response.status === 403) {
        reply = t.ai.geminiInvalidKey;
      }

      return NextResponse.json({ reply, suggestions: [], configured: true, error: true });
    }

    const data = await response.json();
    const reply =
      data?.candidates?.[0]?.content?.parts?.map((p) => p.text).join('').trim() ||
      t.ai.geminiNoReply;

    return NextResponse.json({
      reply,
      suggestions: localizeSuggestions(matchSuggestions(`${latestUserMessage} ${reply}`), t),
      configured: true
    });
  } catch (error) {
    if (error?.name === 'AbortError') {
      console.error('Gemini request timed out after', GEMINI_TIMEOUT_MS, 'ms');
      return NextResponse.json({
        reply: t.ai.geminiTimeout,
        suggestions: [],
        configured: true,
        error: true
      });
    }
    console.error('Gemini request failed', error);
    return NextResponse.json({
      reply: t.ai.geminiUnavailable,
      suggestions: [],
      configured: true,
      error: true
    });
  } finally {
    clearTimeout(timeout);
  }
}
