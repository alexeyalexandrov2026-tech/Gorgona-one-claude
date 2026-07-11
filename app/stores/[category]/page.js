import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BrandImage } from '../../components/BrandImage';
import { categories, getDealsByCategory } from '../../../lib/dealsData';
import { SearchBar } from '../../components/SearchBar';
import { getServerTranslation } from '../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const category = categories.find((entry) => entry.slug === params.category);
  if (!category) {
    return { title: 'Category not found | GORGONA ONE' };
  }
  const { t } = getServerTranslation();
  const label = t.categories[camelizeSlug(category.slug)] || category.label;
  return {
    title: `${label} deals and promo codes | GORGONA ONE`,
    description: category.description
  };
}

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export default function CategoryPage({ params }) {
  const category = categories.find((entry) => entry.slug === params.category);

  if (!category) {
    notFound();
  }

  const { t } = getServerTranslation();
  const label = t.categories[camelizeSlug(category.slug)] || category.label;
  const deals = getDealsByCategory(params.category);

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{label}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{label} deals and promo codes</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">{category.description}</p>
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
        {deals.map((deal) => (
          <article key={deal.id} className="market-card rounded-[1.5rem] p-6">
            <div className="flex items-center justify-between gap-3">
              <BrandImage src={deal.logo} alt={deal.name} className="h-12 w-12 rounded-2xl object-cover" />
              <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-gold">{deal.category}</span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white">{deal.name}</h2>
            {deal.city && (
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">{deal.city}, {deal.state}</p>
            )}
            <p className="mt-3 text-sm text-zinc-400">{deal.description}</p>

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
              <p className="mt-2 text-sm font-semibold text-white">{deal.promoCode || 'No code needed'}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
              <span>{deal.discount}</span>
              <span>Ends {deal.expirationDate}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={deal.affiliateLink} className="rounded-full bg-brand-gold px-4 py-2 text-sm font-medium text-black">{t.buttons.getDeal}</Link>
              <Link href={deal.website} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-gold hover:text-brand-gold">{t.buttons.visitStore}</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
