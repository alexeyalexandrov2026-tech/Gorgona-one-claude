// Tickets & Events Marketplace data. Static for now (mirrors the pattern
// used by lib/rentalsData.js) - see database/schema.sql for the table shapes
// this is designed to migrate to once a real Admin Dashboard/Supabase-backed
// CRUD exists (see lib/data/stores.js for the migration pattern to follow).

export const EVENT_CATEGORY_GROUPS = [
  { slug: 'sports', label: 'Sports Tickets', icon: '🏈' },
  { slug: 'concerts', label: 'Concert Tickets', icon: '🎤' }
];

export const EVENT_CATEGORIES = [
  { slug: 'basketball', label: 'Basketball', icon: '🏀', group: 'sports' },
  { slug: 'baseball', label: 'Baseball', icon: '⚾', group: 'sports' },
  { slug: 'hockey', label: 'Hockey', icon: '🏒', group: 'sports' },
  { slug: 'soccer', label: 'Soccer', icon: '⚽', group: 'sports' },
  { slug: 'tennis', label: 'Tennis', icon: '🎾', group: 'sports' },
  { slug: 'formula1', label: 'Formula 1', icon: '🏎', group: 'sports' },
  { slug: 'golf', label: 'Golf', icon: '⛳', group: 'sports' },
  { slug: 'ufc-boxing', label: 'UFC / Boxing', icon: '🥊', group: 'sports' },
  { slug: 'theater-broadway', label: 'Theater & Broadway', icon: '🎭', group: 'concerts' },
  { slug: 'shows-entertainment', label: 'Shows & Entertainment', icon: '🎬', group: 'concerts' },
  { slug: 'festivals', label: 'Festivals', icon: '🎡', group: 'concerts' },
  { slug: 'music-events', label: 'Music Events', icon: '🎶', group: 'concerts' },
  { slug: 'comedy-shows', label: 'Comedy Shows', icon: '😂', group: 'concerts' },
  { slug: 'family-events', label: 'Family Events', icon: '🎪', group: 'concerts' },
  { slug: 'exhibitions-museums', label: 'Exhibitions & Museums', icon: '🎨', group: 'concerts' },
  { slug: 'gaming-esports', label: 'Gaming & Esports', icon: '🎮', group: 'concerts' },
  { slug: 'special-events', label: 'Special Events', icon: '🎟', group: 'concerts' }
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

const events = [
  // Basketball
  {
    id: 'nba-lakers-celtics', slug: 'lakers-vs-celtics-crypto-arena', name: 'Los Angeles Lakers vs Boston Celtics',
    category: 'basketball', league: 'nba', teams: ['los-angeles-lakers', 'boston-celtics'],
    venue: 'Crypto.com Arena', city: 'Los Angeles', state: 'CA', country: 'USA',
    date: '2026-11-14', time: '19:30',
    description: 'A marquee regular-season matchup between two of the NBA\'s most storied franchises.',
    priceRange: '$95 - $850', providers: ['ticketmaster', 'stubhub', 'seatgeek', 'gametime'], featured: true, trending: true
  },
  {
    id: 'nba-heat-warriors', slug: 'heat-vs-warriors-kaseya-center', name: 'Miami Heat vs Golden State Warriors',
    category: 'basketball', league: 'nba', teams: ['miami-heat', 'golden-state-warriors'],
    venue: 'Kaseya Center', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-12-02', time: '19:00',
    description: 'Interconference showdown at Miami\'s waterfront arena.',
    priceRange: '$60 - $520', providers: ['ticketmaster', 'vivid-seats', 'tickpick'], featured: false, trending: true
  },
  // Baseball
  {
    id: 'mlb-yankees-dodgers', slug: 'yankees-vs-dodgers-yankee-stadium', name: 'New York Yankees vs Los Angeles Dodgers',
    category: 'baseball', league: 'mlb', teams: ['new-york-yankees', 'los-angeles-dodgers'],
    venue: 'Yankee Stadium', city: 'New York', state: 'NY', country: 'USA',
    date: '2026-08-21', time: '19:05',
    description: 'A rematch of recent World Series contenders in the Bronx.',
    priceRange: '$45 - $610', providers: ['ticketmaster', 'stubhub', 'seatgeek'], featured: true, trending: false
  },
  {
    id: 'mlb-marlins-braves', slug: 'marlins-vs-braves-loan-depot-park', name: 'Miami Marlins vs Atlanta Braves',
    category: 'baseball', league: 'mlb', teams: ['miami-marlins'],
    venue: 'loanDepot Park', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-09-05', time: '18:40',
    description: 'Divisional matchup with retractable-roof comfort in downtown Miami.',
    priceRange: '$25 - $210', providers: ['gametime', 'tickpick', 'vivid-seats'], featured: false, trending: false
  },
  // Hockey
  {
    id: 'nhl-panthers-leafs', slug: 'panthers-vs-maple-leafs-amerant', name: 'Florida Panthers vs Toronto Maple Leafs',
    category: 'hockey', league: 'nhl', teams: ['florida-panthers', 'toronto-maple-leafs'],
    venue: 'Amerant Bank Arena', city: 'Sunrise', state: 'FL', country: 'USA',
    date: '2026-10-18', time: '19:00',
    description: 'Defending-era Cup contenders face off in South Florida.',
    priceRange: '$55 - $430', providers: ['ticketmaster', 'seatgeek', 'axs'], featured: true, trending: false
  },
  // Soccer
  {
    id: 'mls-intermiami-galaxy', slug: 'inter-miami-vs-la-galaxy-chase-stadium', name: 'Inter Miami CF vs LA Galaxy',
    category: 'soccer', league: 'mls', teams: ['inter-miami-cf', 'la-galaxy'],
    venue: 'Chase Stadium', city: 'Fort Lauderdale', state: 'FL', country: 'USA',
    date: '2026-08-30', time: '19:30',
    description: 'MLS regular-season fixture at Inter Miami\'s home stadium.',
    priceRange: '$40 - $980', providers: ['ticketmaster', 'stubhub', 'vivid-seats', 'axs'], featured: true, trending: true
  },
  {
    id: 'mls-sounders-galaxy', slug: 'sounders-vs-galaxy-lumen-field', name: 'Seattle Sounders FC vs LA Galaxy',
    category: 'soccer', league: 'mls', teams: ['seattle-sounders-fc', 'la-galaxy'],
    venue: 'Lumen Field', city: 'Seattle', state: 'WA', country: 'USA',
    date: '2026-09-13', time: '20:00',
    description: 'Western Conference clash in front of one of MLS\'s loudest crowds.',
    priceRange: '$30 - $260', providers: ['seatgeek', 'gametime', 'tickpick'], featured: false, trending: false
  },
  // Tennis
  {
    id: 'atp-miami-open', slug: 'miami-open-atp-quarterfinals', name: 'Miami Open — ATP Quarterfinals',
    category: 'tennis', league: 'atp', teams: [],
    venue: 'Hard Rock Stadium Grounds', city: 'Miami Gardens', state: 'FL', country: 'USA',
    date: '2027-03-25', time: '13:00',
    description: 'Quarterfinal-round session at one of the sport\'s premier hard-court events.',
    priceRange: '$70 - $640', providers: ['ticketmaster', 'seatgeek', 'axs'], featured: true, trending: false
  },
  {
    id: 'wta-miami-open', slug: 'miami-open-wta-semifinals', name: 'Miami Open — WTA Semifinals',
    category: 'tennis', league: 'wta', teams: [],
    venue: 'Hard Rock Stadium Grounds', city: 'Miami Gardens', state: 'FL', country: 'USA',
    date: '2027-03-26', time: '13:00',
    description: 'Semifinal-round session featuring the tour\'s top-ranked players.',
    priceRange: '$85 - $720', providers: ['ticketmaster', 'stubhub', 'gametime'], featured: false, trending: true
  },
  // Formula 1
  {
    id: 'f1-miami-gp', slug: 'formula-1-miami-grand-prix', name: 'Formula 1 Miami Grand Prix',
    category: 'formula1', league: 'formula-1', teams: [],
    venue: 'Miami International Autodrome', city: 'Miami Gardens', state: 'FL', country: 'USA',
    date: '2027-05-02', time: '15:00',
    description: 'Race weekend at the Hard Rock Stadium campus circuit.',
    priceRange: '$299 - $4,200', providers: ['ticketmaster', 'stubhub', 'vivid-seats'], featured: true, trending: true
  },
  // Golf
  {
    id: 'golf-players-championship', slug: 'the-players-championship-final-round', name: 'The Players Championship — Final Round',
    category: 'golf', league: null, teams: [],
    venue: 'TPC Sawgrass', city: 'Ponte Vedra Beach', state: 'FL', country: 'USA',
    date: '2027-03-14', time: '08:00',
    description: 'Final-round grounds access at the PGA Tour\'s flagship event.',
    priceRange: '$120 - $950', providers: ['ticketmaster', 'seatgeek'], featured: false, trending: false
  },
  // UFC / Boxing
  {
    id: 'ufc-miami-card', slug: 'ufc-fight-night-miami', name: 'UFC Fight Night — Miami',
    category: 'ufc-boxing', league: 'ufc', teams: [],
    venue: 'Kaseya Center', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-11-21', time: '22:00',
    description: 'Live prelims and main card featuring top-15 ranked fighters.',
    priceRange: '$150 - $2,100', providers: ['ticketmaster', 'axs', 'vivid-seats'], featured: true, trending: false
  },
  // Theater & Broadway
  {
    id: 'broadway-hamilton-miami', slug: 'hamilton-adrienne-arsht-center', name: 'Hamilton',
    category: 'theater-broadway', league: null, teams: [], artist: 'Hamilton (Touring Production)',
    venue: 'Adrienne Arsht Center', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-09-10', time: '20:00',
    description: 'The Tony Award-winning musical on its national touring run.',
    priceRange: '$89 - $650', providers: ['ticketmaster', 'seatgeek', 'axs'], featured: true, trending: true
  },
  // Shows & Entertainment
  {
    id: 'cirque-du-soleil-miami', slug: 'cirque-du-soleil-kurios-miami', name: 'Cirque du Soleil — KURIOS',
    category: 'shows-entertainment', league: null, teams: [], artist: 'Cirque du Soleil',
    venue: 'Miami-Dade County Fair & Expo Center', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-10-02', time: '19:30',
    description: 'A curiosity cabinet come to life under the Grand Chapiteau.',
    priceRange: '$65 - $310', providers: ['ticketmaster', 'vivid-seats'], featured: false, trending: false
  },
  // Festivals
  {
    id: 'ultra-music-festival', slug: 'ultra-music-festival-miami', name: 'Ultra Music Festival',
    category: 'festivals', league: null, teams: [], artist: 'Ultra Music Festival',
    venue: 'Bayfront Park', city: 'Miami', state: 'FL', country: 'USA',
    date: '2027-03-26', time: '12:00',
    description: 'Three-day electronic music festival on the downtown Miami waterfront.',
    priceRange: '$399 - $1,899', providers: ['ticketmaster', 'eventbrite'], featured: true, trending: true
  },
  // Music Events
  {
    id: 'bad-bunny-miami', slug: 'bad-bunny-kaseya-center', name: 'Bad Bunny — World Tour',
    category: 'music-events', league: null, teams: [], artist: 'Bad Bunny',
    venue: 'Kaseya Center', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-08-15', time: '20:00',
    description: 'Global superstar bringing his world tour to South Florida.',
    priceRange: '$120 - $980', providers: ['ticketmaster', 'stubhub', 'seatgeek', 'gametime'], featured: true, trending: true
  },
  {
    id: 'taylor-swift-miami', slug: 'taylor-swift-hard-rock-stadium', name: 'Taylor Swift — The Eras Tour',
    category: 'music-events', league: null, teams: [], artist: 'Taylor Swift',
    venue: 'Hard Rock Stadium', city: 'Miami Gardens', state: 'FL', country: 'USA',
    date: '2026-10-24', time: '19:00',
    description: 'Record-breaking stadium tour makes its Miami stop.',
    priceRange: '$199 - $3,500', providers: ['ticketmaster', 'stubhub', 'vivid-seats', 'tickpick'], featured: true, trending: true
  },
  // Comedy Shows
  {
    id: 'kevin-hart-miami', slug: 'kevin-hart-live-miami', name: 'Kevin Hart — Reality Check Tour',
    category: 'comedy-shows', league: null, teams: [], artist: 'Kevin Hart',
    venue: 'Miami-Dade Arena', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-09-27', time: '20:00',
    description: 'Stand-up comedy headline show from one of the genre\'s biggest names.',
    priceRange: '$75 - $420', providers: ['ticketmaster', 'axs'], featured: false, trending: false
  },
  // Family Events
  {
    id: 'disney-on-ice-miami', slug: 'disney-on-ice-miami', name: 'Disney On Ice',
    category: 'family-events', league: null, teams: [], artist: 'Disney On Ice',
    venue: 'Kaseya Center', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-12-27', time: '11:00',
    description: 'Family-friendly ice show featuring Disney\'s most beloved characters.',
    priceRange: '$35 - $150', providers: ['ticketmaster', 'eventbrite'], featured: false, trending: false
  },
  // Exhibitions & Museums
  {
    id: 'immersive-van-gogh-miami', slug: 'immersive-van-gogh-miami', name: 'Immersive Van Gogh',
    category: 'exhibitions-museums', league: null, teams: [], artist: 'Immersive Van Gogh',
    venue: 'Ice Palace Studios', city: 'Miami', state: 'FL', country: 'USA',
    date: '2026-08-01', time: '10:00',
    description: 'A 360-degree digital art experience celebrating Van Gogh\'s work.',
    priceRange: '$45 - $95', providers: ['eventbrite', 'ticketmaster'], featured: false, trending: false
  },
  // Gaming & Esports
  {
    id: 'esports-valorant-miami', slug: 'valorant-champions-miami', name: 'VALORANT Champions Tour — Miami Stop',
    category: 'gaming-esports', league: null, teams: [], artist: 'VALORANT Champions Tour',
    venue: 'Watsco Center', city: 'Coral Gables', state: 'FL', country: 'USA',
    date: '2026-11-07', time: '17:00',
    description: 'Live playoff-stage competition from the global VALORANT circuit.',
    priceRange: '$40 - $260', providers: ['eventbrite', 'ticketmaster'], featured: false, trending: true
  },
  // Special Events
  {
    id: 'art-basel-miami', slug: 'art-basel-miami-beach', name: 'Art Basel Miami Beach',
    category: 'special-events', league: null, teams: [], artist: 'Art Basel',
    venue: 'Miami Beach Convention Center', city: 'Miami Beach', state: 'FL', country: 'USA',
    date: '2026-12-04', time: '11:00',
    description: 'The premier international art fair\'s flagship U.S. edition.',
    priceRange: '$65 - $450', providers: ['eventbrite', 'axs'], featured: true, trending: false
  }
];

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
