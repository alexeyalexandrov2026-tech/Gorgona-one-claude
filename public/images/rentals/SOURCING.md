# Rental image sourcing

`RentalGrid` renders whatever URL is in each listing's `image` field — swapping
a placeholder for a real photo is a one-line data change in
`lib/rentalsData.js`, no code changes needed.

## Why this isn't done yet

This session's sandbox cannot reach any external image host to fetch or even
verify a URL — confirmed with both direct requests and the WebFetch tool
against images.unsplash.com (blocked with a 403 policy denial both times).
Shipping specific "real" photo URLs I can't verify would risk silently
broken images, so the 30 new Florida-focused listings and the 8 existing car
listings currently use on-brand SVG placeholders instead.

## Where to get real, properly licensed photos

All three of these are free for commercial use with no royalty:

| Source | License | Notes |
|---|---|---|
| [Unsplash](https://unsplash.com) | [Unsplash License](https://unsplash.com/license) — free to use, no attribution required | Search: [yacht](https://unsplash.com/s/photos/yacht), [luxury villa](https://unsplash.com/s/photos/luxury-villa), [miami](https://unsplash.com/s/photos/miami), [luxury car](https://unsplash.com/s/photos/luxury-car) |
| [Pexels](https://www.pexels.com) | [Pexels License](https://www.pexels.com/license/) — free to use, attribution appreciated but not required | Search: [yacht](https://www.pexels.com/search/yacht/), [villa](https://www.pexels.com/search/villa/), [miami beach](https://www.pexels.com/search/miami%20beach/), [sports car](https://www.pexels.com/search/sports%20car/) |
| [Wikimedia Commons](https://commons.wikimedia.org) | Varies per file (CC0, CC-BY, CC-BY-SA) — check each file's page for exact terms and required attribution | Browse: [Category:Yachts](https://commons.wikimedia.org/wiki/Category:Yachts), [Category:Miami](https://commons.wikimedia.org/wiki/Category:Miami), [Category:Luxury_cars](https://commons.wikimedia.org/wiki/Category:Luxury_cars) |

Unsplash and Pexels photo pages include a direct-link/download button that
gives a stable CDN URL suitable for hotlinking (the same pattern already used
by this project's original 8 car listings, which link directly to
`images.unsplash.com/photo-<id>` URLs).

## How to swap one in

1. Pick a photo from one of the sources above, matching the listing (e.g. a
   65ft sport yacht photo for `viking-sport-yacht-65`).
2. Copy its direct image URL (or download it into `public/images/rentals/`
   and use a local path).
3. In `lib/rentalsData.js`, replace that listing's `image` value with the new
   URL/path.
4. Note the source and license in this file's table below (add a row).
5. Repeat for the placeholder SVGs in this folder as each listing gets a
   real photo — once every listing using a given placeholder has a real
   image, the placeholder SVG can be deleted.

## Per-listing tracking

Not yet started — every listing in `lib/rentalsData.js` still uses one of
`yacht-placeholder.svg`, `vacation-placeholder.svg`,
`miami-experience-placeholder.svg`, or (for the original 8 cars) its existing
`images.unsplash.com` hotlink. Add a row here per listing as it's replaced:

| Listing slug | Image source | License |
|---|---|---|
| _(none yet)_ | | |
