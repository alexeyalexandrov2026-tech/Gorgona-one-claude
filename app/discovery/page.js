import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '../components/Motion';
import { AiConversation } from '../components/ai/AiConversation';

export const metadata = {
  title: 'The Discovery Room | GORGONA ONE',
  description: 'Your AI concierge for the entire GORGONA ONE ecosystem — travel, dining, stays, yachts, cars, sportsbooks and events.'
};

const capabilities = [
  { title: 'Travel planning', copy: 'Itineraries, flights, and stays tailored to how you like to travel.', href: '/travel' },
  { title: 'Dining & nightlife', copy: 'Tables, chef’s counters and after-dark venues, matched to the moment.', href: '/restaurants-nightlife' },
  { title: 'Shopping guidance', copy: 'Personal picks across fashion, technology and lifestyle.', href: '/stores' },
  { title: 'Experience curation', copy: 'Yachts, villas, events and nightlife matched to the moment.', href: '/experiences' }
];

export default function DiscoveryRoomPage() {
  return (
    <main className="flex-1 theme-concierge">
      <section className="lux-hero full-bleed -mt-[60px] flex min-h-[70vh] items-center">
        <div className="absolute inset-0 -z-10 bg-[#050505]" />
        <div className="lux-hero__grain" />
        <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-24 sm:px-6 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-16 lg:px-8">
          <Reveal className="flex justify-center lg:justify-start">
            <div className="relative shrink-0" style={{ width: 200, height: 200 }}>
              <span className="ai-sphere__glow" aria-hidden="true" />
              <span className="ai-sphere h-full w-full" aria-hidden="true" />
            </div>
          </Reveal>
          <div className="text-center lg:text-left">
            <Reveal>
              <p className="lux-eyebrow justify-center lg:justify-start">The Discovery Room · AI Concierge</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="lux-display mt-6 text-4xl sm:text-5xl lg:text-6xl">
                Ask for anything. We&rsquo;ll take it from here.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lux-lede mx-auto mt-6 text-lg lg:mx-0">
                A personal AI concierge for the entire GORGONA ONE ecosystem — travel, dining, stays, yachts, cars,
                sportsbooks and events. Type or speak, and it will point you to the right corner of the ecosystem.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="h-[540px]">
            <AiConversation variant="room" />
          </div>
        </div>
      </section>

      <section className="pb-20 lg:pb-28">
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
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </section>
    </main>
  );
}
