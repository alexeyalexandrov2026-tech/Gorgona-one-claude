import Link from 'next/link';
import { getRentals } from '../../lib/rentalsData';
import { rentalDescriptions, getContentText } from '../../lib/contentTranslations';
import { getServerTranslation } from '../../lib/serverLocale';
import { SectionHero } from '../components/SectionHero';

export const dynamic = 'force-dynamic';

export default function RentalsPage() {
  const rentals = getRentals();
  const { t, locale } = getServerTranslation();

  return (
    <main className="flex-1 theme-car">
      <SectionHero
        eyebrow={t.rentals.pill}
        kicker="BMW browsing · Ferrari cinematic detail"
        title={t.rentals.title}
        subtitle={t.rentals.subtitle}
        image="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2400&q=80"
      />

      <div className="grid gap-6 py-8 md:grid-cols-2 xl:grid-cols-3">
        {rentals.map((item) => (
          <article key={item.id} className="market-card overflow-hidden rounded-[1.5rem]">
            <img src={item.image} alt={item.title} className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">{item.category}</p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{item.title}</h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">{item.availability}</span>
              </div>
              <p className="mt-4 text-sm text-zinc-400">{getContentText(rentalDescriptions, locale, item.id, item.description)}</p>
              <div className="mt-5 grid gap-2 text-sm text-zinc-300">
                <div className="flex items-center justify-between"><span>{t.rentals.company}</span><span className="text-white">{item.company}</span></div>
                <div className="flex items-center justify-between"><span>{t.rentals.location}</span><span className="text-white">{item.location}</span></div>
                <div className="flex items-center justify-between"><span>{t.rentals.daily}</span><span className="text-brand-gold">{item.dailyPrice}</span></div>
                <div className="flex items-center justify-between"><span>{t.rentals.weekly}</span><span className="text-white">{item.weeklyPrice}</span></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/rentals/${item.slug}`} className="market-button">{t.common.viewDetails}</Link>
                <Link href="/partner" className="market-button-secondary">{t.rentals.reserve}</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
