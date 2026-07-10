import Link from 'next/link';
import { PartnerForm } from './PartnerForm';

export default function PartnerPage() {
  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Partner Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Register your business and manage promotions</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">GORGONA ONE supports merchant onboarding, offer management, promo code publishing, verification workflows, location-based promotions, and affiliate-ready analytics for growing brands.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold text-white">Partner registration</h2>
            <PartnerForm />
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
