---
name: testing-gorgona-deals
description: Test the GORGONA ONE deals marketplace end-to-end (brand logos, dedicated profile pages, Search Results, and affiliate/deal links). Use when verifying changes to lib/dealsData.js, lib/mockData.js, brand assets, or affiliate URLs.
---

# Testing GORGONA ONE deals & affiliate flows

Next.js 14 app; deploys to Cloudflare Workers via OpenNext. All directory/deal content is **static** (no DB), so most UI can be tested with just the dev server — no Supabase creds needed.

## Run locally
```bash
npm install
npm run dev   # http://localhost:3000
```
- Full build check: `npm run build` (runs `next build` + OpenNext Cloudflare bundle). Next-only compile: `npx next build`.
- No `lint`/`test` scripts exist in package.json.

## Where data lives
- `lib/dealsData.js` — `brandsByCategory` (per-category brand list) + `buildDeals()`. A brand can override `logoExt` (svg/webp/png), `affiliateLink`, and `website`. `buildDeals` also special-cases Amazon (`brand.domain === 'amazon.com'`) to force the Amazon affiliate URL.
- `lib/mockData.js` — `stores`/`sportsbooks` used by store/sportsbook pages (Amazon store record also carries the affiliate URL).
- Brand logos: `public/images/brands/<slug>-<category>.<ext>` where slug = `slugify("<name>-<category>")`.

## Key UI paths to verify
- Category listing: `/stores/<category>` (e.g. `/stores/travel`, `/stores/entertainment`) — one card per brand; logo `<img>` = `/images/brands/<slug>.<ext>`.
- Deal detail: `/deals/<slug>` — has "Get Deal" (`deal.affiliateLink`) and "Visit Store" (`deal.website`).
- Dedicated profile pages exist for some brands, e.g. `/travel/ovago`, `/entertainment/adrenaline-365`; those brands set `affiliateLink`/`website` to the internal path so their cards link there.
- Homepage Search Results (`app/components/SearchBar.jsx`): shows a fixed top-6 window, then applies `HIDDEN_FROM_SEARCH_RESULTS` (e.g. Best Buy, Ovago) and appends special promo cards (KXC, Rentcars, Ovago) when category is "all". So a brand can be intentionally hidden from Search Results while still listed under `/stores/<category>`.

## Verifying affiliate URLs
- Quick check without a browser: `curl -s http://localhost:3000/deals/<slug> | grep -o 'tag=<affiliate-tag>'`.
- In browser, read the anchor hrefs directly (DOM/console `a.href`) rather than trusting link text.

## CI gotchas (may change over time)
- The repo has multiple deploy integrations. "Cloudflare Pages" check may fail regardless of the PR (it also fails on `main`); the real target is "Workers Builds". Vercel may show "Account is blocked" (account-level). Verify a red check against base `main` before assuming the PR caused it.

## Devin Secrets Needed
- None for these static routes. Supabase-backed routes (auth/admin) would need `NEXT_PUBLIC_SUPABASE_URL` and a Supabase key, but they are not required for deals/affiliate/logo testing.
