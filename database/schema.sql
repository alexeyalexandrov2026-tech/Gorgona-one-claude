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
