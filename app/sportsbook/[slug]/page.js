import { notFound } from 'next/navigation';
import Link from 'next/link';
import { sportsbooks } from '../../../lib/mockData';
import { sportsbookDescriptions, getContentText } from '../../../lib/contentTranslations';
import { getServerTranslation } from '../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

// Same mapping as /sportsbook - see that file for details.
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

// Hard Rock Bet only - approved prototype rollout (see
// prototypes/hard-rock-bet-profile-mockup.html). Same transparent-cutout
// logo and radial gradient/glow language as the approved Sportsbook
// directory card, extended into a full-width hero. Every other slug
// keeps rendering the untouched layout below.
const HARD_ROCK_BET_LOGO = '/images/brands/hard-rock-bet-integrated.png';
const HARD_ROCK_BET_GRADIENT = 'radial-gradient(70% 90% at 18% 32%, #8a68ff 0%, #6d3fdb 22%, #4a2fb0 42%, #21123f 68%, #050208 100%)';
const HARD_ROCK_BET_GLOW = 'rgba(200,170,255,0.42)';

export default function SportsbookProfilePage({ params }) {
  const sportsbook = sportsbooks.find((entry) => entry.slug === params.slug);

  if (!sportsbook) {
    notFound();
  }

  const { t, locale } = getServerTranslation();

  // Approved prototype rollout, Hard Rock Bet only - every other slug
  // falls through to the untouched layout below.
  if (sportsbook.slug === 'hard-rock-bet') {
    return (
      <main className="flex-1 py-10">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-premium">
          <div
            className="sportsbook-banner relative flex flex-col items-center gap-10 px-8 py-12 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left lg:px-14 lg:py-16"
            style={{ '--sb-gradient': HARD_ROCK_BET_GRADIENT, '--sb-glow': HARD_ROCK_BET_GLOW }}
          >
            <div className="relative z-[2] max-w-lg">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.sportsbookPage.pill} Profile</p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white">{sportsbook.name}</h1>
              <p className="mt-4 text-base leading-relaxed text-zinc-300">{getContentText(sportsbookDescriptions, locale, sportsbook.slug, sportsbook.description)}</p>
              <Link
                href={sportsbook.website}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-gold px-6 py-3.5 text-sm font-bold text-black transition hover:brightness-110"
              >
                Visit Official Website
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><path d="M15 3h6v6" /><path d="M10 14 21 3" /></svg>
              </Link>
            </div>
            <div className="relative z-[2] w-3/4 max-w-[380px] sm:w-[42%]">
              <img src={HARD_ROCK_BET_LOGO} alt={sportsbook.name} className="w-full drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)]" />
            </div>
          </div>

          <div className="grid grid-cols-2 border-y border-white/10 lg:grid-cols-4">
            {[
              { title: 'Trusted Brand', sub: 'Official sportsbook', d: 'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z' },
              { title: 'Promotions', sub: 'Exclusive offers', d: 'M3 8h18v13H3zM12 8v13M3 12h18M12 8c-1.5-3-5-4-5-1.5S9 8 12 8Zm0 0c1.5-3 5-4 5-1.5S15 8 12 8Z' },
              { title: 'Mobile Betting', sub: 'Bet on the go', d: 'M6 2h12v20H6zM11 18h2' },
              { title: 'Secure & Safe', sub: 'Your privacy matters', d: 'M4 11h16v10H4zM8 11V7a4 4 0 0 1 8 0v4' }
            ].map((f) => (
              <div key={f.title} className="flex items-start gap-3 border-r border-white/10 p-5 last:border-r-0">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="mt-0.5 h-[22px] w-[22px] shrink-0 text-brand-gold">
                  <path d={f.d} />
                </svg>
                <div>
                  <p className="text-sm font-semibold text-white">{f.title}</p>
                  <p className="text-sm text-zinc-500">{f.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-6 p-8 lg:grid-cols-2 lg:p-10">
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Offer overview</p>
              <div className="mt-4 space-y-4 text-sm text-zinc-400">
                <p><span className="text-white">Website:</span> {sportsbook.website}</p>
                <p><span className="text-white">State availability:</span> {sportsbook.state_availability}</p>
                <p><span className="text-white">{t.kosher.promoCode}:</span> {sportsbook.promo_code || 'Empty and ready for future updates'}</p>
                <p><span className="text-white">Bonus offer:</span> {sportsbook.bonus_offer}</p>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Responsible Gambling</p>
              <p className="mt-4 text-sm text-zinc-400">Play responsibly. Review terms and conditions before placing any wager. Promotional promises and bonus details should be verified directly with the operator.</p>
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="font-semibold text-white">Terms & Conditions</p>
                <p className="mt-2 text-sm text-zinc-400">All offers are subject to regional availability and official operator terms.</p>
              </div>
            </div>
          </div>

          <div className="mx-8 mb-8 rounded-2xl border border-dashed border-brand-gold/30 bg-black/20 p-6 lg:mx-10 lg:mb-10">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Affiliate Program</p>
            <p className="mt-3 text-sm text-zinc-400">
              This section is reserved for {sportsbook.name}'s affiliate tracking link and exclusive promo terms. The button above currently points to the operator's official website - affiliate links will be added here once approved.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {SPORTSBOOK_LOGOS[sportsbook.slug] && (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-brand-gold/15">
                <img src={SPORTSBOOK_LOGOS[sportsbook.slug]} alt={sportsbook.name} className="h-full w-full object-contain" />
              </div>
            )}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.sportsbookPage.pill} Profile</p>
              <h1 className="mt-2 text-3xl font-semibold text-white">{sportsbook.name}</h1>
              <p className="mt-3 max-w-2xl text-zinc-400">{getContentText(sportsbookDescriptions, locale, sportsbook.slug, sportsbook.description)}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 px-4 py-3">
            <p className="text-sm text-zinc-400">{t.category.categoryLabel}</p>
            <p className="font-semibold text-white">{t.sportsbookPage.pill}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Offer overview</p>
            <div className="mt-4 space-y-4 text-sm text-zinc-400">
              <p><span className="text-white">Website:</span> {sportsbook.website}</p>
              <p><span className="text-white">State availability:</span> {sportsbook.state_availability}</p>
              <p><span className="text-white">{t.kosher.promoCode}:</span> {sportsbook.promo_code || 'Empty and ready for future updates'}</p>
              <p><span className="text-white">Bonus offer:</span> {sportsbook.bonus_offer}</p>
            </div>
            <Link
              href={sportsbook.website}
              className="market-button mt-6 inline-flex"
            >
              Visit Official Website
            </Link>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Responsible Gambling</p>
            <p className="mt-4 text-sm text-zinc-400">Play responsibly. Review terms and conditions before placing any wager. Promotional promises and bonus details should be verified directly with the operator.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">Terms & Conditions</p>
              <p className="mt-2 text-sm text-zinc-400">All offers are subject to regional availability and official operator terms.</p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-brand-gold/30 bg-black/20 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Affiliate Program</p>
          <p className="mt-3 text-sm text-zinc-400">
            This section is reserved for {sportsbook.name}'s affiliate tracking link and exclusive promo terms. The button above currently points to the operator's official website - affiliate links will be added here once approved.
          </p>
        </div>
      </div>
    </main>
  );
}
