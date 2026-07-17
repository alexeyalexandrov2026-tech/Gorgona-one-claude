// ===========================================================================
// Gorgona One — the authoritative AI brain (server-only).
//
// Every LLM request in the platform resolves through this module. HTTP routes
// (app/api/chat) are thin adapters: they validate input, localize output, and
// call askBrain(). New AI modules (assistant surfaces, agents, integrations)
// MUST call askBrain() rather than talking to a provider directly, so the
// whole ecosystem inherits one model policy, one retry/fallback strategy, and
// one configuration surface:
//
//   User -> Concierge UI -> /api/chat -> askBrain() -> OpenRouter
//        -> openrouter/free -> reply -> User
//
// Model policy: the unified brain is OpenRouter's free auto-router
// (`openrouter/free`), which fans a request out across the currently
// available free model pool server-side at OpenRouter. Fallbacks and
// overrides are env-driven (see getBrainConfig) - never hardcoded at call
// sites - so there is exactly one place model routing can change.
//
// NOTE ON WEB SEARCH: the OpenRouter `web` plugin is billed per search and
// `engine: 'native'` requires provider-native search support, which the free
// pool generally lacks. It is therefore OFF by default and gated behind
// OPENROUTER_WEB_SEARCH ('native' | 'exa') for when the account runs a paid
// model chain again.
// ===========================================================================

const OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';

const csv = (v) =>
  String(v || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

let cachedConfig = null;

export function getBrainConfig() {
  if (cachedConfig) return cachedConfig;

  const primary = process.env.OPENROUTER_MODEL || 'openrouter/free';
  // Default: no external fallbacks. `openrouter/free` already routes across
  // the whole free pool internally; appending paid models here would create
  // dead routes on an uncredited account (each one 402s before giving up).
  const fallbacks = csv(process.env.OPENROUTER_FALLBACK_MODELS);

  const webSearch = ['native', 'exa'].includes(process.env.OPENROUTER_WEB_SEARCH)
    ? process.env.OPENROUTER_WEB_SEARCH
    : 'off';

  // Optional provider allowlist (csv of OpenRouter provider slugs). Unset by
  // default: the free pool needs provider breadth to route at all. When the
  // platform moves back to a paid first-party chain, set this to
  // 'anthropic,openai,google-ai-studio,google-vertex' - a third-party
  // reseller was once observed PII-redacting prompts ("Miami" arrived at the
  // model as "[ADDRESS]"), and pinning providers is the defense.
  const providerOnly = csv(process.env.OPENROUTER_PROVIDER_ONLY);

  // Providers excluded from routing. Novita is blocked by default: it was
  // observed PII-redacting prompt content before it reached the model
  // ("Miami Beach Villa" arrived as "[ADDRESS] Villa"), corrupting concierge
  // answers. Override (or clear) via OPENROUTER_PROVIDER_IGNORE.
  const providerIgnore = csv(process.env.OPENROUTER_PROVIDER_IGNORE ?? 'novita,poolside');

  cachedConfig = {
    models: [primary, ...fallbacks],
    webSearch,
    providerOnly,
    providerIgnore,
    timeoutMs: 30_000,
    maxAttempts: 3, // free-pool 429s are transient; three tries with backoff
    retryDelayMs: 900,
    temperature: 0.7,
    topP: 0.9,
    maxTokens: 600
  };
  return cachedConfig;
}

function buildRequestBody(config, { messages, systemPrompt }) {
  const body = {
    models: config.models,
    messages: [{ role: 'system', content: systemPrompt }, ...messages],
    temperature: config.temperature,
    top_p: config.topP,
    max_tokens: config.maxTokens
  };
  if (config.webSearch !== 'off') {
    body.plugins = [{ id: 'web', engine: config.webSearch, max_results: 5 }];
  }
  if (config.providerOnly.length || config.providerIgnore.length) {
    body.provider = {};
    if (config.providerOnly.length) body.provider.only = config.providerOnly;
    if (config.providerIgnore.length) body.provider.ignore = config.providerIgnore;
  }
  return body;
}

// The free auto-router occasionally hands a request to a non-conversational
// specialty model (observed live: nvidia/nemotron-3.5-content-safety:free
// answering a villa question with "User Safety: safe"). A degenerate
// completion is treated exactly like an empty one - log it and retry, so the
// guest never sees classifier output. Patterns stay deliberately narrow:
// false positives here would discard good replies.
function looksDegenerate(reply) {
  const r = reply.trim();
  if (r.length < 3) return true;
  if (/^user safety\s*:/i.test(r)) return true;
  if (/^(safe|unsafe|harmful|harmless)[.!\s]*$/i.test(r)) return true;
  // PII-redaction markers leaking into the answer: several free-pool
  // resellers (Novita, Poolside observed live) sanitize prompts, and the
  // model then echoes "[ADDRESS]"-style placeholders where venue names
  // belong. Blocking providers one by one is whack-a-mole; scanning the
  // reply catches every redactor, present and future.
  if (/\[(ADDRESS|LOCATION|EMAIL|PHONE|NAME|PERSON|CITY)\]/.test(r)) return true;
  return false;
}

async function callOnce(apiKey, body, timeoutMs) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(OPENROUTER_URL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        // Attribution headers per OpenRouter docs (used for app rankings).
        'HTTP-Referer': 'https://gorgona-one.com',
        'X-Title': 'GORGONA ONE'
      },
      body: JSON.stringify(body),
      cache: 'no-store',
      signal: controller.signal
    });
  } finally {
    clearTimeout(timeout);
  }
}

