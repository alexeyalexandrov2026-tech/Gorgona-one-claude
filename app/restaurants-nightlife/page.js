import Link from 'next/link';
import { VENUE_CATEGORIES, getVenuesByCategory } from '../../lib/restaurantsNightlifeData';
import { restaurantsNightlifeDescriptions, getContentText } from '../../lib/contentTranslations';
import { getServerTranslation } from '../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export default function RestaurantsNightlifePage({ searchParams }) {
  const activeCategory = searchParams?.category === 'restaurant' || searchParams?.category === 'nightlife' ? searchParams.category : 'all';
  const venues = getVenuesByCategory(activeCategory);
  const { t, locale } = getServerTranslation();

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="market-pill">{t.restaurantsNightlife.pill}</p>
        <h1 className="market-title mt-4">{t.restaurantsNightlife.title}</h1>
        <p className="market-subtitle">{t.restaurantsNightlife.subtitle}</p>
      </div>

      <div className="mb-8 flex flex-wrap gap-3">
        <Link href="/restaurants-nightlife" className={`rounded-full border px-4 py-2 text-sm transition ${activeCategory === 'all' ? 'border-brand-gold bg-brand-gold text-black' : 'border-white/10 bg-white/5 text-zinc-300 hover:border-brand-gold hover:text-brand-gold'}`}>
          {t.restaurantsNightlife.all}
        </Link>
        {VENUE_CATEGORIES.map((category) => (
          <Link
            key={category.slug}
            href={`/restaurants-nightlife?category=${category.slug}`}
            className={`rounded-full border px-4 py-2 text-sm transition ${activeCategory === category.slug ? 'border-brand-gold bg-brand-gold text-black' : 'border-white/10 bg-white/5 text-zinc-300 hover:border-brand-gold hover:text-brand-gold'}`}
          >
            {category.slug === 'restaurant' ? t.restaurantsNightlife.restaurants : t.restaurantsNightlife.nightlife}
          </Link>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {venues.map((venue) => (
          <article key={venue.id} className="market-card overflow-hidden rounded-[1.5rem]">
            <img src={venue.image} alt={venue.name} className="h-48 w-full object-cover" />
            <div className="p-6">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-brand-gold">
                    {venue.category === 'restaurant' ? t.restaurantsNightlife.restaurants : t.restaurantsNightlife.nightlife}
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-white">{venue.name}</h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300">★ {venue.rating}</span>
              </div>
              <p className="mt-4 text-sm text-zinc-400">{getContentText(restaurantsNightlifeDescriptions, locale, venue.id, venue.description)}</p>
              <div className="mt-5 flex items-center justify-between text-sm text-zinc-300">
                <span>{t.restaurantsNightlife.location}</span>
                <span className="text-white">{venue.location}</span>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href={`/restaurants-nightlife/${venue.slug}`} className="market-button">{t.common.viewDetails}</Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
