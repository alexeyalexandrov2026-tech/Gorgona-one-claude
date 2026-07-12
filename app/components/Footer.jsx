"use client";

import { useLocale } from './LocaleProvider';
import { getTranslation } from '../../lib/i18n';

export function Footer() {
  const t = getTranslation(useLocale());
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm text-zinc-400">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>{t.footer.copyright}</p>
        <div className="flex flex-wrap gap-4">
          <a href="/privacy" className="transition hover:text-brand-gold">{t.footer.privacy}</a>
          <a href="/terms" className="transition hover:text-brand-gold">{t.footer.terms}</a>
          <a href="/affiliate-disclosure" className="transition hover:text-brand-gold">{t.footer.disclosure}</a>
          <a href="/cookie-policy" className="transition hover:text-brand-gold">{t.footer.cookies}</a>
          <a href="/partner-agreement" className="transition hover:text-brand-gold">{t.footer.partnerAgreement}</a>
          <a href="/admin" className="transition hover:text-brand-gold">{t.footer.admin}</a>
        </div>
      </div>
    </footer>
  );
}
