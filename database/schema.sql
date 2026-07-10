CREATE TABLE IF NOT EXISTS stores (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL,
  logo TEXT,
  website TEXT,
  affiliate_link TEXT,
  description TEXT,
  status TEXT DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS coupons (
  id SERIAL PRIMARY KEY,
  store_id INTEGER REFERENCES stores(id),
  code TEXT,
  discount TEXT,
  description TEXT,
  expiration DATE,
  status TEXT DEFAULT 'verified',
  clicks INTEGER DEFAULT 0
);

CREATE TABLE IF NOT EXISTS categories (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT
);

CREATE TABLE IF NOT EXISTS sportsbooks (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  logo TEXT,
  description TEXT,
  website TEXT,
  affiliate_link TEXT,
  promo_code TEXT,
  bonus_offer TEXT,
  state_availability TEXT,
  status TEXT DEFAULT 'active'
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email TEXT NOT NULL,
  role TEXT DEFAULT 'user'
);

CREATE TABLE IF NOT EXISTS analytics (
  id SERIAL PRIMARY KEY,
  coupon_id INTEGER REFERENCES coupons(id),
  clicks INTEGER DEFAULT 0,
  date DATE
);

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS partner_applications (
  id SERIAL PRIMARY KEY,
  company_name TEXT NOT NULL,
  website TEXT,
  contact_email TEXT NOT NULL,
  category TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Category and deal catalog backing the /stores, /coupons, and /deals pages.
-- Distinct from `categories` above, which backs the sportsbook-era store model.
CREATE TABLE IF NOT EXISTS deal_categories (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  icon TEXT,
  description TEXT
);

CREATE TABLE IF NOT EXISTS deals (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  category TEXT NOT NULL REFERENCES deal_categories(slug),
  logo TEXT,
  image TEXT,
  description TEXT,
  promo_code TEXT,
  discount TEXT,
  expiration_date DATE,
  affiliate_link TEXT,
  website TEXT,
  featured BOOLEAN DEFAULT false
);

-- Tickets & Events Marketplace. Currently backed by static data in
-- lib/eventsData.js; these tables are prepared for a future Admin Dashboard
-- to manage events/leagues/teams/providers the same way the CSV importer
-- manages `stores` today - no live queries against these tables exist yet.
CREATE TABLE IF NOT EXISTS event_categories (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  label TEXT NOT NULL,
  icon TEXT,
  category_group TEXT NOT NULL CHECK (category_group IN ('sports', 'concerts'))
);

CREATE TABLE IF NOT EXISTS leagues (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  sport TEXT,
  category TEXT REFERENCES event_categories(slug),
  website TEXT
);

CREATE TABLE IF NOT EXISTS teams (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  league_id INTEGER REFERENCES leagues(id),
  city TEXT,
  website TEXT
);

CREATE TABLE IF NOT EXISTS ticket_providers (
  id SERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  website TEXT,
  affiliate_env_var TEXT
);

CREATE TABLE IF NOT EXISTS events (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  category TEXT NOT NULL REFERENCES event_categories(slug),
  league_id INTEGER REFERENCES leagues(id),
  artist TEXT,
  venue TEXT NOT NULL,
  city TEXT NOT NULL,
  state_or_country TEXT,
  event_date DATE NOT NULL,
  event_time TIME,
  description TEXT,
  price_range TEXT,
  featured BOOLEAN DEFAULT false,
  trending BOOLEAN DEFAULT false
);

CREATE TABLE IF NOT EXISTS event_teams (
  event_id TEXT REFERENCES events(id),
  team_id INTEGER REFERENCES teams(id),
  PRIMARY KEY (event_id, team_id)
);

CREATE TABLE IF NOT EXISTS event_providers (
  event_id TEXT REFERENCES events(id),
  provider_id INTEGER REFERENCES ticket_providers(id),
  PRIMARY KEY (event_id, provider_id)
);

-- Analytics preparation (see lib/analytics.js) - no writes happen yet.
CREATE TABLE IF NOT EXISTS event_analytics (
  id SERIAL PRIMARY KEY,
  event_id TEXT REFERENCES events(id),
  metric TEXT NOT NULL CHECK (metric IN ('view', 'ticket_click', 'provider_click')),
  provider_id INTEGER REFERENCES ticket_providers(id),
  created_at TIMESTAMPTZ DEFAULT now()
);
