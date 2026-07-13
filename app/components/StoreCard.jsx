import Link from 'next/link';
import { BrandImage } from './BrandImage';
import { getDealDescription } from '../../lib/dealsData';

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Stores-only card - same fields/behavior as DealCard (which stays exactly
// as-is for Coupons), styled to match the premium banner-and-badge
// treatment introduced on /sportsbook: solid gold pill, larger logo that
// keeps its natural aspect ratio instead of a small forced square, and the
// shared .market-card hover glow used across the site's premium surfaces.
export function StoreCard({ deal, t }) {
  return (
    <article className="market-card flex flex-col rounded-[1.75rem] p-6">
      <div className="flex items-start justify-between gap-3">
        <BrandImage src={deal.logo} alt={deal.name} className="h-12 max-w-[60%] object-contain object-left" />
        <span className="shrink-0 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em] text-black/80">{t.categories[camelizeSlug(deal.category)] || deal.category}</span>
      </div>
      <h2 className="mt-6 text-xl font-semibold text-white">{deal.name}</h2>
      {deal.city && (
        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">{deal.city}, {deal.state}</p>
      )}
      <p className="mt-3 text-sm text-zinc-400">{getDealDescription(deal, t)}</p>

      {typeof deal.rating === 'number' && (
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-2 text-sm">
          <span className="text-brand-gold">
            {t.kosher.rating}: {deal.rating.toFixed(1)} ★ <span className="text-zinc-500">({deal.reviewCount} {t.kosher.reviews})</span>
          </span>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(deal.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-300 underline-offset-2 hover:text-brand-gold hover:underline"
          >
            {t.kosher.viewOnMap}
          </a>
        </div>
      )}

      <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
        <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{t.kosher.promoCode}</p>
        <p className="mt-2 text-sm font-semibold text-white">{deal.promoCode || t.category.noCodeNeeded}</p>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
        <span>{deal.discount}</span>
        <span>{t.category.ends} {deal.expirationDate}</span>
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link href={deal.affiliateLink} className="inline-flex items-center gap-1.5 rounded-full bg-brand-gold px-4 py-2 text-sm font-medium text-black transition hover:brightness-110">
          {t.buttons.getDeal}
          <span aria-hidden="true">&rarr;</span>
        </Link>
        <Link href={deal.website} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-gold hover:text-brand-gold">{t.buttons.visitStore}</Link>
      </div>
    </article>
  );
}
