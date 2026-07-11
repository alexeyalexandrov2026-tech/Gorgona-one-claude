import { notFound } from 'next/navigation';
import { getDealBySlug } from '../../../lib/data/deals';
import { getServerTranslations } from '../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export default async function DealDetailPage({ params }) {
  const deal = await getDealBySlug(params.slug);

  if (!deal) {
    notFound();
  }

  const { t } = await getServerTranslations();

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.deals.detailTitle}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{deal.name}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">{deal.description}</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.deals.offerSummary}</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p><span className="text-white">{t.brands.categoryLabel}:</span> {t.categories[deal.category] || deal.category}</p>
              <p><span className="text-white">{t.deals.discountLabel}:</span> {deal.discount}</p>
              <p><span className="text-white">{t.stores.promoCode}:</span> {deal.promoCode || t.stores.noCodeNeeded}</p>
              <p><span className="text-white">{t.deals.expirationLabel}:</span> {deal.expirationDate}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.deals.getThisDeal}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={deal.affiliateLink} className="rounded-full bg-brand-gold px-4 py-2 text-sm font-medium text-black">{t.common.getDeal}</a>
              <a href={deal.website} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-gold hover:text-brand-gold">{t.common.visitStore}</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