/**
 * The single entry point to the AI brain.
 *
 * @param {Object} args
 * @param {Array<{role:'user'|'assistant', content:string}>} args.messages
 * @param {string} args.systemPrompt
 * @returns {Promise<
 *   | { ok: true, reply: string, model: string }
 *   | { ok: false, kind: 'unconfigured'|'auth'|'credits'|'rate_limited'|'unavailable', status: number }
 * >}
 */
export async function askBrain({ messages, systemPrompt }) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) return { ok: false, kind: 'unconfigured', status: 0 };

  const config = getBrainConfig();
  const body = buildRequestBody(config, { messages, systemPrompt });

  let lastStatus = 0;
  for (let attempt = 1; attempt <= config.maxAttempts; attempt += 1) {
    try {
      const response = await callOnce(apiKey, body, config.timeoutMs);

      if (response.ok) {
        const data = await response.json();
        const reply = data?.choices?.[0]?.message?.content?.trim();
        if (reply && !looksDegenerate(reply)) {
          // `provider` is forwarded for observability - it is how the Novita
          // prompt-redaction issue was diagnosed; keep it visible.
          return { ok: true, reply, model: data?.model || config.models[0], provider: data?.provider || null };
        }
        // Empty or degenerate completion (free pool can hand a request to a
        // non-chat specialty model) - treat as retryable, never surface it.
        lastStatus = 200;
        console.error('AI brain: unusable completion from', data?.model, JSON.stringify((reply || '').slice(0, 80)));
      } else {
        lastStatus = response.status;
        // Log status + upstream error body only - never the payload or key.
        const errText = await response.text();
        console.error('AI brain: OpenRouter error', response.status, errText.slice(0, 500));

        // Non-retryable operator problems - fail fast with a precise kind.
        if (response.status === 401 || response.status === 403) {
          return { ok: false, kind: 'auth', status: response.status };
        }
        if (response.status === 402) {
          return { ok: false, kind: 'credits', status: 402 };
        }
        // 429/5xx fall through to the retry/backoff below.
      }
    } catch (error) {
      lastStatus = 0;
      if (error?.name === 'AbortError') {
        console.error('AI brain: request timed out after', config.timeoutMs, 'ms (attempt', attempt, ')');
      } else {
        console.error('AI brain: request failed', error);
      }
    }

    if (attempt < config.maxAttempts) {
      await new Promise((resolve) => setTimeout(resolve, config.retryDelayMs * attempt));
    }
  }

  return {
    ok: false,
    kind: lastStatus === 429 ? 'rate_limited' : 'unavailable',
    status: lastStatus
  };
}
