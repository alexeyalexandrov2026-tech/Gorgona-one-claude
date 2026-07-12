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

export default function SportsbookProfilePage({ params }) {
  const sportsbook = sportsbooks.find((entry) => entry.slug === params.slug);

  if (!sportsbook) {
    notFound();
  }

  const { t, locale } = getServerTranslation();

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
