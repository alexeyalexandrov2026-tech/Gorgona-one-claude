// RentCars — car-rental integration (LIVE, Phase 4).
//
// Serves real inventory through the platform search engine (/api/search,
// world=car-rentals) - the same Postgres FTS behind the site search and the
// AI tool, so Discovery results always agree with every other surface.
// Failure-safe by contract: any error returns an empty ready-result and the
// provider seam continues with index results untouched.

// Small per-page cache: Discovery may consult integrations repeatedly for
// similar queries within one session.
const cache = new Map();
const CACHE_MAX = 20;

export const rentcars = {
  id: 'rentcars',
  name: 'RentCars',
  kind: 'car-rental',
  ready: true,
  route: '/rentals',
  keywords: ['car rental', 'rent a car', 'rental car', 'hire car', 'rentcars'],

  async search({ query } = {}) {
    const q = String(query || '').trim();
    if (q.length < 2) return { ready: true, results: [], route: this.route };
    if (cache.has(q)) return cache.get(q);

    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}&world=car-rentals&limit=4`);
      const data = await res.json();
      const results = (Array.isArray(data?.results) ? data.results : []).map((item) => ({
        id: `rentcars-${item.slug}`,
        type: 'Car',
        title: item.title,
        subtitle: [item.location, item.price && `${item.price}/day`].filter(Boolean).join(' · '),
        href: item.href
      }));
      const payload = { ready: true, results, route: this.route };
      if (cache.size >= CACHE_MAX) cache.delete(cache.keys().next().value);
      cache.set(q, payload);
      return payload;
    } catch {
      return { ready: true, results: [], route: this.route };
    }
  }
};
