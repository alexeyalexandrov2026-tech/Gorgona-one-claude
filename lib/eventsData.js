// Tickets & Events Marketplace data. Static for now (mirrors the pattern
// used by lib/rentalsData.js) - see database/schema.sql for the table shapes
// this is designed to migrate to once a real Admin Dashboard/Supabase-backed
// CRUD exists (see lib/data/stores.js for the migration pattern to follow).

export const EVENT_CATEGORY_GROUPS = [
  { slug: 'sports', label: 'Sports Tickets', icon: '🏈' },
  { slug: 'concerts', label: 'Concert Tickets', icon: '🎤' }
];

export const EVENT_CATEGORIES = [
  { slug: 'sports', label: 'Sports Tickets', icon: '🏈', group: 'sports', image: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1400&q=80' },
  { slug: 'concerts', label: 'Concert Tickets', icon: '🎤', group: 'concerts', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?auto=format&fit=crop&w=1400&q=80' }
];

export const LEAGUES = [
  { slug: 'nfl', name: 'NFL', sport: 'American Football', category: 'sports', website: 'https://www.nfl.com' },
  { slug: 'nba', name: 'NBA', sport: 'Basketball', category: 'basketball', website: 'https://www.nba.com' },
  { slug: 'mlb', name: 'MLB', sport: 'Baseball', category: 'baseball', website: 'https://www.mlb.com' },
  { slug: 'nhl', name: 'NHL', sport: 'Hockey', category: 'hockey', website: 'https://www.nhl.com' },
  { slug: 'mls', name: 'MLS', sport: 'Soccer', category: 'soccer', website: 'https://www.mlssoccer.com' },
  { slug: 'atp', name: 'ATP', sport: 'Tennis (Men)', category: 'tennis', website: 'https://www.atptour.com' },
  { slug: 'wta', name: 'WTA', sport: 'Tennis (Women)', category: 'tennis', website: 'https://www.wtatennis.com' },
  { slug: 'ufc', name: 'UFC', sport: 'Mixed Martial Arts', category: 'ufc-boxing', website: 'https://www.ufc.com' },
  { slug: 'formula-1', name: 'Formula 1', sport: 'Motorsport', category: 'formula1', website: 'https://www.formula1.com' }
];

export const TEAMS = [
  // NFL
  { slug: 'kansas-city-chiefs', name: 'Kansas City Chiefs', league: 'nfl', city: 'Kansas City', website: 'https://www.chiefs.com' },
  { slug: 'dallas-cowboys', name: 'Dallas Cowboys', league: 'nfl', city: 'Dallas', website: 'https://www.dallascowboys.com' },
  { slug: 'san-francisco-49ers', name: 'San Francisco 49ers', league: 'nfl', city: 'Santa Clara', website: 'https://www.49ers.com' },
  { slug: 'miami-dolphins', name: 'Miami Dolphins', league: 'nfl', city: 'Miami Gardens', website: 'https://www.miamidolphins.com' },
  // NBA
  { slug: 'los-angeles-lakers', name: 'Los Angeles Lakers', league: 'nba', city: 'Los Angeles', website: 'https://www.nba.com/lakers' },
  { slug: 'boston-celtics', name: 'Boston Celtics', league: 'nba', city: 'Boston', website: 'https://www.nba.com/celtics' },
  { slug: 'miami-heat', name: 'Miami Heat', league: 'nba', city: 'Miami', website: 'https://www.nba.com/heat' },
  { slug: 'golden-state-warriors', name: 'Golden State Warriors', league: 'nba', city: 'San Francisco', website: 'https://www.nba.com/warriors' },
  // MLB
  { slug: 'new-york-yankees', name: 'New York Yankees', league: 'mlb', city: 'New York', website: 'https://www.mlb.com/yankees' },
  { slug: 'los-angeles-dodgers', name: 'Los Angeles Dodgers', league: 'mlb', city: 'Los Angeles', website: 'https://www.mlb.com/dodgers' },
  { slug: 'miami-marlins', name: 'Miami Marlins', league: 'mlb', city: 'Miami', website: 'https://www.mlb.com/marlins' },
  // NHL
  { slug: 'florida-panthers', name: 'Florida Panthers', league: 'nhl', city: 'Sunrise', website: 'https://www.nhl.com/panthers' },
  { slug: 'toronto-maple-leafs', name: 'Toronto Maple Leafs', league: 'nhl', city: 'Toronto', website: 'https://www.nhl.com/mapleleafs' },
  { slug: 'vegas-golden-knights', name: 'Vegas Golden Knights', league: 'nhl', city: 'Las Vegas', website: 'https://www.nhl.com/goldenknights' },
  // MLS
  { slug: 'inter-miami-cf', name: 'Inter Miami CF', league: 'mls', city: 'Fort Lauderdale', website: 'https://www.intermiamicf.com' },
  { slug: 'la-galaxy', name: 'LA Galaxy', league: 'mls', city: 'Carson', website: 'https://www.lagalaxy.com' },
  { slug: 'seattle-sounders-fc', name: 'Seattle Sounders FC', league: 'mls', city: 'Seattle', website: 'https://www.soundersfc.com' }
];

export const PROVIDERS = [
  { slug: 'ticketmaster', name: 'Ticketmaster', website: 'https://www.ticketmaster.com' },
  { slug: 'stubhub', name: 'StubHub', website: 'https://www.stubhub.com' },
  { slug: 'seatgeek', name: 'SeatGeek', website: 'https://seatgeek.com' },
  { slug: 'vivid-seats', name: 'Vivid Seats', website: 'https://www.vividseats.com' },
  { slug: 'tickpick', name: 'TickPick', website: 'https://www.tickpick.com' },
  { slug: 'gametime', name: 'Gametime', website: 'https://gametime.co' },
  { slug: 'eventbrite', name: 'Eventbrite', website: 'https://www.eventbrite.com' },
  { slug: 'axs', name: 'AXS', website: 'https://www.axs.com' }
];

const events = [];

export function getEventCategories() {
  return EVENT_CATEGORIES;
}

export function getEventCategoryBySlug(slug) {
  return EVENT_CATEGORIES.find((category) => category.slug === slug);
}

export function getLeagues() {
  return LEAGUES;
}

export function getLeagueBySlug(slug) {
  return LEAGUES.find((league) => league.slug === slug);
}

export function getTeamsByLeague(leagueSlug) {
  return TEAMS.filter((team) => team.league === leagueSlug);
}

export function getTeamBySlug(slug) {
  return TEAMS.find((team) => team.slug === slug);
}

export function getProviders() {
  return PROVIDERS;
}

export function getProviderBySlug(slug) {
  return PROVIDERS.find((provider) => provider.slug === slug);
}

export function getAllEvents() {
  return events;
}

export function getEventBySlug(slug) {
  return events.find((event) => event.slug === slug);
}

export function getEventsByCategory(categorySlug) {
  return events.filter((event) => event.category === categorySlug);
}

export function getEventsByLeague(leagueSlug) {
  return events.filter((event) => event.league === leagueSlug);
}

export function getFeaturedEvents() {
  return events.filter((event) => event.featured);
}

export function getTrendingEvents() {
  return events.filter((event) => event.trending);
}

export function getUpcomingEvents(limit = 8) {
  return [...events].sort((a, b) => new Date(a.date) - new Date(b.date)).slice(0, limit);
}

export function getFeaturedConcerts() {
  const concertCategorySlugs = new Set(EVENT_CATEGORIES.filter((c) => c.group === 'concerts').map((c) => c.slug));
  return events.filter((event) => event.featured && concertCategorySlugs.has(event.category));
}

export function getFeaturedSportsEvents() {
  const sportsCategorySlugs = new Set(EVENT_CATEGORIES.filter((c) => c.group === 'sports').map((c) => c.slug));
  return events.filter((event) => event.featured && sportsCategorySlugs.has(event.category));
}

export function searchEvents(query) {
  const normalized = query.trim().toLowerCase();
  if (!normalized) return events;
  return events.filter((event) => {
    const haystack = [
      event.name,
      event.artist,
      event.venue,
      event.city,
      event.state,
      event.country,
      LEAGUES.find((l) => l.slug === event.league)?.name,
      EVENT_CATEGORIES.find((c) => c.slug === event.category)?.label,
      ...(event.teams || []).map((slug) => TEAMS.find((t) => t.slug === slug)?.name)
    ].filter(Boolean).join(' ').toLowerCase();
    return haystack.includes(normalized);
  });
}

export function paginate(list, page = 1, pageSize = 12) {
  const totalPages = Math.max(1, Math.ceil(list.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * pageSize;
  return {
    items: list.slice(start, start + pageSize),
    currentPage,
    totalPages,
    totalItems: list.length
  };
}
