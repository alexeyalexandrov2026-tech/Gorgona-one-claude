import Link from 'next/link';
import { Logo } from '../components/Logo';
import { getLeagueBySlug, getEventCategoryBySlug } from '../../lib/eventsData';

const ArrowIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export function EventGrid({ events, emptyMessage, t }) {
  if (events.length === 0) {
    return (
      <div className="lux-hero relative overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0a] px-8 py-16 text-center sm:px-16">
        <div className="lux-hero__grain" />
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-4xl italic text-white">{emptyMessage}</h2>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {events.map((event) => {
        const league = event.league ? getLeagueBySlug(event.league) : null;
        const category = getEventCategoryBySlug(event.category);
        const logoSlug = league ? league.slug : event.teams?.[0];

        return (
          <article key={event.id} className="lux-tile group flex h-[360px] flex-col justify-end p-7" style={{ height: "360px" }}>
            <div className="lux-tile__scrim" />
            <div className="lux-tile__glow" />

            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-center justify-between gap-3">
                <Logo slug={logoSlug} alt={league?.name || event.artist || event.name} className="h-12 w-12 rounded-2xl object-contain bg-white/5 p-1" />
                <span className="uppercase tracking-[0.24em] text-[0.7rem] text-brand-gold">
                  {t.events.categoryLabels[category?.slug] || category?.label}
                </span>
              </div>

              <div className="mt-auto">
                <div className="mt-2 flex items-center justify-between gap-3">
                  <h2 className="font-serif text-3xl italic text-white">{event.name}</h2>
                </div>
                <p className="mt-3 text-sm text-zinc-300/90">{event.venue} — {event.city}, {event.state || event.country}</p>
                <p className="mt-1 text-sm text-zinc-400">{event.date} · {event.time}</p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href={`/events/${event.slug}`} className="lux-btn">{t.common.viewDetails} <ArrowIcon className="h-4 w-4 ml-1" /></Link>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
