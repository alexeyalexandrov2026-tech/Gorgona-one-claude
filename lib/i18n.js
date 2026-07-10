import { DEFAULT_LANGUAGE, isSupportedLanguage } from './languages';
import enTranslations from './locales/en';

// Lazy loaders: each locale's translation file is only fetched/loaded when
// actually needed, instead of bundling all 12 languages up front.
const localeLoaders = {
  en: () => import('./locales/en'),
  ru: () => import('./locales/ru'),
  es: () => import('./locales/es'),
  de: () => import('./locales/de'),
  pt: () => import('./locales/pt'),
  uk: () => import('./locales/uk'),
  ja: () => import('./locales/ja'),
  ko: () => import('./locales/ko'),
  zh: () => import('./locales/zh'),
  ar: () => import('./locales/ar'),
  tr: () => import('./locales/tr'),
  fa: () => import('./locales/fa')
};

// English is used as the synchronous default so the very first render
// (before a non-English locale finishes loading) never shows a blank UI.
export const defaultTranslations = enTranslations;

export async function loadTranslations(code) {
  const locale = isSupportedLanguage(code) ? code : DEFAULT_LANGUAGE;
  const loader = localeLoaders[locale] || localeLoaders[DEFAULT_LANGUAGE];
  const mod = await loader();
  return mod.default;
}

// Synchronous accessor kept for any non-refactored call site; only ever
// resolves English or Russian (the two locales bundled in this module's
// own graph via static analysis is avoided on purpose - this simply returns
// the English default so nothing crashes if called directly).
export function getTranslation() {
  return defaultTranslations;
}
