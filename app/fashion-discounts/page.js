import { getServerTranslation } from '../../lib/serverLocale';

export default async function FashionDiscountsPage() {
  const { t } = await getServerTranslation();
  const p = t.promoPages.fashionDiscounts;
  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{p.badge}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{p.title}</h1>
        <p className="mt-4 text-zinc-400">{p.body}</p>
      </div>
    </main>
  );
}
