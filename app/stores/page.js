import Link from 'next/link';
import { categories, featuredDeals } from '../../lib/dealsData';
import { SearchBar } from '../components/SearchBar';
import { StoreCard } from '../components/StoreCard';
import { getServerTranslation } from '../../lib/serverLocale';

export const dynamic = 'force-dynamic';

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// These stay fully in lib/dealsData.js (and keep their /deals/{slug} page)
// but are no longer listed in the Stores section itself.
const HIDDEN_FROM_STORES = ['Beit Yosef Grocery', 'Kosher Market Co.', 'Shalom Bistro', 'Mizrahi Grill', 'Disney+', 'DoorDash', 'Uber Eats'];

// Nike and Adidas are each featured in two categories (fashion and sport),
// which puts both brands on this page twice. Only the fashion entries are
// kept here; the sport-category ones (which land at the bottom of this
// grid) are hidden - they're unaffected on /stores/sport itself.
const HIDDEN_DUPLICATE_IDS = ['sport-1', 'sport-2'];

// New store, Stores-only: kept out of lib/dealsData.js entirely so it never
// reaches allDeals/featuredDeals (and therefore Coupons, search, or any
// other consumer of that catalog) - it only exists on this page, pinned to
// the front of the grid.
const ROWE_AND_TAYLOR_DEAL = {
  id: 'rowe-and-taylor-featured',
  name: 'Rowe & Taylor',
  slug: 'rowe-and-taylor',
  category: 'fashion',
  logo: '/images/brands/rowe-and-taylor.svg',
  image: '/images/brands/rowe-and-taylor.svg',
  promoCode: '',
  discount: 'Suits that outperform their price.',
  expirationDate: '2026-12-31',
  affiliateLink: 'https://click.linksynergy.com/fs-bin/click?id=BsBQ7p%2fMcbE&offerid=1949696.3&type=3&subid=0',
  website: 'https://click.linksynergy.com/fs-bin/click?id=BsBQ7p%2fMcbE&offerid=1949696.3&type=3&subid=0',
  featured: true
};

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
            <p className="mt-2 text-sm text-zinc-400">{t.categoryDescriptions[camelizeSlug(category.slug)] || category.description}</p>
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {[ROWE_AND_TAYLOR_DEAL, ...featuredDeals.filter((deal) => deal.category !== 'betting' && !HIDDEN_FROM_STORES.includes(deal.name) && !HIDDEN_DUPLICATE_IDS.includes(deal.id))].map((deal) => (
          <StoreCard key={deal.id} deal={deal} t={t} />
        ))}
      </div>
    </main>
  );
}
