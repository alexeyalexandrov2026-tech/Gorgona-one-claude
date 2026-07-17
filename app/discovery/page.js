import Link from 'next/link';
import { Reveal, Stagger, StaggerItem } from '../components/Motion';
import { AiConversation } from '../components/ai/AiConversation';
import { getServerTranslation } from '../../lib/serverLocale';

// Locale is read from a cookie (see lib/serverLocale.js), so this page must
// render per-request rather than being statically generated once at build
// time with whichever locale happened to be set then.
export const dynamic = 'force-dynamic';

export function generateMetadata() {
  const { t } = getServerTranslation();
  return {
    title: `${t.ai.discoveryEyebrow.split(' · ')[0]} | GORGONA ONE`,
    description: t.ai.discoveryHeroSubtitle
  };
}

export default function DiscoveryRoomPage() {
  const { t } = getServerTranslation();
  const capabilities = [
    { title: t.ai.capTravelTitle, copy: t.ai.capTravelCopy, href: '/travel' },
    { title: t.ai.capDiningTitle, copy: t.ai.capDiningCopy, href: '/restaurants-nightlife' },
    { title: t.ai.capShoppingTitle, copy: t.ai.capShoppingCopy, href: '/stores' },
    { title: t.ai.capExperienceTitle, copy: t.ai.capExperienceCopy, href: '/experiences' }
  ];

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
              <p className="lux-eyebrow justify-center lg:justify-start">{t.ai.discoveryEyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="lux-display mt-6 text-4xl sm:text-5xl lg:text-6xl">{t.ai.discoveryHeroTitle}</h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="lux-lede mx-auto mt-6 text-lg lg:mx-0">{t.ai.discoveryHeroSubtitle}</p>
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
          <p className="lux-eyebrow">{t.ai.capabilitiesEyebrow}</p>
          <h2 className="lux-display mt-5 max-w-2xl text-4xl sm:text-5xl">{t.ai.capabilitiesTitle}</h2>
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
