"use client";

import Link from 'next/link';
import { SearchBar } from './components/SearchBar';
import { EventGrid } from './events/EventGrid';
import { categories, featuredDeals } from '../lib/dealsData';
import {
  getFeaturedEvents,
  getTrendingEvents,
  getUpcomingEvents,
  getFeaturedConcerts,
  getFeaturedSportsEvents
} from '../lib/eventsData';
import { getTranslation } from '../lib/i18n';
import { useLocale } from './components/LocaleProvider';

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export default function HomePage() {
  const locale = useLocale();
  const t = getTranslation(locale);
  const featuredEvents = getFeaturedEvents().slice(0, 3);
  const trendingEvents = getTrendingEvents().slice(0, 3);
  const upcomingEvents = getUpcomingEvents(3);
  const featuredConcerts = getFeaturedConcerts().slice(0, 3);
  const featuredSportsEvents = getFeaturedSportsEvents().slice(0, 3);

  return (
    <main className="flex-1">
      <section className="grid items-center gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <div>
          <p className="market-pill mb-4">
            {t.home.pill}
          </p>
          <h1 className="market-title text-4xl sm:text-5xl lg:text-6xl">
            {t.home.heroTitle}
          </h1>
          <p className="market-subtitle text-xl">{t.home.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/stores" className="market-button">{t.home.explore}</Link>
            <Link href="/coupons" className="market-button-secondary">{t.home.browseDeals}</Link>
            <Link href="/partner" className="market-button-secondary border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black">{t.home.joinPartner}</Link>
          </div>
        </div>
        <div className="market-shell rounded-[2rem] border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-6">
          <div className="rounded-2xl border border-white/10 bg-black/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.home.featured}</p>
            <div className="mt-6 space-y-3">
              {[
                { title: t.home.carTitle, value: t.home.carValue, description: t.home.carDesc },
                { title: t.home.yachtTitle, value: t.home.yachtValue, description: t.home.yachtDesc },
                { title: t.home.sportsTitle, value: t.home.sportsValue, description: t.home.sportsDesc },
                { title: t.home.vacationTitle, value: t.home.vacationValue, description: t.home.vacationDesc }
              ].map((item) => (
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
          {categories.map((category) => (
            <Link key={category.slug} href={`/stores/${category.slug}`} className="market-card rounded-2xl p-5">
              <p className="text-2xl">{category.icon}</p>
              <p className="mt-3 font-semibold text-white">{t.categories[camelizeSlug(category.slug)] || category.label}</p>
              <p className="mt-2 text-sm text-zinc-400">{t.categoryDescriptions[camelizeSlug(category.slug)] || category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-6">
        <div className="market-shell rounded-[2rem] p-8">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-white">{t.events.marketplaceTitle}</h2>
            <Link href="/events" className="text-sm text-brand-gold">{t.buttons.viewDeals}</Link>
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
        <div className="market-shell rounded-[2rem] bg-gradient-to-br from-black to-zinc-900 p-8">
          <h2 className="text-2xl font-semibold text-white">{t.home.expTitle}</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">{t.home.expSubtitle}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: t.home.carTitle, description: t.home.expCarDesc, href: '/rentals' },
              { title: t.home.yachtTitle, description: t.home.expYachtDesc, href: '/yachts' },
              { title: t.home.sportsTitle, description: t.home.expSportsDesc, href: '/sportsbook' },
              { title: t.home.vacationTitle, description: t.home.expVacationDesc, href: '/vacation-rentals' },
              { title: t.home.expMiamiTitle, description: t.home.expMiamiDesc, href: '/experiences' },
              { title: t.home.expRestaurantsTitle, description: t.home.expRestaurantsDesc, href: '/restaurants-nightlife' }
            ].map((item) => (
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
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: t.home.userAccTitle, body: t.home.userAccBody, href: '/login' },
            { title: t.home.partnerTitle, body: t.home.partnerBody, href: '/partner' },
            { title: t.home.adminTitle, body: t.home.adminBody, href: '/admin' },
            { title: t.home.legalTitle, body: t.home.legalBody, href: '/terms' }
          ].map((item) => (
            <Link key={item.title} href={item.href} className="market-card rounded-2xl p-5">
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
