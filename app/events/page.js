import Link from 'next/link';
import {
  EVENT_CATEGORY_GROUPS,
  getEventCategories,
  getFeaturedEvents,
  getTrendingEvents,
  getUpcomingEvents,
  getFeaturedConcerts,
  getFeaturedSportsEvents
} from '../../lib/eventsData';
import { EventGrid } from './EventGrid';
import { EventsSearch } from './EventsSearch';
import { SectionHero } from '../components/SectionHero';
import { getServerTranslations } from '../../lib/serverLocale';

export const metadata = {
  title: 'Tickets & Events | GORGONA ONE',
  description: 'Sports tickets and concert tickets from trusted providers, all in one place.'
};

export default async function EventsMarketplacePage() {
  const { t } = await getServerTranslations();
  const categories = getEventCategories();
  const featured = getFeaturedEvents();
  const trending = getTrendingEvents();
  const upcoming = getUpcomingEvents(6);
  const featuredConcerts = getFeaturedConcerts();
  const featuredSports = getFeaturedSportsEvents();

  return (
    <main className="flex-1 theme-events">
      <SectionHero
        eyebrow={t.events.marketplaceTitle}
        title={t.events.marketplaceTitle}
        subtitle={t.events.marketplaceSubtitle}
        kicker="Events · Nightlife · Concerts · VIP experiences"
        image="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2400&q=80"
      />

      <div className="mb-8 mt-8">
        <EventsSearch />
      </div>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white">{t.events.categories}</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {EVENT_CATEGORY_GROUPS.map((group) => (
            <div key={group.slug} className="market-card rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.3em] text-brand-gold">{group.icon} {group.slug === 'sports' ? t.events.sportsTickets : t.events.concertTickets}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {categories.filter((c) => c.group === group.slug).map((category) => (
                  <Link key={category.slug} href={`/events/category/${category.slug}`} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 transition hover:border-brand-gold hover:text-brand-gold">
                    {category.icon} {t.events.categoryLabels[category.slug] || category.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white">{t.events.featuredEvents}</h2>
        <div className="mt-4">
          <EventGrid events={featured} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white">{t.events.trendingEvents}</h2>
        <div className="mt-4">
          <EventGrid events={trending} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white">{t.events.upcomingEvents}</h2>
        <div className="mt-4">
          <EventGrid events={upcoming} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white">{t.events.featuredSportsEvents}</h2>
        <div className="mt-4">
          <EventGrid events={featuredSports} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-white">{t.events.featuredConcerts}</h2>
        <div className="mt-4">
          <EventGrid events={featuredConcerts} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>
    </main>
  );
}
