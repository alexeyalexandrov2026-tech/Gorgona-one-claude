import Link from 'next/link';
import { sportsbooks } from '../../lib/mockData';
import { sportsbookDescriptions, getContentText } from '../../lib/contentTranslations';
import { getServerTranslation } from '../../lib/serverLocale';

export const dynamic = 'force-dynamic';

// Official marks for the sportsbook directory cards, reusing the same
// assets served to the Betting deals grid (public/images/brands).
const SPORTSBOOK_LOGOS = {
  'hard-rock-bet': '/images/brands/hard-rock-bet-betting.svg',
  draftkings: '/images/brands/draftkings-betting.svg',
  fanduel: '/images/brands/fanduel-betting.svg',
  betmgm: '/images/brands/betmgm-betting.svg',
  'caesars-sportsbook': '/images/brands/caesars-sportsbook-betting.svg',
  'fanatics-sportsbook': '/images/brands/fanatics-sportsbook-betting.svg',
  bet365: '/images/brands/bet365-betting.svg',
  betrivers: '/images/brands/betrivers-betting.svg',
  'espn-bet': '/images/brands/espn-bet-betting.svg',
  'bally-bet': '/images/brands/bally-bet-betting.svg'
};

export default function SportsbookPage() {
  const { t, locale } = getServerTranslation();

  return (
    <main className="flex-1 py-10">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.sportsbookPage.pill}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.sportsbookPage.title}</h1>
        <p className="mt-3 max-w-2xl text-zinc-400">{t.sportsbookPage.subtitle}</p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {sportsbooks.map((book) => (
          <article key={book.id} className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-premium">
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-brand-gold/15 text-sm font-semibold text-brand-gold">
                {SPORTSBOOK_LOGOS[book.slug] ? (
                  <img src={SPORTSBOOK_LOGOS[book.slug]} alt={book.name} className="h-full w-full object-contain" />
                ) : (
                  book.logo
                )}
              </div>
              <span className="rounded-full bg-brand-gold/10 px-2 py-1 text-xs text-brand-gold">{t.sportsbookPage.pill}</span>
            </div>
            <h2 className="mt-6 text-xl font-semibold text-white">{book.name}</h2>
            <p className="mt-3 text-sm text-zinc-400">{getContentText(sportsbookDescriptions, locale, book.slug, book.description)}</p>
            <Link href={`/sportsbook/${book.slug}`} className="mt-6 inline-flex rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-black">{t.sportsbookPage.viewProfile}</Link>
          </article>
        ))}
      </div>
    </main>
  );
}
