import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getDealsByCategory } from '../../../lib/dealsData';
import { SearchBar } from '../../components/SearchBar';
import { StoreCard } from '../../components/StoreCard';
import { getServerTranslation } from '../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// These stay fully in lib/dealsData.js (and keep their /deals/{slug} page)
// but are no longer listed in the Stores section itself.
const HIDDEN_FROM_STORES = ['Beit Yosef Grocery', 'Kosher Market Co.', 'Shalom Bistro', 'Mizrahi Grill', 'Disney+', 'DoorDash', 'Uber Eats'];

export async function generateMetadata({ params }) {
  const category = categories.find((entry) => entry.slug === params.category);
  if (!category) {
    return { title: 'Category not found | GORGONA ONE' };
  }
  const { t } = getServerTranslation();
  const label = t.categories[camelizeSlug(category.slug)] || category.label;
  return {
    title: `${label} ${t.category.dealsAndPromoCodes} | GORGONA ONE`,
    description: t.categoryDescriptions[camelizeSlug(category.slug)] || category.description
  };
}

export default function CategoryPage({ params }) {
  const category = categories.find((entry) => entry.slug === params.category);

  if (!category) {
    notFound();
  }

  const { t } = getServerTranslation();
  const label = t.categories[camelizeSlug(category.slug)] || category.label;
  const deals = getDealsByCategory(params.category).filter((deal) => !HIDDEN_FROM_STORES.includes(deal.name));
  // Sportsbook companies are removed from the Stores section - they stay
  // available in full on their own dedicated /sportsbook directory.
  const isBetting = params.category === 'betting';

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{label}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{label} {t.category.dealsAndPromoCodes}</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">{t.categoryDescriptions[camelizeSlug(category.slug)] || category.description}</p>
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((item) => (
          <Link key={item.slug} href={`/stores/${item.slug}`} className={`rounded-2xl border px-4 py-3 text-sm transition ${item.slug === params.category ? 'border-brand-gold bg-brand-gold/10 text-brand-gold' : 'border-white/10 bg-white/5 text-zinc-300 hover:border-brand-gold hover:text-brand-gold'}`}>
            {item.icon} {t.categories[camelizeSlug(item.slug)] || item.label}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {!isBetting && deals.map((deal) => (
          <StoreCard key={deal.id} deal={deal} t={t} />
        ))}
      </div>
    </main>
  );
}
