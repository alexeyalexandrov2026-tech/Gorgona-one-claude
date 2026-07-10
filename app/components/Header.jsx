"use client";

import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';
import { translations } from '../../lib/i18n';
import { useLocale } from './LocaleProvider';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'stores', href: '/stores' },
  { key: 'coupons', href: '/coupons' },
  { key: 'rentals', href: '/rentals' },
  { key: 'sportsbook', href: '/sportsbook' },
  { key: 'admin', href: '/admin' }
];

export function Header() {
  const locale = useLocale();
  const t = translations[locale] || translations.en;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/90 backdrop-blur-xl">
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
        </div>
      </div>
    </header>
  );
}

