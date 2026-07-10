import { getDealsByCategory } from '../../../lib/dealsData';
import { SearchBar } from '../../components/SearchBar';

export default function FashionCategoryPage() {
  const deals = getDealsByCategory('fashion');

  return (
    <main className="flex-1 py-10">
      <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Fashion</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Fashion deals and retailer offers</h1>
      </div>
      <div className="mb-8"><SearchBar /></div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {deals.map((deal) => (
          <article key={deal.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-premium">
            <h2 className="text-xl font-semibold text-white">{deal.name}</h2>
            <p className="mt-3 text-sm text-zinc-400">{deal.description}</p>
            <div className="mt-4 text-sm text-zinc-400">{deal.discount}</div>
            <a href={deal.website} className="mt-6 inline-flex text-sm text-brand-gold">Visit Store</a>
          </article>
        ))}
      </div>
    </main>
  );
}
