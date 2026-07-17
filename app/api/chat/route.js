import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT, matchSuggestions } from '../../../lib/aiEcosystemContext';
import { getLanguageMeta, isSupportedLanguage, DEFAULT_LANGUAGE } from '../../../lib/languages';
import { getTranslation } from '../../../lib/i18n';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

const OPENROUTER_MODEL = process.env.OPENROUTER_MODEL || 'meta-llama/llama-3.3-70b-instruct:free';
// Upstream OpenRouter calls must never hang the request indefinitely - a stalled
// fetch previously left the concierge "thinking" forever with no way for the
// client's own request to resolve. 20s comfortably covers normal latency.
const OPENROUTER_TIMEOUT_MS = 20_000;
const OPENROUTER_ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';

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
  const apiKey = process.env.OPENROUTER_API_KEY;

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

  const chatMessages = [
    { role: 'system', content: SYSTEM_PROMPT + languageDirective },
    ...messages
      .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && m.content)
      .map((m) => ({ role: m.role, content: String(m.content).slice(0, 4000) }))
  ];

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), OPENROUTER_TIMEOUT_MS);

  try {
    const response = await fetch(OPENROUTER_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: OPENROUTER_MODEL,
        messages: chatMessages,
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 480
      }),
      cache: 'no-store',
      signal: controller.signal
    });

    if (!response.ok) {
      // Log only the status and upstream error body server-side for debugging -
      // never the request payload or the API key - and never forward either to
      // the client.
      const errText = await response.text();
      console.error('OpenRouter API error', response.status, errText);

      let reply = t.ai.geminiSnag;
      if (response.status === 429) {
        reply = t.ai.geminiRateLimited;
      } else if (response.status === 401 || response.status === 403) {
        reply = t.ai.geminiInvalidKey;
      }

      return NextResponse.json({ reply, suggestions: [], configured: true, error: true });
    }

    const data = await response.json();
    const reply = data?.choices?.[0]?.message?.content?.trim() || t.ai.geminiNoReply;

    return NextResponse.json({
      reply,
      suggestions: localizeSuggestions(matchSuggestions(`${latestUserMessage} ${reply}`), t),
      configured: true
    });
  } catch (error) {
    if (error?.name === 'AbortError') {
      console.error('OpenRouter request timed out after', OPENROUTER_TIMEOUT_MS, 'ms');
      return NextResponse.json({
        reply: t.ai.geminiTimeout,
        suggestions: [],
        configured: true,
        error: true
      });
    }
    console.error('OpenRouter request failed', error);
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
