'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTranslations } from './LocaleProvider';
import { SignOutButton } from './SignOutButton';

export function AccountMenu({ isAdmin }) {
  const t = useTranslations();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        className="rounded-full border border-brand-gold/50 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-black"
      >
        {t.nav.profile}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-52 rounded-2xl border border-white/10 bg-[#050505] p-2 shadow-premium">
          <Link
            href="/profile"
            onClick={() => setOpen(false)}
            className="block rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-brand-gold"
          >
            {t.nav.profile}
          </Link>
          {isAdmin && (
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-zinc-300 transition hover:bg-white/5 hover:text-brand-gold"
            >
              {t.nav.admin}
            </Link>
          )}
          <div className="mt-1 border-t border-white/10 pt-1">
            <SignOutButton />
          </div>
        </div>
      )}
    </div>
  );
}
