"use client";

import { useEffect, useState } from 'react';

export function LanguageSwitcher() {
  const [locale, setLocale] = useState('en');

  useEffect(() => {
    const savedLocale = window.localStorage.getItem('gorgona-locale');
    if (savedLocale) {
      setLocale(savedLocale);
    }
  }, []);

  const handleChange = (value) => {
    setLocale(value);
    window.localStorage.setItem('gorgona-locale', value);
    window.location.reload();
  };

  return (
    <select value={locale} onChange={(event) => handleChange(event.target.value)} className="rounded-full border border-white/10 bg-black/50 px-3 py-2 text-sm text-white outline-none">
      <option value="en">English</option>
      <option value="ru">Русский</option>
      <option value="es" disabled>Español</option>
      <option value="de" disabled>Deutsch</option>
      <option value="fr" disabled>Français</option>
    </select>
  );
}
