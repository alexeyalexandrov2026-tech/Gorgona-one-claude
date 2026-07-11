"use client";

import Link from 'next/link';
import { getTranslation } from '../../lib/i18n';
import { useLocale } from '../components/LocaleProvider';
import { useAuth } from '../components/AuthProvider';

export default function ProfilePage() {
  const locale = useLocale();
  const t = getTranslation(locale);
  const auth = useAuth();

  if (auth && !auth.session) {
    return (
      <main className="flex-1 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">User Profile</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">{t.auth.title}</h1>
          <p className="mt-3 text-zinc-400">{t.auth.subtitle}</p>
          <Link href="/login" className="mt-6 inline-flex rounded-full bg-brand-gold px-4 py-3 font-medium text-black">
            {t.auth.signInTab}
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">User Profile</p>
        {auth?.session && <p className="mt-2 text-sm text-zinc-400">{t.auth.signedInAs} {auth.session.name} ({auth.session.email})</p>}
        <h1 className="mt-2 text-3xl font-semibold text-white">Saved coupons and favorite stores</h1>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-zinc-400">Saved coupons</p>
            <p className="mt-2 text-2xl font-semibold text-brand-gold">12</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-zinc-400">Favorite stores</p>
            <p className="mt-2 text-2xl font-semibold text-brand-gold">8</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-zinc-400">Coupon history</p>
            <p className="mt-2 text-2xl font-semibold text-brand-gold">44</p>
          </div>
        </div>
      </div>
    </main>
  );
}
