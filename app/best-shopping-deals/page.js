import Link from 'next/link';
import { getServerTranslations } from '../../lib/serverLocale';

export default async function BestShoppingDealsPage() {
  const { t } = await getServerTranslations();

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.seoPages.landingPill}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.seoPages.bestShoppingTitle}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">{t.seoPages.bestShoppingBody}</p>
        <Link href="/stores" className="mt-6 inline-flex rounded-full bg-brand-gold px-4 py-2 font-medium text-black">{t.seoPages.browseStores}</Link>
      </div>
    </main>
  );
}
