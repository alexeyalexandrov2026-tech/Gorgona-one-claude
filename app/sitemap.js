import { stores, sportsbooks } from '../lib/mockData';
import { categories, allDeals } from '../lib/dealsData';
import { EVENT_CATEGORIES, LEAGUES, getAllEvents } from '../lib/eventsData';
import { listBusinesses, listCategories } from '../lib/businesses';

export default async function sitemap() {
  const baseUrl = 'https://gorgona-one.vercel.app';
  const routes = [
    '',
    '/businesses',
    '/categories',
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

  const categoryRoutes = categories.map((category) => ({
    url: `${baseUrl}/stores/${category.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7
  }));

  const dealRoutes = allDeals.map((deal) => ({
    url: `${baseUrl}/deals/${deal.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.6
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

  const eventRoutes = getAllEvents().map((event) => ({
    url: `${baseUrl}/events/${event.slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8
  }));

  let businessRoutes = [];
  let businessCategoryRoutes = [];
  try {
    const [{ items: dbCategories }, { items: businesses }] = await Promise.all([
      listCategories(),
      listBusinesses({ page: 1, pageSize: 100 })
    ]);
    businessCategoryRoutes = dbCategories.map((category) => ({
      url: `${baseUrl}/category/${category.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    }));
    businessRoutes = businesses.map((business) => ({
      url: `${baseUrl}/business/${business.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7
    }));
  } catch {
    // Supabase not configured yet - sitemap still returns the static/mock routes below.
  }

  return [...staticRoutes, ...dynamicRoutes, ...categoryRoutes, ...dealRoutes, ...eventCategoryRoutes, ...leagueRoutes, ...eventRoutes, ...businessCategoryRoutes, ...businessRoutes];
}
