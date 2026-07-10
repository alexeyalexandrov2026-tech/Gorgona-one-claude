export const DEFAULT_LANGUAGE = 'en';

export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English', nativeLabel: 'English', dir: 'ltr' },
  { code: 'ru', label: 'Russian', nativeLabel: 'Русский', dir: 'ltr' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', dir: 'ltr' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', dir: 'ltr' },
  { code: 'pt', label: 'Portuguese', nativeLabel: 'Português', dir: 'ltr' },
  { code: 'uk', label: 'Ukrainian', nativeLabel: 'Українська', dir: 'ltr' },
  { code: 'ja', label: 'Japanese', nativeLabel: '日本語', dir: 'ltr' },
  { code: 'ko', label: 'Korean', nativeLabel: '한국어', dir: 'ltr' },
  { code: 'zh', label: 'Chinese (Simplified)', nativeLabel: '简体中文', dir: 'ltr' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', dir: 'rtl' },
  { code: 'tr', label: 'Turkish', nativeLabel: 'Türkçe', dir: 'ltr' },
  { code: 'fa', label: 'Persian', nativeLabel: 'فارسی', dir: 'rtl' }
];

export function isSupportedLanguage(code) {
  return SUPPORTED_LANGUAGES.some((language) => language.code === code);
}

export function getLanguage(code) {
  return SUPPORTED_LANGUAGES.find((language) => language.code === code);
}

export function getLanguageDir(code) {
  const language = getLanguage(code);
  return language ? language.dir : 'ltr';
}

// Maps a browser language tag (e.g. "pt-BR", "zh-Hans-CN") to a supported
// code, or DEFAULT_LANGUAGE if nothing matches.
export function resolveSupportedLanguage(tag) {
  if (!tag) return DEFAULT_LANGUAGE;
  const primary = tag.split('-')[0].toLowerCase();
  return isSupportedLanguage(primary) ? primary : DEFAULT_LANGUAGE;
}

export function detectBrowserLanguage() {
  if (typeof navigator === 'undefined') {
    return DEFAULT_LANGUAGE;
  }
  const candidates = navigator.languages && navigator.languages.length ? navigator.languages : [navigator.language];
  for (const candidate of candidates) {
    if (!candidate) continue;
    const primary = candidate.split('-')[0].toLowerCase();
    if (isSupportedLanguage(primary)) {
      return primary;
    }
  }
  return DEFAULT_LANGUAGE;
}
