import Link from 'next/link';
import { notFound } from 'next/navigation';
import { coupons, stores } from '../../../lib/mockData';
import { storeDescriptions, couponDescriptions, getContentText } from '../../../lib/contentTranslations';
import { getServerTranslation } from '../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export default function StoreProfilePage({ params }) {
  const store = stores.find((entry) => entry.slug === params.slug);

  if (!store) {
    notFound();
  }

  const { t, locale } = getServerTranslation();
  const featuredCoupons = coupons.filter((coupon) => coupon.store_name === store.name);

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Store Profile</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{store.name}</h1>
            <p className="mt-3 max-w-2xl text-zinc-400">{getContentText(storeDescriptions, locale, store.slug, store.description)}</p>
          </div>
          <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 px-4 py-3">
            <p className="text-sm text-zinc-400">{t.category.categoryLabel}</p>
            <p className="font-semibold text-white">{store.category}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Active deals</p>
            <div className="mt-4 space-y-3">
              {featuredCoupons.slice(0, 3).map((coupon) => (
                <div key={coupon.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{coupon.discount}</p>
                  <p className="mt-2 text-sm text-zinc-400">{getContentText(couponDescriptions, locale, coupon.id, coupon.description)}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Affiliate</p>
            <Link href={store.affiliate_link} className="mt-4 inline-flex rounded-full bg-brand-gold px-4 py-2 font-medium text-black">Visit Affiliate Link</Link>
            <div className="mt-6 space-y-3 text-sm text-zinc-400">
              <p>Website: {store.website}</p>
              <p>Status: {store.status}</p>
              <p>Related offers: {featuredCoupons.length}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
