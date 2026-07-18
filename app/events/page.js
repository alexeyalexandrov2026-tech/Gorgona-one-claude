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
    <main className="flex-1 theme-events" style={{ background: '#090909' }}>
      {/* Hero — midnight terminal with a single violet beacon */}
      <section className="lux-hero full-bleed -mt-[60px] flex min-h-[92svh] items-end bg-[#090909]">
        <div className="lux-hero__bg">
          <video
            src="/videos/events-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.12 }}
          />
          <Parallax distance={70} className="h-full">
            <img
              src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=2400&q=80"
              alt=""
              className="lux-kenburns h-[115%] w-full object-cover opacity-80"
            />
          </Parallax>
        </div>
        {/* z-[-1] keeps the washes above the photo (bg sits at z-[-2]). */}
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(180deg,rgba(9,9,9,0.62)_0%,rgba(9,9,9,0.2)_30%,rgba(9,9,9,0.32)_62%,rgba(5,5,5,0.94)_100%)]" />
        <div className="absolute inset-0 z-[-1] bg-[linear-gradient(80deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.2)_40%,rgba(0,0,0,0)_64%)]" />
        <div
          className="pointer-events-none absolute -left-40 top-24 z-[-1] h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(175,80,255,0.55), transparent 60%)' }}
        />
        <div className="lux-grain" />
        <div className="lux-hero__grain" />

        <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-40 sm:px-6 lg:px-8">
          <p className="lux-eyebrow">Events · Nightlife · Concerts · VIP experiences</p>
          <h1
            className="lux-display mt-6 max-w-4xl text-6xl sm:text-7xl lg:text-8xl"
            style={{ fontFamily: '"Whyte Inktrap", var(--font-display), system-ui, sans-serif', letterSpacing: '-0.48px', fontWeight: 900 }}
          >
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

      {/* Departures/Search board */}
      <section className="full-bleed border-y border-white/10 bg-[#090909]">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <EventsSearch />
        </div>
      </section>

      {/* Categories */}
      <section id="explore" className="py-20 lg:py-28" style={{ background: '#090909' }}>
        <Reveal>
          <p
            className="font-mono text-2xl font-black uppercase leading-none tracking-[0.3em] text-white/25 sm:text-4xl"
            style={{ fontFamily: '"Whyte Inktrap", var(--font-display), system-ui, sans-serif', letterSpacing: '-0.48px', fontWeight: 900 }}
          >
            {t.events.categories}
          </p>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {categories.map((category) => (
            <StaggerItem key={category.slug}>
              <Link href={`/events/category/${category.slug}`} className="lux-tile group flex flex-col items-center justify-center p-12 text-center" style={{ height: "360px" }}>
                <div className="lux-tile__scrim" />
                <div className="lux-tile__glow" />
                <div className="relative flex flex-col items-center gap-8">
                  <div className="flex h-32 w-32 items-center justify-center rounded-2xl bg-white/5 border border-[#423738] shadow-xl backdrop-blur-md transition-all duration-500 group-hover:scale-105 group-hover:bg-white/10 group-hover:border-[#af50ff] group-hover:shadow-[0_0_40px_rgba(175,80,255,0.3)]">
                    <span className="text-6xl opacity-80 transition-all duration-500 group-hover:opacity-100 group-hover:scale-110">
                      {category.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif text-3xl italic text-white tracking-wide">{t.events.categoryLabels[category.slug] || category.label}</h3>
                    <p className="lux-caption-upper mt-4 opacity-0 transition-all duration-500 group-hover:opacity-100 flex items-center justify-center gap-2">
                      Explore events <ArrowIcon className="h-4 w-4" />
                    </p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Featured Events */}
      <section className="mb-20">
        <Reveal>
          <h2
            className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl font-black uppercase text-white"
            style={{ fontFamily: '"Whyte Inktrap", var(--font-display), system-ui, sans-serif', letterSpacing: '-0.48px', fontWeight: 900 }}
          >
            {t.events.featuredEvents}
          </h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={featured} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      {/* Trending Events */}
      <section className="mb-20">
        <Reveal>
          <h2
            className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl font-black uppercase text-white"
            style={{ fontFamily: '"Whyte Inktrap", var(--font-display), system-ui, sans-serif', letterSpacing: '-0.48px', fontWeight: 900 }}
          >
            {t.events.trendingEvents}
          </h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={trending} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="mb-20">
        <Reveal>
          <h2
            className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl font-black uppercase text-white"
            style={{ fontFamily: '"Whyte Inktrap", var(--font-display), system-ui, sans-serif', letterSpacing: '-0.48px', fontWeight: 900 }}
          >
            {t.events.upcomingEvents}
          </h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={upcoming} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      {/* Featured Sports Events */}
      <section className="mb-20">
        <Reveal>
          <h2
            className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl font-black uppercase text-white"
            style={{ fontFamily: '"Whyte Inktrap", var(--font-display), system-ui, sans-serif', letterSpacing: '-0.48px', fontWeight: 900 }}
          >
            {t.events.featuredSportsEvents}
          </h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={featuredSports} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>

      {/* Featured Concerts */}
      <section className="mb-20">
        <Reveal>
          <h2
            className="lux-display mt-6 max-w-2xl text-4xl sm:text-5xl font-black uppercase text-white"
            style={{ fontFamily: '"Whyte Inktrap", var(--font-display), system-ui, sans-serif', letterSpacing: '-0.48px', fontWeight: 900 }}
          >
            {t.events.featuredConcerts}
          </h2>
        </Reveal>
        <div className="mt-12">
          <EventGrid events={featuredConcerts} emptyMessage={t.events.comingSoon} t={t} />
        </div>
      </section>
    </main>
  );
}
