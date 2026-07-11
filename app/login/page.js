import { getServerTranslation } from '../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export default function LoginPage() {
  const { t } = getServerTranslation();

  return (
    <main className="flex flex-1 items-center justify-center py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.auth.pill}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.auth.title}</h1>
        <p className="mt-3 text-zinc-400">{t.auth.subtitle}</p>
        <div className="mt-6 space-y-4">
          <input className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" placeholder={t.auth.email} />
          <input className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" placeholder={t.auth.password} />
          <button className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black">{t.auth.continueLabel}</button>
        </div>
      </div>
    </main>
  );
}
