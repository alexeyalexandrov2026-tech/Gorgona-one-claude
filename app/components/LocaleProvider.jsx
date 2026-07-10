"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { DEFAULT_LANGUAGE, getLanguageDir, isSupportedLanguage } from '../../lib/languages';
import { defaultTranslations, loadTranslations } from '../../lib/i18n';

const LOCALE_STORAGE_KEY = 'gorgona-locale';
const LOCALE_COOKIE_KEY = 'gorgona-locale';

const LocaleContext = createContext(DEFAULT_LANGUAGE);
const TranslationsContext = createContext(defaultTranslations);
const LocaleControllerContext = createContext(null);

function readCookie(name) {
  if (typeof document === 'undefined') return null;
  const match = document.cookie.match(new RegExp('(?:^|; )' + name + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

function writeCookie(name, value) {
  if (typeof document === 'undefined') return;
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; max-age=31536000; SameSite=Lax`;
}

function applyDocumentLocale(code) {
  if (typeof document === 'undefined') return;
  document.documentElement.lang = code;
  document.documentElement.dir = getLanguageDir(code);
}

function readSavedLocale() {
  if (typeof window === 'undefined') return null;
  const saved = window.localStorage.getItem(LOCALE_STORAGE_KEY) || readCookie(LOCALE_COOKIE_KEY);
  return saved && isSupportedLanguage(saved) ? saved : null;
}

// LocaleProvider tracks the active locale (unchanged public API: useLocale()
// still returns a plain locale string, exactly as before) and, alongside it,
// lazily loads that locale's translation dictionary (useTranslations()) and
// a controller (useLocaleController()) used by the first-visit language
// modal and the header language switcher to read/change the selection and
// know whether a choice has already been saved.
export function LocaleProvider({ children }) {
  const router = useRouter();
  const [locale, setLocaleState] = useState(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState(defaultTranslations);
  const [hasSavedChoice, setHasSavedChoice] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = readSavedLocale();
    if (saved) {
      setLocaleState(saved);
      applyDocumentLocale(saved);
      setHasSavedChoice(true);
    } else {
      setHasSavedChoice(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadTranslations(locale).then((dict) => {
      if (!cancelled) setTranslations(dict);
    });
    return () => {
      cancelled = true;
    };
  }, [locale]);

  const setLocale = (code) => {
    const next = isSupportedLanguage(code) ? code : DEFAULT_LANGUAGE;
    setLocaleState(next);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, next);
    writeCookie(LOCALE_COOKIE_KEY, next);
    applyDocumentLocale(next);
    setHasSavedChoice(true);
    setIsModalOpen(false);
    // Server Components (page headings, static copy) read the locale from
    // the cookie on the server, so a client-only state change doesn't
    // reach them - force a refresh so already-rendered pages pick up the
    // new language immediately instead of staying stale until next navigation.
    router.refresh();
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const localeValue = useMemo(() => locale, [locale]);
  const controllerValue = useMemo(
    () => ({ locale, setLocale, hasSavedChoice, isModalOpen, openModal, closeModal }),
    [locale, hasSavedChoice, isModalOpen]
  );

  return (
    <LocaleContext.Provider value={localeValue}>
      <TranslationsContext.Provider value={translations}>
        <LocaleControllerContext.Provider value={controllerValue}>{children}</LocaleControllerContext.Provider>
      </TranslationsContext.Provider>
    </LocaleContext.Provider>
  );
}

export function useLocale() {
  return useContext(LocaleContext);
}

export function useTranslations() {
  return useContext(TranslationsContext);
}

export function useLocaleController() {
  return useContext(LocaleControllerContext);
}
