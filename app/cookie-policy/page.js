import { getServerTranslations } from '../../lib/serverLocale';

export default async function CookiePolicyPage() {
  const { t } = await getServerTranslations();

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.legal.cookiePill}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.legal.cookieTitle}</h1>
        <p className="mt-4 max-w-3xl text-zinc-400">{t.legal.cookieBody}</p>
      </div>
    </main>
  );
}
