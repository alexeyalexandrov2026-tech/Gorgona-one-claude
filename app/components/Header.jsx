"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { LanguageSwitcher } from './LanguageSwitcher';
import { getTranslation } from '../../lib/i18n';
import { useLocale } from './LocaleProvider';
import { useAuth } from './AuthProvider';

// Unified GORGONA ONE ecosystem navigation. `key` maps to an existing
// translation in lib/i18n when available; `label` is the fallback for the
// new luxury sections that are not yet translated.
const navItems = [
  { key: 'home', href: '/', label: 'Home' },
  { key: null, href: '/travel', label: 'Travel' },
  { key: 'stores', href: '/stores', label: 'Shopping' },
  { key: null, href: '/vacation-rentals', label: 'Villas' },
  { key: null, href: '/yachts', label: 'Yachts' },
  { key: null, href: '/rentals', label: 'Car Rentals' },
  { key: 'sportsbook', href: '/sportsbook', label: 'Sportsbooks' },
  { key: 'events', href: '/events', label: 'Events' },
  { key: null, href: '/concierge', label: 'AI Concierge' }
];

export function Header() {
  const locale = useLocale();
  const t = getTranslation(locale);
  const auth = useAuth();
  const pathname = usePathname();
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const labelFor = (item) => (item.key && t.nav[item.key]) || item.label;
  const isActive = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header
      dir="ltr"
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled ? 'border-white/10 bg-[#050505]/85 backdrop-blur-xl' : 'border-transparent bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between gap-4 py-4">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-semibold tracking-[0.34em] text-white transition-colors group-hover:text-brand-gold">
            GORGONA
          </span>
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.4em] text-brand-gold">One</span>
        </Link>

        <nav className="hidden items-center gap-6 xl:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative py-1 text-[0.82rem] font-medium text-zinc-300 transition-colors hover:text-white"
            >
              {labelFor(item)}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-brand-gold transition-all duration-300 ${
                  isActive(item.href) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          {auth?.session ? (
            <button
              type="button"
              onClick={() => auth.signOut()}
              className="hidden rounded-full border border-brand-gold/50 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-black sm:inline-flex"
            >
              {t.auth.signOut}
            </button>
          ) : (
            <Link
              href="/login"
              className="hidden rounded-full border border-brand-gold/50 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-black sm:inline-flex"
            >
              {t.auth.signInTab}
            </Link>
          )}
          <button
            type="button"
            onClick={() => setMobileNavOpen((value) => !value)}
            aria-expanded={mobileNavOpen}
            aria-label="Menu"
            className="flex items-center justify-center rounded-full border border-white/10 p-2 text-zinc-300 transition hover:border-brand-gold hover:text-brand-gold xl:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileNavOpen ? (
                <>
                  <line x1="6" y1="6" x2="18" y2="18" />
                  <line x1="6" y1="18" x2="18" y2="6" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileNavOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 xl:hidden"
          >
            <div className="grid grid-cols-2 gap-1 py-3">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileNavOpen(false)}
                  className="rounded-xl px-3 py-2.5 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-brand-gold"
                >
                  {labelFor(item)}
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
