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
