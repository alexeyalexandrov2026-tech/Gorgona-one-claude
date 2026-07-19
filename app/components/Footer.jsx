import Link from 'next/link';

const sections = [
  { label: 'Travel', href: '/travel' },
  { label: 'Shopping', href: '/stores' },
  { label: 'Villas & Stays', href: '/vacation-rentals' },
  { label: 'Yacht Rentals', href: '/yachts' },
  { label: 'Car Rentals', href: '/rentals' },
  { label: 'Sportsbooks', href: '/sportsbook' },
  { label: 'Events & Entertainment', href: '/events' },
  { label: 'Discovery Room', href: '/discovery' }
];

const company = [
  { label: 'Partner Portal', href: '/partner' },
  { label: 'Become a Partner', href: '/partner-agreement' },
  { label: 'Admin', href: '/admin' },
  { label: 'Sign In', href: '/login' }
];

const legal = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Affiliate Disclosure', href: '/affiliate-disclosure' },
  { label: 'Cookie Policy', href: '/cookie-policy' }
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 pb-10 pt-16 text-sm text-zinc-400">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-2xl font-semibold tracking-[0.3em] text-white">GORGONA</span>
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.4em] text-brand-gold">One</span>
          </div>
          <p className="mt-4 max-w-sm leading-relaxed text-zinc-500">
            One luxury ecosystem for travel, shopping, stays, yachts, cars, sportsbooks, events and an AI concierge —
            verified offers and premium experiences in a single destination.
          </p>
        </div>

        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-brand-gold">Ecosystem</p>
          <ul className="mt-4 space-y-2.5">
            {sections.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-brand-gold">Company</p>
          <ul className="mt-4 space-y-2.5">
            {company.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-brand-gold">Legal</p>
          <ul className="mt-4 space-y-2.5">
            {legal.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-white">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-zinc-500">© 2026 GORGONA ONE. Premium deals, verified offers, and affiliate-ready monetization.</p>
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.28em] text-zinc-600">A unified luxury ecosystem</p>
      </div>
    </footer>
  );
}
