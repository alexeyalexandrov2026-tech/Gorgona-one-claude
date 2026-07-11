import { notFound } from 'next/navigation';
import { getSportsbooks } from '../../../lib/data/sportsbooks';
import { getServerTranslations } from '../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export default async function SportsbookProfilePage({ params }) {
  const [sportsbooks, { t }] = await Promise.all([getSportsbooks(), getServerTranslations()]);
  const sportsbook = sportsbooks.find((entry) => entry.slug === params.slug);

  if (!sportsbook) {
    notFound();
  }

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.sportsbookPage.profileTitle}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{sportsbook.name}</h1>
            <p className="mt-3 max-w-2xl text-zinc-400">{sportsbook.description}</p>
          </div>
          <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 px-4 py-3">
            <p className="text-sm text-zinc-400">{t.brands.categoryLabel}</p>
            <p className="font-semibold text-white">{t.sportsbookPage.categoryLabel}</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.sportsbookPage.offerOverview}</p>
            <div className="mt-4 space-y-4 text-sm text-zinc-400">
              <p><span className="text-white">{t.sportsbookPage.website}:</span> {sportsbook.website}</p>
              <p><span className="text-white">{t.sportsbookPage.stateAvailability}:</span> {sportsbook.state_availability}</p>
              <p><span className="text-white">{t.sportsbookPage.promoCode}:</span> {sportsbook.promo_code || t.sportsbookPage.promoCodeEmpty}</p>
              <p><span className="text-white">{t.sportsbookPage.bonusOffer}:</span> {sportsbook.bonus_offer}</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.sportsbookPage.responsibleGambling}</p>
            <p className="mt-4 text-sm text-zinc-400">{t.sportsbookPage.responsibleGamblingBody}</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="font-semibold text-white">{t.sportsbookPage.termsTitle}</p>
              <p className="mt-2 text-sm text-zinc-400">{t.sportsbookPage.termsBody}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
