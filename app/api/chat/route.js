import { NextResponse } from 'next/server';
import { SYSTEM_PROMPT, matchSuggestions } from '../../../lib/aiEcosystemContext';
import { getLanguageMeta, isSupportedLanguage, DEFAULT_LANGUAGE } from '../../../lib/languages';
import { getTranslation } from '../../../lib/i18n';
import { getEcosystemDigest } from '../../../lib/aiEcosystemDigest';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// ===========================================================================
// OpenRouter concierge backend.
//
// One gateway, three reliability layers:
//   1. `models` fallback chain — OpenRouter itself re-routes a request to the
//      next model when the primary returns 429 / 5xx / provider outage, so a
//      single upstream rate limit never surfaces to the guest.
//   2. All chain members are paid production models (no `:free` variants,
//      whose aggressive rate limits were the source of 429 failures).
//   3. A local retry with backoff for the rare case the entire gateway
//      responds 429/5xx.
//
// Real-time internet access comes from OpenRouter's `web` plugin, which
// attaches live search results to the request for WHICHEVER model serves it —
// unlike the per-model `:online` suffix, it survives fallback re-routing.
// ===========================================================================

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
const PRIMARY_MODEL = process.env.OPENROUTER_MODEL || 'anthropic/claude-sonnet-4.5';
const FALLBACK_MODELS = (process.env.OPENROUTER_FALLBACK_MODELS || 'openai/gpt-4o,google/gemini-2.5-flash')
  .split(',')
  .map((m) => m.trim())
  .filter(Boolean);

// Web search adds retrieval latency on top of generation, so the budget is
// higher than the old text-only 20s — but the request must still never hang
// the client indefinitely.
const REQUEST_TIMEOUT_MS = 30_000;
const MAX_ATTEMPTS = 2;
const RETRY_DELAY_MS = 800;

// matchSuggestions() returns a stable topic `id` plus an English fallback
// `label`; resolve the real display label from the request's locale here so
// the "Open X" quick-links in the chat aren't always in English.
function localizeSuggestions(list, t) {
  return list.map((s) => ({ href: s.href, label: t.ai.suggestionTopics[s.id] || s.label }));
}

async function callOpenRouter({ apiKey, messages, systemPrompt }) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const response = await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        // Attribution headers per OpenRouter docs (used for app rankings).
        'HTTP-Referer': 'https://gorgona-one.com',
        'X-Title': 'GORGONA ONE'
      },
      body: JSON.stringify({
        // First entry is the primary; OpenRouter falls through the rest in
        // order whenever the current one errors or is rate-limited.
        models: [PRIMARY_MODEL, ...FALLBACK_MODELS],
        messages: [{ role: 'system', content: systemPrompt }, ...messages],
        // Live web access for the concierge (events, availability, prices).
        // `engine: 'native'` uses the serving model's own web-search tool
        // (Anthropic / OpenAI / Google all support it), so the MODEL decides
        // when to search and composes its own queries. The default Exa engine
        // instead pre-injects keyword-search results into every request,
        // which let unrelated hits hijack answers (a Miami dining request
        // answered with a Dubai venue, a yacht query answered with news).
        plugins: [{ id: 'web', engine: 'native', max_results: 5 }],
        // First-party providers only. During testing, a third-party reseller
        // serving the free tier PII-redacted guest messages before they
        // reached the model ("Miami" arrived as "[ADDRESS]"), producing
        // wrong-city answers. This allowlist covers the native providers of
        // every model in the fallback chain and nothing else.
        provider: { only: ['anthropic', 'openai', 'google-ai-studio', 'google-vertex'] },
        temperature: 0.7,
        top_p: 0.9,
        max_tokens: 600
      }),
      cache: 'no-store',
      signal: controller.signal
    });
    return response;
  } finally {
    clearTimeout(timeout);
  }
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
  // reply language and this route's own status/error messages below.
  const requestLocale = isSupportedLanguage(body?.locale) ? body.locale : DEFAULT_LANGUAGE;
  const t = getTranslation(requestLocale);
  const localeLabel = getLanguageMeta(requestLocale)?.label;
  const languageDirective = localeLabel
    ? `\n\nRespond in ${localeLabel}, matching the guest's language. If the guest's most recent message is clearly written in a different language, respond in that language instead.`
    : '';

  if (!apiKey) {
    // Operator-facing configuration state, not a guest state - so the message
    // must name the *correct* env var, which the localized legacy strings
    // (written for Gemini) do not.
    return NextResponse.json({
      reply:
        "The Discovery Room isn't connected to its AI gateway yet - add an OPENROUTER_API_KEY to the environment to bring the concierge online. In the meantime, explore Travel, Restaurants, Shopping, Villas, Yachts, Car Rentals, Sportsbooks and Events from the navigation above.",
      suggestions: localizeSuggestions(matchSuggestions(latestUserMessage), t),
      configured: false
    });
  }

  const chatMessages = messages
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && m.content)
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, 4000) }));

  let lastStatus = 0;
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await callOpenRouter({
        apiKey,
        messages: chatMessages,
        systemPrompt: SYSTEM_PROMPT + getEcosystemDigest() + languageDirective
      });

      if (response.ok) {
        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content?.trim() || t.ai.geminiNoReply;
        return NextResponse.json({
          reply,
          suggestions: localizeSuggestions(matchSuggestions(`${latestUserMessage} ${reply}`), t),
          configured: true,
          model: data?.model || PRIMARY_MODEL
        });
      }

      // Log only the status and upstream error body server-side for
      // debugging - never the request payload or the API key.
      lastStatus = response.status;
      const errText = await response.text();
      console.error('OpenRouter error', response.status, errText.slice(0, 500));

      // 401/403/402 will not heal on retry - report the configuration
      // problem. 402 = the OpenRouter account is out of purchased credits,
      // which (beyond failing requests outright) silently downgrades routing
      // to restrictive free-tier serving - the original source of both the
      // 429 failures and PII-redacted prompts.
      if (response.status === 401 || response.status === 403) {
        return NextResponse.json({
          reply:
            'The concierge AI gateway key looks invalid or unauthorized. Please check OPENROUTER_API_KEY.',
          suggestions: [],
          configured: true,
          error: true
        });
      }
      if (response.status === 402) {
        return NextResponse.json({
          reply:
            'The concierge AI gateway is out of credits. Please top up the OpenRouter account at openrouter.ai/settings/credits.',
          suggestions: [],
          configured: true,
          error: true
        });
      }
      // 429/5xx: OpenRouter already tried the fallback chain; retry the whole
      // request once after a short pause before giving up.
    } catch (error) {
      lastStatus = 0;
      if (error?.name === 'AbortError') {
        console.error('OpenRouter request timed out after', REQUEST_TIMEOUT_MS, 'ms (attempt', attempt, ')');
      } else {
        console.error('OpenRouter request failed', error);
      }
    }

    if (attempt < MAX_ATTEMPTS) {
      await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS * attempt));
    }
  }

  const reply = lastStatus === 429 ? t.ai.geminiRateLimited : t.ai.geminiUnavailable;
  return NextResponse.json({ reply, suggestions: [], configured: true, error: true });
}
