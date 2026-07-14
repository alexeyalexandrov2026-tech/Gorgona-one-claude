import Link from 'next/link';
import { Reveal, Stagger, StaggerItem, Parallax } from '../components/Motion';

export const metadata = {
  title: 'Travel | GORGONA ONE',
  description: 'Curated luxury travel — exclusive destinations, hotels, flights, and travel guides.'
};

const experiences = [
  {
    title: 'Exclusive Destinations',
    copy: 'Hand-picked escapes across coastlines, capitals and hidden retreats.',
    href: '/experiences',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80',
    tag: 'Destinations'
  },
  {
    title: 'Flights & Airfare',
    copy: 'Business-class fares, last-minute deals and flexible routing with Ovago.',
    href: '/travel/ovago',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=80',
    tag: 'Flights'
  },
  {
    title: 'Hotels & Stays',
    copy: 'From city landmarks to private villas — verified travel offers.',
    href: '/stores/travel',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=80',
    tag: 'Hotels'
  },
  {
    title: 'Dining & Nightlife',
    copy: 'Reserve tables and after-dark experiences in the world\u2019s great cities.',
    href: '/restaurants-nightlife',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1400&q=80',
    tag: 'Dining'
  }
];

const ArrowIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export default function TravelLandingPage() {
  return (
    <main className="flex-1 theme-travel">
      {/* Hero — midnight terminal with a single violet beacon */}
      <section className="lux-hero full-bleed -mt-[60px] flex min-h-[86vh] items-end bg-travel-void">
        <div className="lux-hero__bg">
          <Parallax distance={70} className="h-full">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=2400&q=80"
              alt=""
              className="h-[115%] w-full object-cover opacity-70"
            />
          </Parallax>
        </div>
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-travel-void/80 via-travel-void/50 to-[#050505]" />
        <div className="lux-hero__grain" />
        <div
          className="pointer-events-none absolute -left-40 top-24 -z-10 h-[520px] w-[520px] rounded-full opacity-40 blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(175,80,255,0.55), transparent 60%)' }}
        />

        <div className="mx-auto w-full max-w-7xl px-4 pb-24 pt-40 sm:px-6 lg:px-8">
          <p className="lux-eyebrow">Travel · Exclusive destinations</p>
          <h1 className="mt-6 font-serif text-6xl italic leading-[0.95] text-white sm:text-7xl lg:text-8xl">
            Go somewhere<br />
            <span className="text-travel-lavender">extraordinary.</span>
          </h1>
          <p className="lux-lede mt-8 text-lg">
            A cinematic travel concierge — luxury destinations, curated flights, and stays, wrapped in a single
            premium experience.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/experiences" className="lux-btn">Explore experiences <ArrowIcon className="h-4 w-4" /></Link>
            <Link href="/travel/ovago" className="lux-btn-ghost">Find flights</Link>
          </div>
        </div>
      </section>

      {/* Experience grid */}
      <section className="py-20 lg:py-28">
        <Reveal>
          <p className="lux-eyebrow">The Journey</p>
          <h2 className="lux-display mt-5 max-w-2xl text-4xl sm:text-5xl">Every part of the trip, elevated.</h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-4 md:grid-cols-2" gap={0.08}>
          {experiences.map((item) => (
            <StaggerItem key={item.title}>
              <Link href={item.href} className="lux-tile group flex h-[360px] flex-col justify-end p-7">
                <div className="lux-tile__media">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <div className="lux-tile__scrim" />
                <div className="lux-tile__glow" />
                <div className="relative">
                  <p className="lux-caption-upper">{item.tag}</p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <h3 className="font-serif text-3xl italic text-white">{item.title}</h3>
                    <ArrowIcon className="h-5 w-5 shrink-0 text-white/70 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-zinc-300/90">{item.copy}</p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Closing band */}
      <section className="pb-8">
        <Reveal>
          <div className="lux-hero relative overflow-hidden rounded-3xl border border-travel-violet/25 bg-travel-void px-8 py-16 text-center sm:px-16">
            <div className="lux-hero__grain" />
            <p className="lux-eyebrow justify-center">Ovago flight deals</p>
            <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl italic text-white">Your next flight, at a better fare.</h2>
            <p className="lux-lede mx-auto mt-5 text-base">Business class, cheap fares and last-minute routes — curated and affiliate-verified.</p>
            <div className="mt-8 flex justify-center">
              <Link href="/travel/ovago" className="lux-btn">View Ovago deals <ArrowIcon className="h-4 w-4" /></Link>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
