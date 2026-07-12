"use client";

import Link from 'next/link';
import { SearchBar } from './components/SearchBar';
import { categories, featuredDeals } from '../lib/dealsData';
import { getTranslation } from '../lib/i18n';
import { useLocale } from './components/LocaleProvider';

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

// Featured Deals row data - reuses the same lead image already used for
// each category's own featured listing (lib/rentalsData.js, lib/yachtsData.js,
// lib/vacationRentalsData.js) so no new imagery is introduced. Sportsbook
// Bonuses uses a dedicated Hard Rock Bet promo image
// (public/images/featured/sportsbook-bonuses-hard-rock-bet.png) that is
// only referenced here - it does not touch public/images/brands, which
// still serves the sportsbook directory, profile cards, deals grid, and
// Search Results.
const FEATURED_DEALS = [
  {
    title: 'Car Rentals',
    value: 'Premium Miami vehicles',
    description: 'High-end cars with concierge pickup and airport delivery.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    href: '/rentals',
    icon: (
      <>
        <path d="M18.92 6.01A1.5 1.5 0 0 0 17.5 5h-11c-.66 0-1.24.42-1.45 1.01L3 12v6.5A1.5 1.5 0 0 0 4.5 20H5a1 1 0 0 0 1-1v-.5h12v.5a1 1 0 0 0 1 1h.5a1.5 1.5 0 0 0 1.5-1.5V12l-2.08-5.99ZM5 11l1.5-4.5h11L19 11H5Z" />
        <circle cx="6.7" cy="15" r="1.4" fill="#000" />
        <circle cx="17.3" cy="15" r="1.4" fill="#000" />
      </>
    )
  },
  {
    title: 'Yacht Rentals',
    value: 'Sunset cruising',
    description: 'Private yacht experiences for nightlife, events, and luxury outings.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1200&q=80',
    href: '/yachts',
    icon: (
      <>
        <path d="M3.5 15.5h17L18.5 20h-13l-2-4.5Z" />
        <path d="M10.5 4h1v6.5h4l-3.2-5.3.9-.5 4 6.6a.7.7 0 0 1-.6 1.1H8a.7.7 0 0 1-.6-1l2.2-4.4-.7-.3.9-1.8.7.3V4Z" />
      </>
    )
  },
  {
    title: 'Sportsbook Bonuses',
    value: 'Top-tier offers',
    description: 'Verified sportsbook promos and referral-only bonuses.',
    image: '/images/featured/sportsbook-bonuses-hard-rock-bet.png',
    href: '/sportsbook',
    icon: (
      <path d="M8 3h8v3.5a4 4 0 0 1-8 0V3Zm-2 .5H3v1.8A4.2 4.2 0 0 0 6.8 9.5M18 3.5h3v1.8A4.2 4.2 0 0 1 17.2 9.5M11 14.5h2v3.5h-2zM8 20.5h8l-1.2-2.5H9.2L8 20.5Z" />
    )
  },
  {
    title: 'Vacation Rentals',
    value: 'Luxury stays',
    description: 'Short-term stays, villas, and premium residences in key markets.',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
    href: '/vacation-rentals',
    icon: (
      <>
        <path d="M5 20V9.5L11 6v14H5Z" />
        <rect x="6.4" y="11" width="1.6" height="1.6" fill="#000" />
        <rect x="6.4" y="14" width="1.6" height="1.6" fill="#000" />
        <path d="M12 20V9l3.5 4.5V20H12Z" />
        <path d="M11.5 6c1.5-.8 2-2.4 1.7-3.8 1.4.4 2.6 1.7 2.3 3.3-.2 1.2-1.3 1.9-2.3 2.1L11.5 6Z" />
      </>
    )
  }
];

export default function HomePage() {
  const locale = useLocale();
  const t = getTranslation(locale);

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
                <Link
                  key={item.title}
                  href={item.href}
                  className="market-card group flex flex-col overflow-hidden rounded-2xl sm:flex-row sm:items-stretch"
                >
                  <div className="flex flex-1 items-center gap-4 p-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                        {item.icon}
                      </svg>
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-white">{item.title}</p>
                      <p className="text-sm text-brand-gold">{item.value}</p>
                      <p className="mt-1 text-sm text-zinc-400">{item.description}</p>
                    </div>
                  </div>
                  <div className="p-2 pt-0 sm:w-2/5 sm:shrink-0 sm:p-2 sm:pl-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-full rounded-xl object-cover transition duration-300 group-hover:scale-[1.03] sm:h-full sm:min-h-[150px]"
                    />
                  </div>
                </Link>
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
