import { stores, sportsbooks } from '../mockData';
import { allDeals } from '../dealsData';

function domainFromUrl(url) {
  if (!url) return null;
  try {
    return new URL(url).hostname.replace(/^www\./, '');
  } catch {
    return null;
  }
}

function buildRegistry() {
  const registry = [];
  const seen = new Set();

  function register(type, slug, name, website) {
    if (!slug) return;
    const key = `${type}:${slug}`;
    if (seen.has(key)) return;
    seen.add(key);
    const domain = domainFromUrl(website);
    registry.push({
      type,
      slug,
      name,
      domain,
      filename: domain ? `${domain}.png` : null,
    });
  }

  stores.forEach((store) => register('store', store.slug, store.name, store.website));
  sportsbooks.forEach((book) => register('sportsbook', book.slug, book.name, book.website));
  allDeals.forEach((deal) => register('brand', deal.slug, deal.name, deal.website));

  return registry;
}

// Every store, sportsbook, and deals-catalog brand currently in the project,
// each resolved to the domain (and therefore logo filename) it maps to.
// Nothing here is invented: it is derived directly from lib/mockData.js and
// lib/dealsData.js, so adding/removing an entity there updates this list too.
export const logoRegistry = buildRegistry();
