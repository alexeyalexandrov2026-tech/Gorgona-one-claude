// Category model for the AI Discovery Sphere (Popular Categories homepage section).
//
// The 19 discovery entry points are grouped into five constellations plus a
// Concierge core so the sphere never shows all labels at once — constellation
// names surface at rest, individual categories reveal on approach / intent.
//
// Every `href` resolves to a route that already exists in `app/` (verified against
// the app directory and `lib/ecosystemData.js`). The `keywords` power the Phase 1
// client-side keyword router in CategoryOrb (typed query -> best matching entry);
// there is no AI backend in Phase 1.

export const CONSTELLATIONS = [
  { id: 'travel', name: 'World of Travel', color: [198, 160, 94] },
  { id: 'drive', name: 'Drive & Sail', color: [185, 138, 70] },
  { id: 'style', name: 'Style & Shop', color: [216, 180, 120] },
  { id: 'play', name: 'Play & Win', color: [169, 130, 63] },
  { id: 'taste', name: 'Table & Taste', color: [203, 168, 103] },
  { id: 'concierge', name: 'Concierge', color: [138, 101, 40] }
];

export const discoveryCategories = [
  // World of Travel
  { label: 'Travel', href: '/travel', cluster: 'travel', keywords: ['travel', 'trip', 'vacation', 'holiday', 'getaway', 'journey'] },
  { label: 'Flights', href: '/travel', cluster: 'travel', keywords: ['flight', 'flights', 'fly', 'airline', 'airfare', 'plane'] },
  { label: 'Hotels', href: '/vacation-rentals', cluster: 'travel', keywords: ['hotel', 'hotels', 'stay', 'resort', 'suite', 'room', 'miami beach'] },
  { label: 'Car Rentals', href: '/rentals', cluster: 'travel', keywords: ['car rental', 'rent a car', 'rental', 'hire car'] },

  // Drive & Sail
  { label: 'Cars', href: '/rentals', cluster: 'drive', keywords: ['car', 'cars', 'lamborghini', 'ferrari', 'supercar', 'exotic', 'drive', 'porsche', 'rolls royce'] },
  { label: 'Yachts', href: '/yachts', cluster: 'drive', keywords: ['yacht', 'yachts', 'boat', 'charter', 'sail', 'marine', 'catamaran'] },

  // Style & Shop
  { label: 'Shopping', href: '/stores', cluster: 'style', keywords: ['shopping', 'shop', 'stores', 'buy', 'retail'] },
  { label: 'Fashion', href: '/stores/fashion', cluster: 'style', keywords: ['fashion', 'clothes', 'clothing', 'apparel', 'style', 'designer', 'wear'] },
  { label: 'Beauty', href: '/stores/beauty', cluster: 'style', keywords: ['beauty', 'skincare', 'cosmetics', 'makeup', 'wellness', 'spa'] },
  { label: 'Electronics', href: '/stores/electronics', cluster: 'style', keywords: ['electronics', 'tech', 'gadget', 'phone', 'laptop', 'device', 'gaming'] },

  // Play & Win
  { label: 'Entertainment', href: '/entertainment', cluster: 'play', keywords: ['entertainment', 'streaming', 'movie', 'cinema', 'music', 'show'] },
  { label: 'Events', href: '/events', cluster: 'play', keywords: ['event', 'events', 'nightlife', 'concert', 'party', 'vip', 'club'] },
  { label: 'Sports', href: '/stores/sport', cluster: 'play', keywords: ['sport', 'sports', 'fitness', 'gym', 'athletic', 'workout'] },
  { label: 'Sportsbooks', href: '/sportsbook', cluster: 'play', keywords: ['sportsbook', 'sportsbooks', 'betting', 'bet', 'bonus', 'odds', 'wager'] },

  // Table & Taste
  { label: 'Food', href: '/stores/food', cluster: 'taste', keywords: ['food', 'grocery', 'delivery', 'meal', 'snack'] },
  { label: 'Restaurants', href: '/stores/restaurants', cluster: 'taste', keywords: ['restaurant', 'restaurants', 'dining', 'dinner', 'eat', 'cafe', 'cuisine'] },

  // Concierge core
  { label: 'Concierge', href: '/concierge', cluster: 'concierge', keywords: ['concierge', 'assistant', 'help', 'recommend', 'ai', 'plan', 'book'] },
  { label: 'Promo Codes', href: '/coupons', cluster: 'concierge', keywords: ['promo', 'promo code', 'code', 'coupon', 'voucher', 'discount code'] },
  { label: 'Deals', href: '/deals', cluster: 'concierge', keywords: ['deal', 'deals', 'discount', 'offer', 'sale', 'savings', 'cheap'] }
];

// The four rotating example prompts shown as the Concierge placeholder.
export const EXAMPLE_PROMPTS = [
  'Find me a Lamborghini in Miami',
  'Show yacht rentals under $5,000',
  'Best sportsbook bonuses tonight',
  'Luxury hotels in Miami Beach'
];

// Phase 1 keyword router: score each category by how well the free-text query
// matches its keywords/label, return the best matches (highest score first).
// Purely client-side — no network, no AI service.
export function matchCategories(query, limit = 4) {
  const q = (query || '').toLowerCase().trim();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);

  const scored = discoveryCategories.map((cat) => {
    let score = 0;
    const label = cat.label.toLowerCase();
    if (label === q) score += 12;
    else if (q.includes(label) || label.includes(q)) score += 6;

    for (const kw of cat.keywords) {
      if (q.includes(kw)) score += kw.includes(' ') ? 5 : 3;
      else if (tokens.some((tok) => tok === kw)) score += 3;
      else if (tokens.some((tok) => tok.length > 3 && kw.startsWith(tok))) score += 1;
    }
    return { cat, score };
  });

  return scored
    .filter((s) => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((s) => s.cat);
}
