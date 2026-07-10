import { getServerTranslations } from '../../lib/serverLocale';

export default async function AIRReadyPage() {
  const { t } = await getServerTranslations();

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.seoPages.aiPill}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.seoPages.aiReadyTitle}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">{t.seoPages.aiReadyBody}</p>
      </div>
    </main>
  );
}
