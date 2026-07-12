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

// Each logo's own backdrop color (sampled from the uploaded file itself),
// carried into the banner so the mark reads as a full, edge-to-edge brand
// panel instead of floating on a mismatched background - same colors the
// logo's own text/icon were already designed against, so contrast holds.
const SPORTSBOOK_BANNER_COLORS = {
  'hard-rock-bet': '#6a47f3',
  draftkings: '#ffffff',
  fanduel: '#ffffff',
  betmgm: '#ffffff',
  'caesars-sportsbook': '#e8e3d5',
  'fanatics-sportsbook': '#080303',
  bet365: '#035d48',
  betrivers: '#f9f9f9',
  'espn-bet': '#05122e',
  'bally-bet': '#fcfbfc'
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
          <article key={book.id} className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-premium">
            <div
              className="relative flex h-40 items-center justify-center"
              style={{ backgroundColor: SPORTSBOOK_BANNER_COLORS[book.slug] || 'rgba(255,255,255,0.05)' }}
            >
              {SPORTSBOOK_LOGOS[book.slug] ? (
                <img src={SPORTSBOOK_LOGOS[book.slug]} alt={book.name} className="h-full w-full object-contain p-5" />
              ) : (
                <span className="text-sm font-semibold text-brand-gold">{book.logo}</span>
              )}
              <span className="absolute right-4 top-4 rounded-full bg-black/40 px-2 py-1 text-xs text-brand-gold backdrop-blur">{t.sportsbookPage.pill}</span>
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold text-white">{book.name}</h2>
              <p className="mt-3 text-sm text-zinc-400">{getContentText(sportsbookDescriptions, locale, book.slug, book.description)}</p>
              <Link href={`/sportsbook/${book.slug}`} className="mt-6 inline-flex rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-gold transition hover:bg-brand-gold hover:text-black">{t.sportsbookPage.viewProfile}</Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
