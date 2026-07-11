import Link from 'next/link';
import { listBusinesses, listCategories } from '../../../lib/businesses';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { items: categories } = await listCategories();
  const category = categories.find((c) => c.slug === params.slug);
  return {
    title: category ? `${category.name} | GORGONA ONE` : 'Category | GORGONA ONE',
    description: category?.description || 'Browse businesses in this category on GORGONA ONE.'
  };
}

export default async function CategoryDetailPage({ params, searchParams }) {
  const page = Math.max(1, parseInt(searchParams?.page || '1', 10) || 1);
  const [{ items: categories }, { items: businesses, total, pageSize, configured, error }] = await Promise.all([
    listCategories(),
    listBusinesses({ category: params.slug, sort: searchParams?.sort || 'newest', page })
  ]);
  const category = categories.find((c) => c.slug === params.slug);
  const totalPages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Category</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{category?.name || params.slug}</h1>
        {category?.description && <p className="mt-2 text-zinc-400">{category.description}</p>}
      </div>

      {!configured && (
        <p className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-6 text-zinc-300">
          The business directory is not connected to a database yet.
        </p>
      )}

      {configured && error && (
        <p className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-red-400">
          Database error: {error}. This usually means database/bootstrap.sql (or schema.sql) has not been run yet in the Supabase SQL editor.
        </p>
      )}

      {configured && !error && businesses.length === 0 && (
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-400">No businesses in this category yet.</p>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {businesses.map((business) => (
          <Link key={business.id} href={`/business/${business.slug}`} className="market-card rounded-2xl p-5">
            <h2 className="text-lg font-semibold text-white">{business.name}</h2>
            <p className="mt-2 line-clamp-3 text-sm text-zinc-400">{business.description}</p>
            {business.city && <p className="mt-3 text-xs text-zinc-500">{business.city}{business.state ? `, ${business.state}` : ''}</p>}
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex items-center justify-center gap-3">
          <Link href={`/category/${params.slug}?page=${Math.max(1, page - 1)}`} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-brand-gold hover:text-brand-gold">Previous</Link>
          <span className="text-sm text-zinc-400">Page {page} of {totalPages}</span>
          <Link href={`/category/${params.slug}?page=${Math.min(totalPages, page + 1)}`} className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 hover:border-brand-gold hover:text-brand-gold">Next</Link>
        </div>
      )}
    </main>
  );
}
