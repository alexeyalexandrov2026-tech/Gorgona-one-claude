import { cookies } from 'next/headers';
import { DEFAULT_LANGUAGE, isSupportedLanguage } from './languages';
import { loadTranslations } from './i18n';

const LOCALE_COOKIE_KEY = 'gorgona-locale';

export function getServerLocale() {
  const saved = cookies().get(LOCALE_COOKIE_KEY)?.value;
  return isSupportedLanguage(saved) ? saved : DEFAULT_LANGUAGE;
}

export async function getServerTranslations() {
  const locale = getServerLocale();
  const translations = await loadTranslations(locale);
  return { locale, t: translations };
}
