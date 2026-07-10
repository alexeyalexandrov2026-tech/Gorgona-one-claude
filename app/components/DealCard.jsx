import Link from 'next/link';

export function DealCard({ deal, locale = 'en' }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-premium">
      <div className="flex items-center justify-between gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 text-lg font-semibold text-brand-gold">
          {deal.name.slice(0, 2).toUpperCase()}
        </div>
        <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-gold">{deal.category}</span>
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{deal.name}</h3>
      <p className="mt-3 text-sm text-zinc-400">{deal.description}</p>
      <div className="mt-4 rounded-2xl border border-white/10 bg-black/40 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Promo code</p>
        <p className="mt-2 text-sm font-semibold text-white">{deal.promoCode || 'No code needed'}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
        <span>{deal.discount}</span>
        <span>Ends {deal.expirationDate}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={deal.affiliateLink} className="rounded-full bg-brand-gold px-4 py-2 text-sm font-medium text-black">Get Deal</Link>
        <Link href={deal.website} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-gold hover:text-brand-gold">Visit Store</Link>
      </div>
    </article>
  );
}
