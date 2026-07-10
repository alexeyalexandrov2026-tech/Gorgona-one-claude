# public/logos

Static logo files for stores, sportsbooks, and the deals/brands catalog.

## Adding a logo

1. Find the company's row in `MANIFEST.md` (or add a new entity to `lib/mockData.js` /
   `lib/dealsData.js` first — the manifest and mapping are generated from those files).
2. Save the logo file here using the domain-based filename from the manifest,
   e.g. `amazon.com.png`.
3. Done. `lib/logos/index.js` maps every entity's slug to `/logos/<domain>.png`
   automatically, and `app/components/Logo.jsx` renders it. No code changes needed.

## Fallback behavior

If a file is missing (or fails to load), `<Logo>` falls back to the existing
`/images/brands/placeholder.svg` and never breaks page rendering.

## Filenames

One file per domain, not per slug — several entities can share a company (e.g.
Nike appears in both the fashion and sport catalogs) and therefore share one
logo file.
