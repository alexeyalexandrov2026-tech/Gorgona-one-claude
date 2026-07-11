import Link from 'next/link';
import { listBusinesses, listCategories, isSupabaseConfigured } from '../../lib/businesses';
import { getServerTranslation } from '../../lib/serverLocale';
import { trackEvent } from '../../lib/analyticsEvents';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Business Directory | GORGONA ONE',
  description: 'Search verified businesses, promotions, and offers across every category on GORGONA ONE.'
};

export default async function BusinessesPage({ searchParams }) {
  const { t } = getServerTranslation();
  const search = searchParams?.q || '';
  const category = searchParams?.category || '';
  const city = searchParams?.city || '';
  const sort = searchParams?.sort || 'newest';
  const page = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1);

  const [{ items: businesses, total, pageSize, configured }, { items: categories }] = await Promise.all([
    listBusinesses({ search, category, city, sort, page }),
    listCategories()
  ]);

  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  if (search) {
    await trackEvent('search', null, { query: search, category, city });
  }

  function pageHref(nextPage) {
    const params = new URLSearchParams({ q: search, category, city, sort, page: String(nextPage) });
    return `/businesses?${params.toString()}`;
  }

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Business Directory</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Find and compare businesses on GORGONA ONE</h1>
      </div>

      <form method="get" className="mb-8 grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 md:grid-cols-4">
        <input name="q" defaultValue={search} placeholder="Search businesses" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none md:col-span-2" />
        <select name="category" defaultValue={category} className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none">
          <option value="">All categories</option>
          {categories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
        </select>
        <select name="sort" defaultValue={sort} className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none">
          <option value="newest">Newest</option>
          <option value="name">Name A-Z</option>
          <option value="featured">Featured first</option>
        </select>
        <input name="city" defaultValue={city} placeholder="City" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
        <button type="submit" className="rounded-xl bg-brand-gold px-4 py-3 font-medium text-black">Search</button>
      </form>

      {!configured && (
        <p className="mb-8 rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-6 text-zinc-300">
          The business directory is not connected to a database yet. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to go live.
        </p>
      )}

      {configured && businesses.length === 0 && (
        <p className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-400">No businesses match your search yet.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {businesses.map((business) => (
          <Link key={business.id} href={`/business/${business.slug}`} className="market-card rounded-2xl p-5">
            {business.featured && <span className="mb-2 inline-block rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-black">Featured</span>}
            <h2 className="text-lg font-semibold text-white">{business.name}</h2>
            <p className="mt-1 text-sm text-brand-gold">{business.categories?.name}</p>
            <p className="mt-2 line-clamp-3 text-sm text-zinc-400">{business.description}</p>
            {business.city && <p className="mt-3 text-xs text-zinc-500">{business.city}{business.state ? `, ${business.state}` : ''}</p>}
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link href={pageHref(Math.max(1, page - 1))} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-brand-gold hover:text-brand-gold">Previous</Link>
          <span className="text-sm text-zinc-400">Page {page} of {totalPages}</span>
          <Link href={pageHref(Math.min(totalPages, page + 1))} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-brand-gold hover:text-brand-gold">Next</Link>
        </div>
      )}
    </main>
  );
}
