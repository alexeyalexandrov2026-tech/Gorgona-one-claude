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

// Featured Deals row data - reuses the same lead image already used for
// each category's own featured listing (lib/rentalsData.js, lib/yachtsData.js,
// lib/vacationRentalsData.js) so no new imagery is introduced. Sportsbook
// Bonuses has no photo catalog of its own, so it reuses the nightlife image
// already used for E11EVEN in lib/restaurantsNightlifeData.js rather than a
// brand-specific promotional screenshot.
const FEATURED_DEALS = [
  {
    title: 'Car Rentals',
    value: 'Premium Miami vehicles',
    description: 'High-end cars with concierge pickup and airport delivery.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80',
    icon: (
      <path d="M5 17h14M6 17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm16 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM3 17v-4l2-5a2 2 0 0 1 2-1.3h10A2 2 0 0 1 19 8l2 5v4" />
    )
  },
  {
    title: 'Yacht Rentals',
    value: 'Sunset cruising',
    description: 'Private yacht experiences for nightlife, events, and luxury outings.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=900&q=80',
    icon: (
      <path d="M3 18h18l-2 3H5l-2-3Zm3-2 1-9 5 2 5-2 1 9M11 4v3M9 5h4" />
    )
  },
  {
    title: 'Sportsbook Bonuses',
    value: 'Top-tier offers',
    description: 'Verified sportsbook promos and referral-only bonuses.',
    image: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&w=900&q=80',
    icon: (
      <path d="M8 4h8v4a4 4 0 0 1-8 0V4Zm0 0H4v1a3 3 0 0 0 3 3m9-4h4v1a3 3 0 0 1-3 3m-6 5v3m0 0h-2m2 0h2m-2 3v-3" />
    )
  },
  {
    title: 'Vacation Rentals',
    value: 'Luxury stays',
    description: 'Short-term stays, villas, and premium residences in key markets.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80',
    icon: (
      <path d="M4 20V9l5-3v14M4 20h16M9 20V9l5 3v8m0-8 6-3v11M9 12h1M9 15h1" />
    )
  }
];

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
            Global deals • Promo codes • Lifestyle offers
          </p>
          <h1 className="market-title text-4xl sm:text-5xl lg:text-6xl">
            {t.home.heroTitle}
          </h1>
          <p className="market-subtitle text-xl">{t.home.heroSubtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/stores" className="market-button">Explore Marketplace</Link>
            <Link href="/coupons" className="market-button-secondary">Browse Deals</Link>
            <Link href="/partner" className="market-button-secondary border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black">Join as Partner</Link>
          </div>
        </div>
        <div className="market-shell rounded-[2rem] border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-6">
          <div className="rounded-2xl border border-white/10 bg-black/70 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.home.featured}</p>
            <div className="mt-6 space-y-4">
              {FEATURED_DEALS.map((item) => (
                <div key={item.title} className="market-card flex flex-col gap-4 rounded-2xl p-4 sm:flex-row sm:items-center">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      {item.icon}
                    </svg>
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="text-sm text-brand-gold">{item.value}</p>
                    <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                  </div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-32 w-full shrink-0 rounded-2xl object-cover sm:h-20 sm:w-36 lg:h-24 lg:w-44"
                  />
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
          <h2 className="text-2xl font-semibold text-white">Popular categories</h2>
          <Link href="/stores" className="text-sm text-brand-gold">Browse all</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/stores/${category.slug}`} className="market-card rounded-2xl p-5">
              <p className="text-2xl">{category.icon}</p>
              <p className="mt-3 font-semibold text-white">{t.categories[camelizeSlug(category.slug)] || category.label}</p>
              <p className="mt-2 text-sm text-zinc-400">{category.description}</p>
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
          <h2 className="text-2xl font-semibold text-white">Featured experiences and premium leads</h2>
          <p className="mt-3 max-w-2xl text-zinc-400">The homepage now surfaces transport, travel, nightlife, and luxury experiences before generic shopping offers.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: 'Car Rentals', description: 'Luxury cars and premium experiences', href: '/rentals' },
              { title: 'Yacht Rentals', description: 'Private charters and nightlife-ready boats', href: '/yachts' },
              { title: 'Sportsbook Bonuses', description: 'Verified affiliate-ready offers', href: '/sportsbook' },
              { title: 'Vacation Rentals', description: 'High-end stays and short-term luxury homes', href: '/vacation-rentals' },
              { title: 'Miami Experiences', description: 'Private dining, nightlife, and premium events', href: '/experiences' },
              { title: 'Restaurants & Nightlife', description: 'Dining, lounges, and late-night experiences', href: '/restaurants-nightlife' }
            ].map((item) => (
              <div key={item.title} className="market-card rounded-2xl p-4">
                <p className="font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                <Link href={item.href} className="mt-4 inline-flex text-sm text-brand-gold">View section</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'User accounts', body: 'Register, save favorites, track promo codes, and manage profile activity.', href: '/login' },
            { title: 'Partner portal', body: 'Apply as a merchant, publish offers, manage multiple locations, and track performance.', href: '/partner' },
            { title: 'Admin control', body: 'Approve partners, manage offers, monitor analytics, and keep content compliant.', href: '/admin' },
            { title: 'Legal framework', body: 'Terms, privacy, affiliate disclosure, and cookie policy pages ready for rollout.', href: '/terms' }
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
