import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BrandImage } from '../../components/BrandImage';
import { getCategories, getDealsByCategory } from '../../../lib/data/deals';
import { SearchBar } from '../../components/SearchBar';
import { getServerTranslations } from '../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export default async function CategoryPage({ params }) {
  const categories = await getCategories();
  const category = categories.find((entry) => entry.slug === params.category);

  if (!category) {
    notFound();
  }

  const [deals, { t }] = await Promise.all([getDealsByCategory(params.category), getServerTranslations()]);
  const categoryLabel = t.categories[category.slug] || category.label;
  const categoryDescription = t.categoryDescriptions[category.slug] || category.description;

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{categoryLabel}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{categoryLabel} {t.stores.dealsAndPromoCodes}</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">{categoryDescription}</p>
      </div>

      <div className="mb-8">
        <SearchBar />
      </div>

      <div className="mb-8 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((item) => (
          <Link key={item.slug} href={`/stores/${item.slug}`} className={`rounded-2xl border px-4 py-3 text-sm transition ${item.slug === params.category ? 'border-brand-gold bg-brand-gold/10 text-brand-gold' : 'border-white/10 bg-white/5 text-zinc-300 hover:border-brand-gold hover:text-brand-gold'}`}>
            {item.icon} {t.categories[item.slug] || item.label}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {deals.map((deal) => (
          <article key={deal.id} className="market-card rounded-[1.5rem] p-6">
            <div className="flex items-center justify-between gap-3">
              <BrandImage src={deal.logo} alt={deal.name} className="h-12 w-12 rounded-2xl object-cover" />
              <span className="rounded-full bg-brand-gold/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-brand-gold">{t.categories[deal.category] || deal.category}</span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white">{deal.name}</h2>
            <p className="mt-3 text-sm text-zinc-400">{deal.description}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">{t.stores.promoCode}</p>
              <p className="mt-2 text-sm font-semibold text-white">{deal.promoCode || t.stores.noCodeNeeded}</p>
            </div>
            <div className="mt-4 flex items-center justify-between text-sm text-zinc-400">
              <span>{deal.discount}</span>
              <span>{t.stores.ends} {deal.expirationDate}</span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href={deal.affiliateLink} className="rounded-full bg-brand-gold px-4 py-2 text-sm font-medium text-black">{t.common.getDeal}</Link>
              <Link href={deal.website} className="rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white transition hover:border-brand-gold hover:text-brand-gold">{t.common.visitStore}</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
