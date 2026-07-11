"use client";

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { allDeals, categories, getDealDescription } from '../../lib/dealsData';
import { getTranslation } from '../../lib/i18n';
import { useLocale } from './LocaleProvider';

const POPULAR_SEARCH_LINKS = [
  { key: 'carRentals', href: '/rentals' },
  { key: 'yachtRentals', href: '/yachts' },
  { key: 'sportsbookBonuses', href: '/sportsbook' },
  { key: 'vacationRentals', href: '/vacation-rentals' },
  { key: 'miamiExperiences', href: '/experiences' },
  { key: 'restaurantsNightlife', href: '/restaurants-nightlife' }
];

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export function SearchBar() {
  const locale = useLocale();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const t = getTranslation(locale);

  const filteredDeals = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return allDeals.filter((deal) => {
      const matchesQuery = !normalized || [deal.name, deal.category, getDealDescription(deal, t), deal.discount, deal.promoCode].join(' ').toLowerCase().includes(normalized);
      const matchesCategory = activeCategory === 'all' || deal.category === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [activeCategory, query, t]);

  const popularSearches = POPULAR_SEARCH_LINKS.map((item) => ({ ...item, label: t.search.popular[item.key] }));

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-premium sm:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t.search.placeholder}
          className="flex-1 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none"
        />
        <select value={activeCategory} onChange={(event) => setActiveCategory(event.target.value)} className="rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none">
          <option value="all">{t.category.allCategories}</option>
          {categories.map((category) => (
            <option key={category.slug} value={category.slug}>{t.categories[camelizeSlug(category.slug)] || category.label}</option>
          ))}
        </select>
        <button className="rounded-full bg-brand-gold px-4 py-3 text-sm font-medium text-black">{t.buttons.search}</button>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {popularSearches.map((search) => (
          <Link key={search.key} href={search.href} className="rounded-full border border-white/10 px-3 py-2 text-sm text-zinc-300 transition hover:border-brand-gold hover:text-brand-gold">
            {search.label}
          </Link>
        ))}
      </div>

      <div className="mt-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">{t.search.results}</p>
        {filteredDeals.length === 0 ? (
          <p className="mt-3 text-sm text-zinc-400">{t.search.noResults}</p>
        ) : (
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {filteredDeals.slice(0, 6).map((deal) => (
              <Link key={deal.id} href={`/deals/${deal.slug}`} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-semibold text-white">{deal.name}</p>
                  <span className="rounded-full bg-brand-gold/15 px-2 py-1 text-xs text-brand-gold">{t.categories[camelizeSlug(deal.category)] || deal.category}</span>
                </div>
                <p className="mt-2 text-sm text-zinc-400">{getDealDescription(deal, t)}</p>
                <div className="mt-3 flex items-center justify-between text-sm text-zinc-500">
                  <span>{deal.promoCode || t.category.noCodeNeeded}</span>
                  <span>{deal.discount}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
