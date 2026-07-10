import { notFound } from 'next/navigation';
import { sportsbooks } from '../../../lib/mockData';

export function generateStaticParams() {
  return sportsbooks.map((book) => ({ slug: book.slug }));
}

export default function SportsbookProfilePage({ params }) {
  const sportsbook = sportsbooks.find((entry) => entry.slug === params.slug);

  if (!sportsbook) {
    notFound();
  }

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Sportsbook Profile</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{sportsbook.name}</h1>
            <p className="mt-3 max-w-2xl text-zinc-400">{sportsbook.description}</p>
          </div>
          <div className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 px-4 py-3">
            <p className="text-sm text-zinc-400">Category</p>
            <p className="font-semibold text-white">Sports Betting</p>
          </div>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Offer overview</p>
            <div className="mt-4 space-y-4 text-sm text-zinc-400">
              <p><span className="text-white">Website:</span> {sportsbook.website}</p>
              <p><span className="text-white">State availability:</span> {sportsbook.state_availability}</p>
              <p><span className="text-white">Promo code:</span> {sportsbook.promo_code || 'Empty and ready for future updates'}</p>
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
      </div>
    </main>
  );
}
