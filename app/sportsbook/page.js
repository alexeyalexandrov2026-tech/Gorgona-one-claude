import Link from 'next/link';
import { getSportsbooks } from '../../lib/data/sportsbooks';
import { getServerTranslations } from '../../lib/serverLocale';

export default async function SportsbookPage() {
  const [sportsbooks, { t }] = await Promise.all([getSportsbooks(), getServerTranslations()]);

  return (
    <main className="flex-1 py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.sportsbookPage.title}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.sportsbookPage.directoryHeading}</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">{t.sportsbookPage.directorySubtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sportsbooks.map((book) => (
          <article key={book.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-premium">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-gold/15 text-sm font-semibold text-brand-gold">{book.logo}</div>
              <span className="rounded-full bg-brand-gold/10 px-2 py-1 text-xs text-brand-gold">{t.sportsbookPage.categoryLabel}</span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white">{book.name}</h2>
            <p className="mt-3 text-sm text-zinc-400">{book.description}</p>
            <Link href={`/sportsbook/${book.slug}`} className="mt-6 inline-flex rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-black">{t.sportsbookPage.viewProfile}</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
