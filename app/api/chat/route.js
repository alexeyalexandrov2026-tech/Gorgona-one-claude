import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT, matchSuggestions } from '../../../lib/aiEcosystemContext';
import { getLanguageMeta, isSupportedLanguage, DEFAULT_LANGUAGE } from '../../../lib/languages';
import { getTranslation } from '../../../lib/i18n';
import { getEcosystemDigest } from '../../../lib/aiEcosystemDigest';
import { askBrain } from '../../../lib/ai/brain';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ===========================================================================
// HTTP adapter for the concierge chat. All model/provider/routing policy
// lives in lib/ai/brain.js (the single authoritative AI brain) - this route
// only validates the request, assembles the concierge persona prompt,
// localizes the response, and maps brain outcomes to guest/operator
// messages. Add new AI surfaces by calling askBrain(), not by adding
// provider logic here.
// ===========================================================================

// matchSuggestions() returns a stable topic `id` plus an English fallback
// `label`; resolve the real display label from the request's locale here so
// the "Open X" quick-links in the chat aren't always in English.
function localizeSuggestions(list, t) {
  return list.map((s) => ({ href: s.href, label: t.ai.suggestionTopics[s.id] || s.label }));
}

// Operator-facing configuration states name the *correct* env vars, so they
// stay intentionally English rather than using the legacy localized strings.
const OPERATOR_MESSAGES = {
  unconfigured:
    "The Discovery Room isn't connected to its AI gateway yet - add an OPENROUTER_API_KEY to the environment to bring the concierge online. In the meantime, explore Travel, Restaurants, Shopping, Villas, Yachts, Car Rentals, Sportsbooks and Events from the navigation above.",
  auth: 'The concierge AI gateway key looks invalid or unauthorized. Please check OPENROUTER_API_KEY.',
  credits:
    'The concierge AI gateway is out of credits. Please top up the OpenRouter account at openrouter.ai/settings/credits.'
};

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

  // The site's current locale (sent by the client) drives both the model's
  // reply language and this route's own guest-facing status messages.
  const requestLocale = isSupportedLanguage(body?.locale) ? body.locale : DEFAULT_LANGUAGE;
  const t = getTranslation(requestLocale);
  const localeLabel = getLanguageMeta(requestLocale)?.label;
  const languageDirective = localeLabel
    ? `\n\nRespond in ${localeLabel}, matching the guest's language. If the guest's most recent message is clearly written in a different language, respond in that language instead.`
    : '';

  const chatMessages = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && m.content)
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 4000) }));

  const result = await askBrain({
    messages: chatMessages,
    systemPrompt: SYSTEM_PROMPT + getEcosystemDigest() + languageDirective
  });

  if (result.ok) {
    return NextResponse.json({
      reply: result.reply,
      suggestions: localizeSuggestions(matchSuggestions(`${latestUserMessage} ${result.reply}`), t),
      configured: true,
      model: result.model,
      provider: result.provider
    });
  }

  if (result.kind === 'unconfigured') {
    return NextResponse.json({
      reply: OPERATOR_MESSAGES.unconfigured,
      suggestions: localizeSuggestions(matchSuggestions(latestUserMessage), t),
      configured: false
    });
  }

  if (result.kind === 'auth' || result.kind === 'credits') {
    return NextResponse.json({
      reply: OPERATOR_MESSAGES[result.kind],
      suggestions: [],
      configured: true,
      error: true
    });
  }

  // Guest-facing transient failures stay localized.
  const reply = result.kind === 'rate_limited' ? t.ai.geminiRateLimited : t.ai.geminiUnavailable;
  return NextResponse.json({ reply, suggestions: [], configured: true, error: true });
}
