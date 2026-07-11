# GORGONA ONE

GORGONA ONE is a marketplace and business directory platform built with Next.js 14, Tailwind CSS, and Supabase (Postgres + Auth + Storage). It includes:

- Real Supabase authentication: signup, login, logout, password reset, email verification (roles: admin, business_owner, customer)
- Business dashboard (`/dashboard`): listing CRUD, logo/banner/gallery uploads, promo codes, offers, analytics, CSV/XML/JSON/Excel import with rollback, API keys, webhooks
- Admin panel (`/admin`): approve/reject/suspend/delete businesses, manage users/roles, categories, promo codes, partner accounts, external feeds
- Public directory: `/businesses`, `/business/[slug]`, `/categories`, `/category/[slug]` with search, filters, sorting, pagination, JSON-LD
- Partner REST API (`/api/businesses`, `/api/categories`, `/api/promocodes`, `/api/offers`) with hashed API keys and per-key rate limiting - docs at `/api-docs`
- Aggregator feed sync (`/api/cron/sync`) for hourly/daily/weekly external feeds, with retry tracking and webhook dispatch
- 16-language i18n (with RTL for Hebrew, Arabic, Persian), SEO (sitemap, robots, structured data), and legal pages

Every Supabase-backed feature degrades gracefully (empty/"not connected" states, never a crash) until the environment variables below are set - this lets the app build and deploy before a database exists.

## Tech stack
- Next.js 14, React 18, Tailwind CSS
- Supabase (Postgres, Auth, Storage)
- Cloudflare Pages/Workers (via `@opennextjs/cloudflare`) or Vercel

## Setup

1. Install dependencies: `npm install`
2. Create a Supabase project, then in the SQL editor run, in order:
   - `database/schema.sql` - tables, indexes, RLS policies
   - `database/storage.sql` - the `business-media` public bucket (image-only, 8MB limit) and its storage policies
   - `database/seed.sql` - optional starter categories (shopping, fashion, travel, kosher, rentals, etc.)
3. Copy `.env.example` to `.env.local` and fill in:
   - `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY` - from Supabase Settings > API
   - `SUPABASE_SERVICE_ROLE_KEY` - server-only, used by API routes/imports/feed sync/webhooks to enforce ownership checks explicitly instead of via RLS
   - `CRON_SECRET` - any long random string; required in `Authorization: Bearer <CRON_SECRET>` when calling `/api/cron/sync`
4. Run the dev server: `npm run dev`

## First admin user

New signups default to `customer`. To promote the first admin, run in the Supabase SQL editor:

```sql
update public.users set role = 'admin' where email = 'you@example.com';
```

## Scheduling the aggregator sync

`/api/cron/sync` checks every `external_feeds` row and syncs any that are due for their schedule (hourly/daily/weekly). Nothing calls it automatically - point an external scheduler at it:

- **Vercel**: `vercel.json` already defines an hourly cron hitting `/api/cron/sync`; Vercel automatically sends `Authorization: Bearer $CRON_SECRET` when that env var is set.
- **Cloudflare / any other host**: use a Cloudflare Cron Trigger, GitHub Actions scheduled workflow, or a service like cron-job.org to `POST` to `/api/cron/sync` with the `Authorization: Bearer <CRON_SECRET>` header.

## Partner API

See `/api-docs` for the full REST reference. In short: sign in as a business owner or admin, call `POST /api/partner/keys` with your Supabase session token to generate an API key, then use that key against `/api/businesses`, `/api/categories`, `/api/promocodes`, `/api/offers`.

## Webhook coverage

`dispatchWebhookEvent` (in `lib/webhooks.js`) needs the service-role client, so it can only run from a server route - not from a plain browser Supabase call. It fires today for: businesses/promo codes/offers created through the **Partner API** (`/api/businesses`, `/api/promocodes`, `/api/offers`), and for status changes/deletes made through the **admin panel** (`/api/admin/businesses/[id]`, used by `/admin`'s approve/reject/suspend/delete actions). It does **not** yet fire when a business owner creates or edits their own listing from `/dashboard`, since that path writes directly to Supabase via the RLS-scoped browser client for simplicity. To close that gap, either move dashboard writes through a server route the same way, or configure a native [Supabase Database Webhook](https://supabase.com/docs/guides/database/webhooks) on the `businesses` table pointing at a small internal endpoint that calls `dispatchWebhookEvent` - the latter needs your deployed URL, so it's left for you to wire up post-deploy.

## Production build
- `npm run build`
- `npm run start`

The build script runs a plain `next build` on Vercel (`$VERCEL=1`) or the OpenNext Cloudflare bundler otherwise (see `wrangler.jsonc`, `open-next.config.mjs`).
