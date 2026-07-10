import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getStores, getCoupons } from '../../../lib/data/stores';
import { getServerTranslations } from '../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export default async function StoreProfilePage({ params }) {
  const [stores, coupons, { t }] = await Promise.all([getStores(), getCoupons(), getServerTranslations()]);
  const store = stores.find((entry) => entry.slug === params.slug);

  if (!store) {
    notFound();
  }

  const featuredCoupons = coupons.filter((coupon) => coupon.store_name === store.name);

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.brands.profileTitle}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{store.name}</h1>
            <p className="mt-3 max-w-2xl text-zinc-400">{store.description}</p>
          </div>
          <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 px-4 py-3">
            <p className="text-sm text-zinc-400">{t.brands.categoryLabel}</p>
            <p className="font-semibold text-white">{t.categories[store.category?.toLowerCase()] || store.category}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.brands.activeDeals}</p>
            <div className="mt-4 space-y-3">
              {featuredCoupons.slice(0, 3).map((coupon) => (
                <div key={coupon.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="font-semibold text-white">{coupon.discount}</p>
                  <p className="mt-2 text-sm text-zinc-400">{coupon.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.brands.affiliate}</p>
            <Link href={store.affiliate_link} className="mt-4 inline-flex rounded-full bg-brand-gold px-4 py-2 font-medium text-black">{t.brands.visitAffiliate}</Link>
            <div className="mt-6 space-y-3 text-sm text-zinc-400">
              <p>{t.brands.websiteLabel}: {store.website}</p>
              <p>{t.brands.statusLabel}: {store.status}</p>
              <p>{t.brands.relatedOffers}: {featuredCoupons.length}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
