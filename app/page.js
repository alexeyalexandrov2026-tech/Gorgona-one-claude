import Link from 'next/link';
import { SearchBar } from './components/SearchBar';
import { NewsletterSignup } from './components/NewsletterSignup';
import { categories, featuredDeals } from '../lib/dealsData';
import { getTranslation } from '../lib/i18n';

export default function HomePage() {
  const locale = 'en';
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
            <div className="mt-6 space-y-3">
              {[
                { title: 'Car Rentals', value: 'Premium Miami vehicles', description: 'High-end cars with concierge pickup and airport delivery.' },
                { title: 'Yacht Rentals', value: 'Sunset cruising', description: 'Private yacht experiences for nightlife, events, and luxury outings.' },
                { title: 'Sportsbook Bonuses', value: 'Top-tier offers', description: 'Verified sportsbook promos and referral-only bonuses.' },
                { title: 'Vacation Rentals', value: 'Luxury stays', description: 'Short-term stays, villas, and premium residences in key markets.' }
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
          <h2 className="text-2xl font-semibold text-white">Popular categories</h2>
          <Link href="/stores" className="text-sm text-brand-gold">Browse all</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/stores/${category.slug}`} className="market-card rounded-2xl p-5">
              <p className="text-2xl">{category.icon}</p>
              <p className="mt-3 font-semibold text-white">{category.label}</p>
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
              { title: 'Yacht Rentals', description: 'Private charters and nightlife-ready boats', href: '/rentals' },
              { title: 'Sportsbook Bonuses', description: 'Verified affiliate-ready offers', href: '/sportsbook' },
              { title: 'Vacation Rentals', description: 'High-end stays and short-term luxury homes', href: '/rentals' },
              { title: 'Miami Experiences', description: 'Private dining, nightlife, and premium events', href: '/rentals' },
              { title: 'Restaurants & Nightlife', description: 'Dining, lounges, and late-night experiences', href: '/coupons' }
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

      <section className="py-6">
        <NewsletterSignup />
      </section>
    </main>
  );
}
