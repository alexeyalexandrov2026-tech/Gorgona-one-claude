import Link from 'next/link';
import { categories, featuredDeals } from '../../lib/dealsData';
import { SearchBar } from '../components/SearchBar';
import { DealCard } from '../components/DealCard';
import { getServerTranslation } from '../../lib/serverLocale';

export const dynamic = 'force-dynamic';

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export default function StoresPage() {
  const { t } = getServerTranslation();

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.category.storesDirectory}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.category.exploreStores}</h1>
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.slug} href={`/stores/${category.slug}`} className="market-card rounded-2xl p-4">
            <p className="text-2xl">{category.icon}</p>
            <p className="mt-2 font-semibold text-white">{t.categories[camelizeSlug(category.slug)] || category.label}</p>
            <p className="mt-2 text-sm text-zinc-400">{category.description}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {featuredDeals.map((deal) => (
          <DealCard key={deal.id} deal={deal} t={t} />
        ))}
      </div>
    </main>
  );
}
