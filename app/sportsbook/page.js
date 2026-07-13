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
  'caesars': '/images/brands/caesars-sportsbook-betting.svg',
  'fanatics': '/images/brands/fanatics-sportsbook-betting.svg',
  bet365: '/images/brands/bet365-betting.svg',
  betrivers: '/images/brands/betrivers-betting.svg',
  'espn-bet': '/images/brands/espn-bet-betting.svg',
  'bally-bet': '/images/brands/bally-bet-betting.svg'
};

// Each logo's own backdrop color (sampled from the uploaded file itself)
// anchors one end of a diagonal brand-toned gradient, so the panel reads as
// a rich, edge-to-edge premium background instead of a flat swatch - while
// staying seamless against the logo's own baked-in edge color and holding
// the same contrast its text/icon were already designed against.
const SPORTSBOOK_BANNER_GRADIENTS = {
  'hard-rock-bet': 'linear-gradient(135deg, #8a68ff 0%, #4a2fb0 100%)',
  draftkings: 'linear-gradient(135deg, #ffffff 0%, #e9e9ec 100%)',
  fanduel: 'linear-gradient(135deg, #f4f9ff 0%, #ffffff 100%)',
  betmgm: 'linear-gradient(135deg, #fbf7ec 0%, #ffffff 100%)',
  'caesars': 'linear-gradient(135deg, #e8e3d5 0%, #b9a06c 100%)',
  'fanatics': 'linear-gradient(135deg, #1a1414 0%, #050202 100%)',
  bet365: 'linear-gradient(135deg, #0a7a5c 0%, #023d2d 100%)',
  betrivers: 'linear-gradient(135deg, #ffffff 0%, #d9d9de 100%)',
  'espn-bet': 'linear-gradient(135deg, #0c2452 0%, #030a1c 100%)',
  'bally-bet': 'linear-gradient(135deg, #fbf3f5 0%, #ecdbe0 100%)'
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
          <article key={book.id} className="market-card overflow-hidden rounded-3xl">
            <div
              className="relative flex h-48 items-center justify-center"
              style={{ background: SPORTSBOOK_BANNER_GRADIENTS[book.slug] || 'rgba(255,255,255,0.05)' }}
            >
              {SPORTSBOOK_LOGOS[book.slug] ? (
                <img src={SPORTSBOOK_LOGOS[book.slug]} alt={book.name} className="h-full w-full object-contain p-4" />
              ) : (
                <span className="text-sm font-semibold text-brand-gold">{book.logo}</span>
              )}
              <span className="absolute right-4 top-4 rounded-full bg-brand-gold px-3 py-1 text-xs font-semibold text-black/80 shadow-sm">{t.sportsbookPage.pill}</span>
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
