import Link from 'next/link';
import { listCategories } from '../../lib/businesses';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Categories | GORGONA ONE',
  description: 'Browse every business category on GORGONA ONE.'
};

export default async function CategoriesPage() {
  const { items: categories, configured } = await listCategories();

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Directory</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Browse categories</h1>
      </div>

      {!configured && (
        <p className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-6 text-zinc-300">
          The category directory is not connected to a database yet.
        </p>
      )}

      {configured && categories.length === 0 && (
        <p className="rounded-2xl border border-white/10 bg-white/5 p-6 text-zinc-400">No categories have been added yet.</p>
      )}

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.slug} href={`/category/${category.slug}`} className="market-card rounded-2xl p-5">
            <p className="text-2xl">{category.icon || '🏷️'}</p>
            <p className="mt-2 font-semibold text-white">{category.name}</p>
            {category.description && <p className="mt-2 text-sm text-zinc-400">{category.description}</p>}
          </Link>
        ))}
      </div>
    </main>
  );
}
