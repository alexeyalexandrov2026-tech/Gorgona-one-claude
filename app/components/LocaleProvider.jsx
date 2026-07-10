"use client";

import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LocaleContext = createContext('en');

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('gorgona-locale');
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const value = useMemo(() => locale, [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  return useContext(LocaleContext);
}
