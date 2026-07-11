import { stores, sportsbooks } from '../lib/mockData';
import { categories, allDeals } from '../lib/dealsData';

export default function sitemap() {
  const baseUrl = 'https://gorgona-one.vercel.app';
  const routes = [
    '',
    '/stores',
    '/coupons',
    '/sportsbook',
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

  return [...staticRoutes, ...dynamicRoutes, ...categoryRoutes, ...dealRoutes];
}
