import { getStores } from '../lib/data/stores';
import { getSportsbooks } from '../lib/data/sportsbooks';

export default async function sitemap() {
  const [stores, sportsbooks] = await Promise.all([getStores(), getSportsbooks()]);
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

  return [...staticRoutes, ...dynamicRoutes];
}
