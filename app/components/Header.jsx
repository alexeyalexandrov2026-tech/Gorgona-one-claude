"use client";

import { useState } from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getTranslation } from '../../lib/i18n';
import { useLocale } from './LocaleProvider';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'stores', href: '/stores' },
  { key: 'coupons', href: '/coupons' },
  { key: 'rentals', href: '/rentals' },
  { key: 'sportsbook', href: '/sportsbook' },
  { key: 'events', href: '/events' },
  { key: 'admin', href: '/admin' }
];

export function Header() {
  const locale = useLocale();
  const t = getTranslation(locale);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header dir="ltr" className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
      <div className="flex flex-wrap items-center justify-between gap-3 py-4">
        <Link href="/" className="text-xl font-semibold tracking-[0.3em] text-brand-gold">
          GORGONA ONE
        </Link>
        <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-brand-gold">
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link href="/login" className="rounded-full border border-brand-gold/50 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-black">
            Sign In
          </Link>
          <button
            type="button"
            onClick={() => setMobileNavOpen((value) => !value)}
            aria-expanded={mobileNavOpen}
            aria-label={t.nav.home}
            className="flex items-center justify-center rounded-full border border-white/10 p-2 text-zinc-300 transition hover:border-brand-gold hover:text-brand-gold md:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </div>
      {mobileNavOpen && (
        <nav className="flex flex-col gap-1 border-t border-white/10 px-1 pb-4 pt-2 text-sm text-zinc-300 md:hidden">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileNavOpen(false)}
              className="rounded-xl px-3 py-2 transition hover:bg-white/5 hover:text-brand-gold"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
