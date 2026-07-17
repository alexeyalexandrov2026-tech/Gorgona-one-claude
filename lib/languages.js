// Order here is the one required order used everywhere a language list is
// rendered (selector, hreflang tags, etc.) - do not resort alphabetically.
// `speechLang` is the BCP-47 tag passed to the Web Speech API
// (SpeechRecognition.lang) - our own two-letter `code` is not a valid value
// there (e.g. speech recognition needs 'ru-RU', not 'ru').
export const SUPPORTED_LANGUAGES = [
  { code: 'en', label: 'English (US)', nativeLabel: 'English (US)', flag: '🇺🇸', dir: 'ltr', speechLang: 'en-US' },
  { code: 'ru', label: 'Russian', nativeLabel: 'Русский', flag: '🇷🇺', dir: 'ltr', speechLang: 'ru-RU' },
  { code: 'es', label: 'Spanish', nativeLabel: 'Español', flag: '🇪🇸', dir: 'ltr', speechLang: 'es-ES' },
  { code: 'he', label: 'Hebrew (Israel)', nativeLabel: 'עברית', flag: '🇮🇱', dir: 'rtl', speechLang: 'he-IL' },
  { code: 'zh', label: 'Chinese', nativeLabel: '中文', flag: '🇨🇳', dir: 'ltr', speechLang: 'zh-CN' },
  { code: 'pt', label: 'Portuguese', nativeLabel: 'Português', flag: '🇵🇹', dir: 'ltr', speechLang: 'pt-PT' },
  { code: 'uk', label: 'Ukrainian', nativeLabel: 'Українська', flag: '🇺🇦', dir: 'ltr', speechLang: 'uk-UA' },
  { code: 'ja', label: 'Japanese', nativeLabel: '日本語', flag: '🇯🇵', dir: 'ltr', speechLang: 'ja-JP' },
  { code: 'ko', label: 'Korean', nativeLabel: '한국어', flag: '🇰🇷', dir: 'ltr', speechLang: 'ko-KR' },
  { code: 'de', label: 'German', nativeLabel: 'Deutsch', flag: '🇩🇪', dir: 'ltr', speechLang: 'de-DE' },
  { code: 'ar', label: 'Arabic', nativeLabel: 'العربية', flag: '🇸🇦', dir: 'rtl', speechLang: 'ar-SA' },
  { code: 'tr', label: 'Turkish', nativeLabel: 'Türkçe', flag: '🇹🇷', dir: 'ltr', speechLang: 'tr-TR' },
  { code: 'fa', label: 'Persian', nativeLabel: 'فارسی', flag: '🇮🇷', dir: 'rtl', speechLang: 'fa-IR' },
  { code: 'it', label: 'Italian', nativeLabel: 'Italiano', flag: '🇮🇹', dir: 'ltr', speechLang: 'it-IT' },
  { code: 'fr', label: 'French', nativeLabel: 'Français', flag: '🇫🇷', dir: 'ltr', speechLang: 'fr-FR' },
  { code: 'pl', label: 'Polish', nativeLabel: 'Polski', flag: '🇵🇱', dir: 'ltr', speechLang: 'pl-PL' }
];

export const DEFAULT_LANGUAGE = 'en';

export const RTL_LANGUAGES = SUPPORTED_LANGUAGES.filter((language) => language.dir === 'rtl').map((language) => language.code);

export function isSupportedLanguage(code) {
  return SUPPORTED_LANGUAGES.some((language) => language.code === code);
}

export function getLanguageDir(code) {
  return RTL_LANGUAGES.includes(code) ? 'rtl' : 'ltr';
}

export function getLanguageMeta(code) {
  return SUPPORTED_LANGUAGES.find((language) => language.code === code);
}

// BCP-47 tag for SpeechRecognition/speechSynthesis, e.g. 'ru' -> 'ru-RU'.
export function getSpeechLang(code) {
  return getLanguageMeta(code)?.speechLang || 'en-US';
}
