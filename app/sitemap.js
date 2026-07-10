import { getStores } from '../lib/data/stores';
import { getSportsbooks } from '../lib/data/sportsbooks';
import { EVENT_CATEGORIES, LEAGUES, getAllEvents } from '../lib/eventsData';

export default async function sitemap() {
  const [stores, sportsbooks] = await Promise.all([getStores(), getSportsbooks()]);
  const events = getAllEvents();
  const baseUrl = 'https://gorgona-one.vercel.app';
  const routes = [
    '',
    '/stores',
    '/coupons',
    '/sportsbook',
    '/events',
    '/best-shopping-deals',
    '/nike-coupons',
    '/amazon-promo-codes',
    '/fashion-discounts',
    '/sports-betting-promos',
    '/draftkings-promos',
    '/fanduel-promos',
    '/betmgm-promos',
    '/caesars-sportsbook-promos'
  ];

  const staticRoutes = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.8
  }));

  const dynamicRoutes = [...stores, ...sportsbooks].map((item) => ({
    url: `${baseUrl}${item.slug ? `/stores/${item.slug}` : `/sportsbook/${item.slug}`}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  const eventCategoryRoutes = EVENT_CATEGORIES.map((category) => ({
    url: `${baseUrl}/events/category/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.7
  }));

  const leagueRoutes = LEAGUES.map((league) => ({
    url: `${baseUrl}/events/league/${league.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6
  }));

  const eventRoutes = events.map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8
  }));

  return [...staticRoutes, ...dynamicRoutes, ...eventCategoryRoutes, ...leagueRoutes, ...eventRoutes];
}
