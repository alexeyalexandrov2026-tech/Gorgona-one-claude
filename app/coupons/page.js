import { allDeals } from '../../lib/dealsData';
import { BrandImage } from '../components/BrandImage';
import { SearchBar } from '../components/SearchBar';

export default function CouponsPage() {
  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Coupon System</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Verified deals across shopping, dining, travel, and entertainment</h1>
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {allDeals.slice(0, 24).map((deal) => (
          <article key={deal.id} className="market-card rounded-[1.5rem] p-6">
            <div className="flex items-center justify-between gap-3">
              <BrandImage src={deal.logo} alt={deal.name} className="h-12 w-12 rounded-2xl object-cover" />
              <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-gold">{deal.category}</span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white">{deal.name}</h2>
            <p className="mt-3 text-sm text-zinc-400">{deal.description}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">Promo code</p>
              <p className="mt-2 text-sm font-semibold text-white">{deal.promoCode || 'No code needed'}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
              <span>{deal.discount}</span>
              <span>Ends {deal.expirationDate}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={deal.affiliateLink} className="rounded-full bg-brand-gold px-4 py-2 text-sm font-medium text-black">Get Deal</a>
              <a href={deal.website} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-gold hover:text-brand-gold">Visit Store</a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
