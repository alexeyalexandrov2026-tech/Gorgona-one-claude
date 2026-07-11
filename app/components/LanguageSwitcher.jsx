"use client";

import { SUPPORTED_LANGUAGES } from '../../lib/languages';
import { useLocaleController, useTranslations } from './LocaleProvider';

export function LanguageSwitcher() {
  const controller = useLocaleController();
  const t = useTranslations();
  const locale = controller ? controller.locale : 'en';

  const handleChange = (value) => {
    if (controller) {
      controller.setLocale(value);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <select
        value={locale}
        onChange={(event) => handleChange(event.target.value)}
        className="rounded-full border border-white/10 bg-black/50 px-3 py-2 text-sm text-white outline-none"
      >
        {SUPPORTED_LANGUAGES.map((language) => (
          <option key={language.code} value={language.code}>
            {language.flag} {language.nativeLabel}
          </option>
        ))}
      </select>
      <button
        type="button"
        onClick={() => controller && controller.openModal()}
        className="hidden text-sm text-zinc-400 transition hover:text-brand-gold sm:inline"
      >
        {t.common.changeLanguage}
      </button>
    </div>
  );
}
