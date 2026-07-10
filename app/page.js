import Link from 'next/link';
import { SearchBar } from './components/SearchBar';
import { NewsletterSignup } from './components/NewsletterSignup';
import { EventGrid } from './events/EventGrid';
import { categories as dealCategories } from '../lib/dealsData';
import {
  getFeaturedEvents,
  getTrendingEvents,
  getUpcomingEvents,
  getFeaturedConcerts,
  getFeaturedSportsEvents
} from '../lib/eventsData';
import { getServerTranslations } from '../lib/serverLocale';

export default async function HomePage() {
  const { t } = await getServerTranslations();

  const heroPanelItems = [
    { title: t.home.carRentals, value: t.home.heroPanelCarValue, description: t.home.heroPanelCarDesc },
    { title: t.home.yachtRentals, value: t.home.heroPanelYachtValue, description: t.home.heroPanelYachtDesc },
    { title: t.home.sportsbookBonuses, value: t.home.heroPanelSportsbookValue, description: t.home.heroPanelSportsbookDesc },
    { title: t.home.vacationRentals, value: t.home.heroPanelVacationValue, description: t.home.heroPanelVacationDesc }
  ];

  const experienceItems = [
    { title: t.home.carRentals, description: t.home.carRentalsDesc, href: '/rentals/car-rentals' },
    { title: t.home.yachtRentals, description: t.home.yachtRentalsDesc, href: '/rentals/yacht-rentals' },
    { title: t.home.sportsbookBonuses, description: t.home.sportsbookBonusesDesc, href: '/sportsbook' },
    { title: t.home.vacationRentals, description: t.home.vacationRentalsDesc, href: '/rentals/vacation-rentals' },
    { title: t.home.miamiExperiences, description: t.home.miamiExperiencesDesc, href: '/rentals/miami-experiences' },
    { title: t.home.restaurantsNightlife, description: t.home.restaurantsNightlifeDesc, href: '/coupons' }
  ];

  const featuredEvents = getFeaturedEvents().slice(0, 3);
  const trendingEvents = getTrendingEvents().slice(0, 3);
  const upcomingEvents = getUpcomingEvents(3);
  const featuredConcerts = getFeaturedConcerts().slice(0, 3);
  const featuredSportsEvents = getFeaturedSportsEvents().slice(0, 3);

  const featureItems = [
    { title: t.home.userAccountsTitle, body: t.home.userAccountsBody, href: '/login' },
    { title: t.home.partnerPortalTitle, body: t.home.partnerPortalBody, href: '/partner' },
    { title: t.home.adminControlTitle, body: t.home.adminControlBody, href: '/admin' },
    { title: t.home.legalTitle, body: t.home.legalBody, href: '/terms' }
  ];

  return (
    <main className="flex-1">
      <section className="grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="market-pill mb-4">{t.home.heroPill}</p>
          <h1 className="market-title text-4xl sm:text-5xl lg:text-6xl">
            {t.home.heroTitle}
          </h1>
          <p className="market-subtitle text-xl">{t.home.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/stores" className="market-button">{t.home.exploreMarketplace}</Link>
            <Link href="/coupons" className="market-button-secondary">{t.home.browseDeals}</Link>
            <Link href="/partner" className="market-button-secondary border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black">{t.home.joinAsPartner}</Link>
          </div>
        </div>
        <div className="market-shell rounded-[2rem] border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-6">
          <div className="rounded-2xl border border-white/10 bg-black/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.home.featured}</p>
            <div className="mt-6 space-y-3">
              {heroPanelItems.map((item) => (
                <div key={item.title} className="market-card rounded-2xl p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-white">{item.title}</p>
                    <span className="text-sm text-brand-gold">{item.value}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <SearchBar />
      </section>

      <section className="py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">{t.home.popularCategories}</h2>
          <Link href="/stores" className="text-sm text-brand-gold">{t.home.browseAll}</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dealCategories.map((category) => (
            <Link key={category.slug} href={`/stores/${category.slug}`} className="market-card rounded-2xl p-5">
              <p className="text-2xl">{category.icon}</p>
              <p className="mt-3 font-semibold text-white">{t.categories[category.slug] || category.label}</p>
              <p className="mt-2 text-sm text-zinc-400">{t.categoryDescriptions[category.slug] || category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-6">
        <div className="market-shell rounded-[2rem] bg-gradient-to-br from-black to-zinc-900 p-8">
          <h2 className="text-2xl font-semibold text-white">{t.home.experiencesTitle}</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">{t.home.experiencesSubtitle}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {experienceItems.map((item) => (
              <div key={item.title} className="market-card rounded-2xl p-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                <Link href={item.href} className="mt-4 inline-flex text-sm text-brand-gold">{t.home.viewSection}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="market-shell rounded-[2rem] p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">{t.events.marketplaceTitle}</h2>
            <Link href="/events" className="text-sm text-brand-gold">{t.events.viewAllEvents}</Link>
          </div>
          <p className="mt-3 max-w-2xl text-zinc-400">{t.events.marketplaceSubtitle}</p>

          <div className="mt-6">
            <h3 className="text-lg font-semibold text-white">{t.events.featuredEvents}</h3>
            <div className="mt-3">
              <EventGrid events={featuredEvents} emptyMessage={t.events.comingSoon} t={t} />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">{t.events.trendingEvents}</h3>
            <div className="mt-3">
              <EventGrid events={trendingEvents} emptyMessage={t.events.comingSoon} t={t} />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">{t.events.upcomingEvents}</h3>
            <div className="mt-3">
              <EventGrid events={upcomingEvents} emptyMessage={t.events.comingSoon} t={t} />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">{t.events.featuredSportsEvents}</h3>
            <div className="mt-3">
              <EventGrid events={featuredSportsEvents} emptyMessage={t.events.comingSoon} t={t} />
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold text-white">{t.events.featuredConcerts}</h3>
            <div className="mt-3">
              <EventGrid events={featuredConcerts} emptyMessage={t.events.comingSoon} t={t} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featureItems.map((item) => (
            <Link key={item.title} href={item.href} className="market-card rounded-2xl p-5">
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-6">
        <NewsletterSignup />
      </section>
    </main>
  );
}
