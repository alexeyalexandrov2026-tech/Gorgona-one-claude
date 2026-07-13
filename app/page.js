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
    accent: '#d4af37',
    glow: 'rgba(212, 175, 55, 0.4)',
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
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.4)',
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
    accent: '#a855f7',
    glow: 'rgba(168, 85, 247, 0.4)',
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
    accent: '#d4af37',
    glow: 'rgba(212, 175, 55, 0.4)',
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
      <section className="py-16 lg:py-20">
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
      </section>

      <section className="py-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">{t.home.featured}</p>
        <div className="mt-6 space-y-5">
          {FEATURED_DEALS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="featured-deal-card group relative flex flex-col overflow-hidden rounded-2xl sm:flex-row sm:items-stretch"
              style={{ '--fd-accent': item.accent, '--fd-glow': item.glow }}
            >
              <div className="flex flex-1 items-center gap-5 px-6 py-7 sm:px-8">
                <span
                  className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2"
                  style={{ borderColor: item.accent, color: item.accent }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
                    {item.icon}
                  </svg>
                </span>
                <div className="min-w-0">
                  <p className="text-xl font-bold text-white sm:text-2xl">{item.title}</p>
                  <p className="mt-1 text-base font-medium sm:text-lg" style={{ color: item.accent }}>{item.value}</p>
                  <p className="mt-2 max-w-md text-sm text-zinc-400">{item.description}</p>
                </div>
              </div>
              <div className="relative h-40 w-full shrink-0 sm:h-auto sm:w-[42%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.05]"
                />
              </div>
              <span
                className="absolute right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border bg-black/60 backdrop-blur sm:flex"
                style={{ borderColor: item.accent, color: item.accent }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M9 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          ))}
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
