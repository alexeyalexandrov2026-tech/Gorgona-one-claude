import Link from 'next/link';
import { Reveal, Stagger, StaggerItem, Parallax } from '../components/Motion';
import {
  getEventCategories,
  getFeaturedEvents,
  getTrendingEvents,
  getUpcomingEvents,
  getFeaturedConcerts,
  getFeaturedSportsEvents
} from '../../lib/eventsData';
import { EventGrid } from './EventGrid';
import { EventsSearch } from './EventsSearch';
import { getServerTranslations } from '../../lib/serverLocale';

export const metadata = {
  title: 'Tickets & Events | GORGONA ONE',
  description: 'Sports tickets and concert tickets from trusted providers, all in one place.'
};

const ArrowIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

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
      <section className="lux-hero full-bleed -mt-[60px] flex min-h-[92svh] items-end bg-[#0a0a0a]">
        <div className="lux-hero__bg">
          <Parallax distance={70} className="h-full">
            <img
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2400&q=80"
              alt=""
              className="lux-kenburns h-[115%] w-full object-cover opacity-80"
            />
          </Parallax>
        </div>
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(9,9,9,0.62)_0%,rgba(9,9,9,0.2)_30%,rgba(9,9,9,0.32)_62%,rgba(5,5,5,0.94)_100%)]" />
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(80deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0)_64%)]" />
        <div className="lux-grain" />
        <div className="lux-hero__grain" />

        <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-40 sm:px-6 lg:px-8">
          <p className="lux-eyebrow">Events · Nightlife · Concerts · VIP experiences</p>
          <h1 className="lux-display mt-6 max-w-4xl text-6xl sm:text-7xl lg:text-8xl">
            {t.events.marketplaceTitle}
          </h1>
          <p className="lux-lede mt-8 text-lg">
            {t.events.marketplaceSubtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#explore" className="lux-btn">Explore events <ArrowIcon className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="full-bleed border-y border-white/10 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <EventsSearch />
        </div>
      </section>

      <section id="explore" className="py-20 lg:py-28">
        <Reveal>
          <p className="font-mono text-2xl font-medium uppercase leading-none tracking-[0.3em] text-white/25 sm:text-4xl">
            {t.events.categories}
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2">
          {categories.map((category) => (
            <StaggerItem key={category.slug}>
              <Link href={`/events/category/${category.slug}`} className="lux-tile group flex h-[360px] flex-col justify-end p-7" style={{ height: "360px" }}>
                <div className="lux-tile__media">
                  <img src={category.image} alt={category.label} className="h-full w-full object-cover" />
                </div>
                <div className="lux-tile__scrim" />
                <div className="lux-tile__glow" />
                <div className="relative">
                  <p className="lux-caption-upper">{category.icon} {t.events.categoryLabels[category.slug] || category.label}</p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3 className="font-serif text-3xl italic text-white">{t.events.categoryLabels[category.slug] || category.label}</h3>
                    <ArrowIcon className="h-5 w-5 shrink-0 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      <section className="mb-20">
        <Reveal>
          <h2 className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl">{t.events.featuredEvents}</h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={featured} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      <section className="mb-20">
        <Reveal>
          <h2 className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl">{t.events.trendingEvents}</h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={trending} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      <section className="mb-20">
        <Reveal>
          <h2 className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl">{t.events.upcomingEvents}</h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={upcoming} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      <section className="mb-20">
        <Reveal>
          <h2 className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl">{t.events.featuredSportsEvents}</h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={featuredSports} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      <section className="mb-20">
        <Reveal>
          <h2 className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl">{t.events.featuredConcerts}</h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={featuredConcerts} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>
    </main>
  );
}
