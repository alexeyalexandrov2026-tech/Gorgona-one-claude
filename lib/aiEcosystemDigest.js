// Server-only ecosystem digest for the AI concierge.
//
// Compiles a compact, real inventory snapshot (yachts, venues, villas, cars,
// event worlds) into text appended to the concierge system prompt, so the
// model recommends actual GORGONA ONE listings by name instead of inventing
// generic ones. Imported ONLY by app/api/chat/route.js - never by client
// components, so the full data libraries stay out of the browser bundle.

import { getYachts } from './yachtsData';
import { getVenues } from './restaurantsNightlifeData';
import { getRentals } from './rentalsData';
import { getVacationRentals } from './vacationRentalsData';
import { getLeagues, getEventCategories } from './eventsData';

function safe(fn, fallback = []) {
  try {
    const v = fn();
    return Array.isArray(v) ? v : fallback;
  } catch {
    return fallback;
  }
}

function line(items, format, max = 8) {
  return items.slice(0, max).map(format).filter(Boolean).join('; ');
}

// Built once at module load (data is static), reused for every request.
let cached = null;

export function getEcosystemDigest() {
  if (cached) return cached;

  const yachts = line(safe(getYachts), (y) => y?.title && `${y.title} (${y.length || ''} ${y.capacity ? `${y.capacity} guests` : ''}, ${y.location || 'Miami'})`.replace(/\s+/g, ' '));
  const venues = line(safe(getVenues), (v) => v?.name && `${v.name} (${v.category || 'venue'}, ${v.location || ''})`.replace(/\s+/g, ' '), 10);
  const cars = line(safe(getRentals), (r) => r?.title && `${r.title} (${r.location || 'Miami'})`);
  const villas = line(safe(getVacationRentals), (v) => v?.title && `${v.title} (${v.location || ''}${v.bedrooms ? `, ${v.bedrooms} BR` : ''})`.replace(/\s+/g, ' '));
  const leagues = line(safe(getLeagues), (l) => l?.name || l?.label, 10);
  const eventCats = line(safe(getEventCategories), (c) => c?.label, 10);

  cached = `

CURRENT GORGONA ONE INVENTORY (real listings - recommend these by name and point to their section page):
- Yachts (/yachts): ${yachts || 'see /yachts'}
- Dining & Nightlife (/restaurants-nightlife): ${venues || 'see /restaurants-nightlife'}
- Car Rentals (/rentals): ${cars || 'see /rentals'}
- Villas & Stays (/vacation-rentals): ${villas || 'see /vacation-rentals'}
- Events (/events): categories - ${eventCats || 'see /events'}; leagues - ${leagues || ''}

When a guest's request matches inventory above, recommend 1-3 specific listings by name with their section link. For anything time-sensitive (event dates, availability, current prices) use live web search rather than guessing.`;

  return cached;
}
