"use client";

import Link from 'next/link';
import { useLocale } from '../components/LocaleProvider';
import { getTranslation } from '../../lib/i18n';

export default function PartnerPage() {
  const t = getTranslation(useLocale());
  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Partner Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Register your business and manage promotions</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">GORGONA ONE supports merchant onboarding, offer management, promo code publishing, verification workflows, location-based promotions, and affiliate-ready analytics for growing brands.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold text-white">{t.partnerForm.title}</h2>
            <div className="mt-4 space-y-3">
              <input className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" placeholder={t.partnerForm.companyName} />
              <input className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" placeholder={t.partnerForm.website} />
              <input className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" placeholder={t.partnerForm.contactEmail} />
              <select className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none">
                <option>{t.categories.shopping}</option>
                <option>{t.categories.fashion}</option>
                <option>{t.categories.restaurants}</option>
                <option>{t.categories.kosherRestaurants}</option>
                <option>{t.categories.kosherStores}</option>
                <option>{t.categories.travel}</option>
                <option>Sportsbooks</option>
                <option>Services</option>
              </select>
              <button className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black">{t.partnerForm.submit}</button>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Partner dashboard features</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>• Add new promotions and promo codes</li>
              <li>• Upload banners and company information</li>
              <li>• Manage multiple stores and locations</li>
              <li>• Activate or deactivate offers instantly</li>
              <li>• Track clicks, conversions, and affiliate performance</li>
            </ul>
            <Link href="/admin" className="mt-6 inline-flex rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-gold">View admin tools</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
