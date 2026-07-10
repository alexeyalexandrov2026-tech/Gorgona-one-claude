import { notFound } from 'next/navigation';
import { getDealBySlug } from '../../../lib/data/deals';

export function generateStaticParams() {
  return [];
}

export default async function DealDetailPage({ params }) {
  const deal = await getDealBySlug(params.slug);

  if (!deal) {
    notFound();
  }

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Deal detail</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{deal.name}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">{deal.description}</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Offer summary</p>
            <div className="mt-4 space-y-3 text-sm text-zinc-400">
              <p><span className="text-white">Category:</span> {deal.category}</p>
              <p><span className="text-white">Discount:</span> {deal.discount}</p>
              <p><span className="text-white">Promo code:</span> {deal.promoCode || 'No code needed'}</p>
              <p><span className="text-white">Expiration:</span> {deal.expirationDate}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Get this deal</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a href={deal.affiliateLink} className="rounded-full bg-brand-gold px-4 py-2 text-sm font-medium text-black">Get Deal</a>
              <a href={deal.website} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-gold hover:text-brand-gold">Visit Store</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
