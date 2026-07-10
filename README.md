# GORGONA ONE

GORGONA ONE is a premium, mobile-first coupon, deals, and offers marketplace built with Next.js, Tailwind CSS, and a Supabase-ready data model. The MVP includes:

- Home page with hero, trending deals, popular stores, categories, featured coupons, sportsbook highlights, and newsletter signup
- Stores directory and individual store profile pages
- Coupon listings with verification status and future-ready promo-code fields
- Sportsbook category with dedicated profile pages for 10 major operators and responsible-gambling guidance
- Supabase-backed authentication (sign up / sign in / sign out) with session-protected profile and admin routes
- Newsletter signup and partner application forms that persist to Supabase
- Admin dashboard gated by a `users.role = 'admin'` check, with CSV import for stores and live views of partner applications and newsletter subscribers
- SEO routes, robots, sitemap, manifest, and Open Graph assets for Vercel deployment

Store, coupon, and sportsbook listing pages still read from the static data in `lib/` rather than Supabase — migrating those to live queries is the next step for full Supabase integration.

## Tech stack
- Next.js 14
- React 18
- Tailwind CSS
- Supabase Database + Auth
- Vercel deployment ready

## Local development
1. Install dependencies: npm install
2. Copy .env.example to .env.local and add your Supabase project URL, anon key, and service role key
3. Run `database/schema.sql` against your Supabase project
4. To grant yourself admin access, sign up through /login, then insert a row into `users` with your auth user id, email, and `role = 'admin'`
5. Run the development server: npm run dev

## Production build
- npm run build
- npm run start
