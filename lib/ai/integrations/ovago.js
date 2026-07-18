// OVAGO — flights integration (LIVE, Phase 4).
//
// OVAGO is a real GORGONA ONE travel partner with a dedicated deals page
// (/travel/ovago) carrying its affiliate offers. Until a fare-search API is
// contracted, the adapter serves curated entry points into that live page -
// honest results that always resolve, never placeholders. When a fare API
// arrives, extend search() to query it; the contract stays identical.

const CURATED_RESULTS = [
  {
    id: 'ovago-flight-deals',
    type: 'Flights',
    title: 'OVAGO Flight Deals',
    subtitle: 'Exclusive fares from our travel partner',
    href: '/travel/ovago'
  },
  {
    id: 'ovago-travel',
    type: 'Travel',
    title: 'Plan a Trip with OVAGO',
    subtitle: 'Flights · fast mobile booking',
    href: '/travel'
  }
];

export const ovago = {
  id: 'ovago',
  name: 'OVAGO',
  kind: 'flights',
  ready: true,
  route: '/travel',
  keywords: ['flight', 'flights', 'fly', 'airfare', 'airline', 'airport'],

  async search() {
    return { ready: true, results: CURATED_RESULTS, route: this.route };
  }
};
