// ===========================================================================
// Gorgona One AI — provider seam.
//
// The single interface the AI surface talks to. Today it runs the transparent,
// client-side intelligence: language detection + intent search over the dynamic
// ecosystem index (no backend, no live APIs — Phase 2 scope).
//
// This is the extension point for the future. To introduce a real model/back
// end (Phase 2+), implement `askEcosystem` to call an endpoint and return the
// SAME shape — the UI, greeting flow, and result rendering do not change. The
// `source` field lets the UI/telemetry know which engine answered.
// ===========================================================================

import { searchEcosystem } from './intent';
import { detectLanguage, greeting } from './language';

/**
 * @param {Object} args
 * @param {string} args.query   Free-text (typed or transcribed) request.
 * @param {string} [args.locale] Current app locale, used as detection fallback.
 * @returns {Promise<{lang:string, greeting:string, world:(string|null),
 *   results:Array, source:string}>}
 */
export async function askEcosystem({ query, locale = 'en' } = {}) {
  const lang = detectLanguage(query, locale);
  const { results, world } = searchEcosystem(query, { limit: 6 });
  return {
    lang,
    greeting: greeting(lang),
    world,
    results,
    source: 'client-index'
  };
}

export { greeting, detectLanguage };
