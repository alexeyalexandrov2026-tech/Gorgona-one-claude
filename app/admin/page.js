import { getServerTranslation } from '../../lib/serverLocale';

export default async function AdminPage() {
  const { t } = await getServerTranslation();
  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-brand-gold/20 bg-brand-gold/10 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.admin.badge}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.admin.title}</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            t.admin.addStores,
            t.admin.editCoupons,
            t.admin.deleteOffers,
            t.admin.importCsv
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-white">{item}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
