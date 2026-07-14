import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '../components/Motion';

export const metadata = {
  title: 'AI Concierge | GORGONA ONE',
  description: 'A premium AI assistant for travel, shopping, and experience recommendations.'
};

const capabilities = [
  { title: 'Travel planning', copy: 'Itineraries, flights, and stays tailored to how you like to travel.', href: '/travel' },
  { title: 'Shopping guidance', copy: 'Personal picks across fashion, technology and lifestyle.', href: '/stores' },
  { title: 'Experience curation', copy: 'Yachts, villas, events and nightlife matched to the moment.', href: '/experiences' },
  { title: 'Deal intelligence', copy: 'Verified promo codes and offers surfaced the instant they matter.', href: '/coupons' }
];

const prompts = [
  { label: 'Plan a weekend in Miami', href: '/experiences' },
  { label: 'Find a yacht for 8 guests', href: '/yachts' },
  { label: 'Best sportsbook offers now', href: '/sportsbook' },
  { label: 'A villa with an ocean view', href: '/vacation-rentals' }
];

const ArrowIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function ConciergePage() {
  return (
    <main className="flex-1 theme-concierge">
      <section className="lux-hero full-bleed -mt-[60px] flex min-h-[80vh] items-center">
        <div className="absolute inset-0 -z-10 bg-[#050505]" />
        <div className="lux-hero__grain" />
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.5), transparent 60%)' }}
        />
        <div className="mx-auto w-full max-w-3xl px-4 py-24 text-center sm:px-6 lg:px-8">
          <p className="lux-eyebrow justify-center">AI Concierge · Future luxury</p>
          <h1 className="lux-display mt-6 text-5xl sm:text-6xl lg:text-7xl">Your personal concierge, always on.</h1>
          <p className="lux-lede mx-auto mt-6 text-lg">
            Ask for anything across the GORGONA ONE ecosystem — travel, shopping, stays, experiences — and receive
            elegant, personal recommendations.
          </p>

          <div className="mx-auto mt-10 flex max-w-xl items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] p-2 pl-5 backdrop-blur">
            <span className="text-brand-gold">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-5 w-5">
                <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m14.5-6.5-1.5 1.5m-9 9-1.5 1.5m12 0-1.5-1.5m-9-9L4.5 5.5" strokeLinecap="round" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Ask the concierge anything…"
              className="w-full bg-transparent py-2 text-sm text-white placeholder:text-zinc-500 focus:outline-none"
            />
            <span className="lux-btn shrink-0 py-2.5">Ask <ArrowIcon className="h-4 w-4" /></span>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {prompts.map((p) => (
              <Link
                key={p.label}
                href={p.href}
                className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-zinc-300 transition hover:border-brand-gold/40 hover:text-white"
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <Reveal>
          <p className="lux-eyebrow">Capabilities</p>
          <h2 className="lux-display mt-5 max-w-2xl text-4xl sm:text-5xl">One assistant, the whole ecosystem.</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
          {capabilities.map((c) => (
            <StaggerItem key={c.title}>
              <Link
                href={c.href}
                className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold/40 hover:bg-brand-gold/[0.06]"
              >
                <p className="font-display text-lg font-semibold tracking-tight text-white">{c.title}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">{c.copy}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm text-brand-gold">
                  Open <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
