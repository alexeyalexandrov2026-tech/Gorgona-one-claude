-- GORGONA ONE production schema (Supabase / Postgres).
-- Run in the Supabase SQL editor, or via `supabase db push`.
-- Idempotent: safe to re-run.

create extension if not exists "pgcrypto";

-- ============================================================
-- Helper functions used by RLS policies
-- ============================================================
create or replace function public.current_role()
returns text
language sql stable
as $$
  select role from public.users where id = auth.uid();
$$;

create or replace function public.is_admin()
returns boolean
language sql stable
as $$
  select coalesce((select role from public.users where id = auth.uid()) = 'admin', false);
$$;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- ============================================================
-- users (profile row mirrors auth.users, adds role)
-- ============================================================
create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text not null,
  name text,
  role text not null default 'customer' check (role in ('admin', 'business_owner', 'customer')),
  slug text unique,
  status text not null default 'active' check (status in ('active', 'suspended')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_users_role on public.users(role);

-- ============================================================
-- categories
-- ============================================================
create table if not exists public.categories (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  name text not null,
  slug text unique not null,
  icon text,
  description text,
  parent_id uuid references public.categories(id),
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_categories_slug on public.categories(slug);
create index if not exists idx_categories_status on public.categories(status);

-- ============================================================
-- partner_accounts (aggregator / API partners)
-- ============================================================
create table if not exists public.partner_accounts (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  company_name text not null,
  slug text unique not null,
  contact_email text not null,
  website text,
  tier text not null default 'standard' check (tier in ('standard', 'premium', 'enterprise')),
  status text not null default 'pending' check (status in ('pending', 'approved', 'suspended')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_partner_accounts_owner on public.partner_accounts(owner_id);

-- ============================================================
-- businesses
-- ============================================================
create table if not exists public.businesses (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  category_id uuid references public.categories(id),
  name text not null,
  slug text unique not null,
  description text,
  logo_url text,
  banner_url text,
  gallery jsonb not null default '[]'::jsonb,
  website text,
  phone text,
  email text,
  address text,
  city text,
  state text,
  country text,
  latitude double precision,
  longitude double precision,
  featured boolean not null default false,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected', 'suspended')),
  source text not null default 'manual' check (source in ('manual', 'import', 'feed', 'api')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_businesses_slug on public.businesses(slug);
create index if not exists idx_businesses_owner on public.businesses(owner_id);
create index if not exists idx_businesses_category on public.businesses(category_id);
create index if not exists idx_businesses_status on public.businesses(status);
create index if not exists idx_businesses_city on public.businesses(city);

-- ============================================================
-- stores (legacy coupon-marketplace table, extended)
-- ============================================================
alter table if exists public.stores add column if not exists owner_id uuid references public.users(id);
alter table if exists public.stores add column if not exists created_at timestamptz not null default now();
alter table if exists public.stores add column if not exists updated_at timestamptz not null default now();
create index if not exists idx_stores_owner on public.stores(owner_id);
create index if not exists idx_stores_status on public.stores(status);

-- ============================================================
-- promo_codes
-- ============================================================
create table if not exists public.promo_codes (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  business_id uuid references public.businesses(id) on delete cascade,
  slug text unique,
  code text not null,
  discount text,
  description text,
  starts_at timestamptz,
  expires_at timestamptz,
  clicks integer not null default 0,
  status text not null default 'active' check (status in ('active', 'expired', 'disabled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_promo_codes_business on public.promo_codes(business_id);
create index if not exists idx_promo_codes_status on public.promo_codes(status);

-- ============================================================
-- offers
-- ============================================================
create table if not exists public.offers (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  business_id uuid references public.businesses(id) on delete cascade,
  slug text unique,
  title text not null,
  description text,
  price numeric(12,2),
  discount_percent numeric(5,2),
  image_url text,
  status text not null default 'active' check (status in ('active', 'expired', 'disabled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_offers_business on public.offers(business_id);
create index if not exists idx_offers_status on public.offers(status);

-- ============================================================
-- reviews
-- ============================================================
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  business_id uuid references public.businesses(id) on delete cascade,
  rating smallint not null check (rating between 1 and 5),
  comment text,
  status text not null default 'published' check (status in ('published', 'flagged', 'hidden')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_reviews_business on public.reviews(business_id);

-- ============================================================
-- analytics (append-only event log)
-- ============================================================
create table if not exists public.analytics (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  business_id uuid references public.businesses(id) on delete cascade,
  metric text not null check (metric in ('view', 'click', 'conversion', 'search', 'promo_click')),
  metadata jsonb not null default '{}'::jsonb,
  status text not null default 'recorded',
  slug text,
  created_at timestamptz not null default now()
);
create index if not exists idx_analytics_business on public.analytics(business_id);
create index if not exists idx_analytics_metric on public.analytics(metric);
create index if not exists idx_analytics_created on public.analytics(created_at);

-- ============================================================
-- rentals (yachts / vacation rentals / experiences / cars)
-- ============================================================
create table if not exists public.rentals (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  business_id uuid references public.businesses(id),
  slug text unique not null,
  name text not null,
  category text not null check (category in ('car', 'yacht', 'vacation-rental', 'experience')),
  description text,
  price_daily numeric(12,2),
  price_weekly numeric(12,2),
  images jsonb not null default '[]'::jsonb,
  location text,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_rentals_owner on public.rentals(owner_id);
create index if not exists idx_rentals_status on public.rentals(status);

-- ============================================================
-- sportsbooks (legacy table, extended)
-- ============================================================
alter table if exists public.sportsbooks add column if not exists owner_id uuid references public.users(id);
alter table if exists public.sportsbooks add column if not exists created_at timestamptz not null default now();
alter table if exists public.sportsbooks add column if not exists updated_at timestamptz not null default now();

-- ============================================================
-- api_keys (partner API access)
-- ============================================================
create table if not exists public.api_keys (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  partner_account_id uuid references public.partner_accounts(id) on delete cascade,
  name text not null,
  slug text,
  key_prefix text not null,
  key_hash text not null,
  scopes jsonb not null default '["read"]'::jsonb,
  rate_limit_per_minute integer not null default 60,
  requests_in_window integer not null default 0,
  window_started_at timestamptz not null default now(),
  last_used_at timestamptz,
  status text not null default 'active' check (status in ('active', 'revoked')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index if not exists idx_api_keys_prefix on public.api_keys(key_prefix);
create index if not exists idx_api_keys_partner on public.api_keys(partner_account_id);

-- ============================================================
-- external_feeds (aggregator source feeds)
-- ============================================================
create table if not exists public.external_feeds (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  partner_account_id uuid references public.partner_accounts(id) on delete cascade,
  name text not null,
  slug text unique not null,
  feed_type text not null check (feed_type in ('csv', 'xml', 'json', 'excel', 'api')),
  url text not null,
  auth_config jsonb not null default '{}'::jsonb,
  schedule text not null default 'daily' check (schedule in ('hourly', 'daily', 'weekly', 'manual')),
  status text not null default 'active' check (status in ('active', 'paused', 'error')),
  last_synced_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_external_feeds_partner on public.external_feeds(partner_account_id);
create index if not exists idx_external_feeds_schedule on public.external_feeds(schedule);

-- ============================================================
-- feed_mappings (field mapping per feed)
-- ============================================================
create table if not exists public.feed_mappings (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  feed_id uuid references public.external_feeds(id) on delete cascade,
  slug text,
  source_field text not null,
  target_field text not null,
  transform jsonb not null default '{}'::jsonb,
  status text not null default 'active' check (status in ('active', 'inactive')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_feed_mappings_feed on public.feed_mappings(feed_id);

-- ============================================================
-- feed_sync_jobs (per-run execution log, supports retry)
-- ============================================================
create table if not exists public.feed_sync_jobs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  feed_id uuid references public.external_feeds(id) on delete cascade,
  slug text,
  status text not null default 'pending' check (status in ('pending', 'running', 'success', 'failed')),
  records_processed integer not null default 0,
  records_created integer not null default 0,
  records_updated integer not null default 0,
  records_failed integer not null default 0,
  retry_count integer not null default 0,
  error_log jsonb not null default '[]'::jsonb,
  started_at timestamptz,
  finished_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_feed_sync_jobs_feed on public.feed_sync_jobs(feed_id);
create index if not exists idx_feed_sync_jobs_status on public.feed_sync_jobs(status);

-- ============================================================
-- api_import_logs (manual CSV/XML/JSON/Excel uploads)
-- ============================================================
create table if not exists public.api_import_logs (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  business_id uuid references public.businesses(id),
  slug text,
  file_name text not null,
  file_type text not null check (file_type in ('csv', 'json', 'xml', 'excel')),
  total_rows integer not null default 0,
  success_count integer not null default 0,
  error_count integer not null default 0,
  duplicate_count integer not null default 0,
  errors jsonb not null default '[]'::jsonb,
  created_ids jsonb not null default '[]'::jsonb,
  status text not null default 'completed' check (status in ('processing', 'completed', 'failed', 'rolled_back')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_api_import_logs_owner on public.api_import_logs(owner_id);

-- ============================================================
-- webhooks (partner subscriptions) + delivery log
-- ============================================================
create table if not exists public.webhooks (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid references public.users(id),
  partner_account_id uuid references public.partner_accounts(id) on delete cascade,
  slug text,
  url text not null,
  events jsonb not null default '[]'::jsonb,
  secret text not null,
  status text not null default 'active' check (status in ('active', 'disabled')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index if not exists idx_webhooks_partner on public.webhooks(partner_account_id);

create table if not exists public.webhook_deliveries (
  id uuid primary key default gen_random_uuid(),
  webhook_id uuid references public.webhooks(id) on delete cascade,
  event_type text not null,
  payload jsonb not null,
  response_status integer,
  status text not null default 'pending' check (status in ('pending', 'delivered', 'failed')),
  created_at timestamptz not null default now()
);
create index if not exists idx_webhook_deliveries_webhook on public.webhook_deliveries(webhook_id);

-- ============================================================
-- Ownership/status escalation guards. RLS's owner_id = auth.uid() check
-- only gates *which rows* an owner can touch, not *which columns* - a
-- business owner (or a write-scoped partner API key, which uses the
-- service-role client and bypasses RLS entirely) could otherwise set
-- their own business straight to status='approved', or reassign
-- owner_id/business_id. These BEFORE UPDATE triggers silently clamp those
-- fields back to their previous value unless the caller is an admin
-- (is_admin() reads public.users.role via auth.uid(), so it is false for
-- both non-admin end users and for service-role/API connections, which
-- carry no authenticated uid - exactly the callers that must not be able
-- to self-approve).
-- ============================================================
create or replace function public.protect_business_status()
returns trigger
language plpgsql
as $$
begin
  if not public.is_admin() then
    if new.status is distinct from old.status then
      new.status := old.status;
    end if;
    if new.owner_id is distinct from old.owner_id then
      new.owner_id := old.owner_id;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_business_status on public.businesses;
create trigger protect_business_status before update on public.businesses
  for each row execute function public.protect_business_status();

create or replace function public.protect_review_status()
returns trigger
language plpgsql
as $$
begin
  if not public.is_admin() and new.status is distinct from old.status then
    new.status := old.status;
  end if;
  return new;
end;
$$;

-- Same class of bug, worse blast radius: users_update_own_or_admin and
-- users_insert_own below only have a USING/WITH CHECK of `id = auth.uid()`
-- - Postgres RLS reuses the same expression for both read and write
-- eligibility when no separate WITH CHECK narrows the *values* being
-- written, so any signed-in user could otherwise run
-- `update users set role='admin' where id=auth.uid()` straight from the
-- browser client and grant themselves full admin access. is_admin() looks
-- up the caller's own current row via auth.uid(), which for a brand new
-- self-signup insert doesn't exist yet and correctly evaluates to false.
create or replace function public.protect_user_role()
returns trigger
language plpgsql
as $$
begin
  if tg_op = 'INSERT' then
    if not public.is_admin() and new.role = 'admin' then
      new.role := 'customer';
    end if;
    if not public.is_admin() and new.status <> 'active' then
      new.status := 'active';
    end if;
  elsif tg_op = 'UPDATE' then
    if not public.is_admin() then
      if new.role is distinct from old.role then
        new.role := old.role;
      end if;
      if new.status is distinct from old.status then
        new.status := old.status;
      end if;
    end if;
  end if;
  return new;
end;
$$;

drop trigger if exists protect_user_role on public.users;
create trigger protect_user_role before insert or update on public.users
  for each row execute function public.protect_user_role();

drop trigger if exists protect_review_status on public.reviews;
create trigger protect_review_status before update on public.reviews
  for each row execute function public.protect_review_status();

-- ============================================================
-- updated_at triggers
-- ============================================================
do $$
declare t text;
begin
  foreach t in array array['users','categories','partner_accounts','businesses','stores',
    'promo_codes','offers','reviews','rentals','sportsbooks','api_keys','external_feeds',
    'feed_mappings','feed_sync_jobs','api_import_logs','webhooks']
  loop
    execute format('drop trigger if exists set_updated_at on public.%I;', t);
    execute format('create trigger set_updated_at before update on public.%I for each row execute function public.set_updated_at();', t);
  end loop;
end $$;

-- ============================================================
-- Row Level Security
-- ============================================================
alter table public.users enable row level security;
alter table public.categories enable row level security;
alter table public.partner_accounts enable row level security;
alter table public.businesses enable row level security;
alter table public.promo_codes enable row level security;
alter table public.offers enable row level security;
alter table public.reviews enable row level security;
alter table public.analytics enable row level security;
alter table public.rentals enable row level security;
alter table public.api_keys enable row level security;
alter table public.external_feeds enable row level security;
alter table public.feed_mappings enable row level security;
alter table public.feed_sync_jobs enable row level security;
alter table public.api_import_logs enable row level security;
alter table public.webhooks enable row level security;
alter table public.webhook_deliveries enable row level security;

-- users
drop policy if exists users_select_own_or_admin on public.users;
create policy users_select_own_or_admin on public.users for select
  using (id = auth.uid() or public.is_admin());
drop policy if exists users_update_own_or_admin on public.users;
create policy users_update_own_or_admin on public.users for update
  using (id = auth.uid() or public.is_admin());
drop policy if exists users_insert_own on public.users;
create policy users_insert_own on public.users for insert
  with check (id = auth.uid());

-- categories: public read, admin write
drop policy if exists categories_public_read on public.categories;
create policy categories_public_read on public.categories for select using (true);
drop policy if exists categories_admin_write on public.categories;
create policy categories_admin_write on public.categories for all
  using (public.is_admin()) with check (public.is_admin());

-- partner_accounts: owner + admin
drop policy if exists partner_accounts_owner on public.partner_accounts;
create policy partner_accounts_owner on public.partner_accounts for all
  using (owner_id = auth.uid() or public.is_admin())
  with check (owner_id = auth.uid() or public.is_admin());

-- businesses: public read approved, owner full access to own, admin full access
drop policy if exists businesses_public_read on public.businesses;
create policy businesses_public_read on public.businesses for select
  using (status = 'approved' or owner_id = auth.uid() or public.is_admin());
drop policy if exists businesses_owner_insert on public.businesses;
create policy businesses_owner_insert on public.businesses for insert
  with check (owner_id = auth.uid() or public.is_admin());
drop policy if exists businesses_owner_update on public.businesses;
create policy businesses_owner_update on public.businesses for update
  using (owner_id = auth.uid() or public.is_admin());
drop policy if exists businesses_owner_delete on public.businesses;
create policy businesses_owner_delete on public.businesses for delete
  using (owner_id = auth.uid() or public.is_admin());

-- promo_codes / offers / reviews / rentals: same owner-or-admin pattern, public read active
drop policy if exists promo_codes_read on public.promo_codes;
create policy promo_codes_read on public.promo_codes for select
  using (status = 'active' or owner_id = auth.uid() or public.is_admin());
drop policy if exists promo_codes_write on public.promo_codes;
create policy promo_codes_write on public.promo_codes for insert with check (owner_id = auth.uid() or public.is_admin());
drop policy if exists promo_codes_update on public.promo_codes;
create policy promo_codes_update on public.promo_codes for update using (owner_id = auth.uid() or public.is_admin());
drop policy if exists promo_codes_delete on public.promo_codes;
create policy promo_codes_delete on public.promo_codes for delete using (owner_id = auth.uid() or public.is_admin());

drop policy if exists offers_read on public.offers;
create policy offers_read on public.offers for select
  using (status = 'active' or owner_id = auth.uid() or public.is_admin());
drop policy if exists offers_write on public.offers;
create policy offers_write on public.offers for insert with check (owner_id = auth.uid() or public.is_admin());
drop policy if exists offers_update on public.offers;
create policy offers_update on public.offers for update using (owner_id = auth.uid() or public.is_admin());
drop policy if exists offers_delete on public.offers;
create policy offers_delete on public.offers for delete using (owner_id = auth.uid() or public.is_admin());

drop policy if exists reviews_read on public.reviews;
create policy reviews_read on public.reviews for select using (status = 'published' or public.is_admin());
drop policy if exists reviews_insert on public.reviews;
create policy reviews_insert on public.reviews for insert with check (owner_id = auth.uid());
drop policy if exists reviews_moderate on public.reviews;
create policy reviews_moderate on public.reviews for update using (owner_id = auth.uid() or public.is_admin());
drop policy if exists reviews_delete on public.reviews;
create policy reviews_delete on public.reviews for delete using (owner_id = auth.uid() or public.is_admin());

drop policy if exists rentals_read on public.rentals;
create policy rentals_read on public.rentals for select using (status = 'active' or owner_id = auth.uid() or public.is_admin());
drop policy if exists rentals_write on public.rentals;
create policy rentals_write on public.rentals for all using (owner_id = auth.uid() or public.is_admin()) with check (owner_id = auth.uid() or public.is_admin());

-- analytics: owner/admin read, anyone insert (public event tracking)
drop policy if exists analytics_insert on public.analytics;
create policy analytics_insert on public.analytics for insert with check (true);
drop policy if exists analytics_read on public.analytics;
create policy analytics_read on public.analytics for select using (owner_id = auth.uid() or public.is_admin());

-- partner-platform tables: owner or admin only, no public access
drop policy if exists api_keys_owner on public.api_keys;
create policy api_keys_owner on public.api_keys for all
  using (owner_id = auth.uid() or public.is_admin()) with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists external_feeds_owner on public.external_feeds;
create policy external_feeds_owner on public.external_feeds for all
  using (owner_id = auth.uid() or public.is_admin()) with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists feed_mappings_owner on public.feed_mappings;
create policy feed_mappings_owner on public.feed_mappings for all
  using (owner_id = auth.uid() or public.is_admin()) with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists feed_sync_jobs_owner on public.feed_sync_jobs;
create policy feed_sync_jobs_owner on public.feed_sync_jobs for all
  using (owner_id = auth.uid() or public.is_admin()) with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists api_import_logs_owner on public.api_import_logs;
create policy api_import_logs_owner on public.api_import_logs for all
  using (owner_id = auth.uid() or public.is_admin()) with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists webhooks_owner on public.webhooks;
create policy webhooks_owner on public.webhooks for all
  using (owner_id = auth.uid() or public.is_admin()) with check (owner_id = auth.uid() or public.is_admin());

drop policy if exists webhook_deliveries_owner on public.webhook_deliveries;
create policy webhook_deliveries_owner on public.webhook_deliveries for select
  using (exists (select 1 from public.webhooks w where w.id = webhook_id and (w.owner_id = auth.uid() or public.is_admin())));

-- ============================================================
-- Legacy tables kept from the original MVP (unchanged behavior)
-- ============================================================
create table if not exists public.coupons (
  id serial primary key,
  store_id integer references public.stores(id),
  code text,
  discount text,
  description text,
  expiration date,
  status text default 'verified',
  clicks integer default 0
);

create table if not exists public.event_categories (
  id serial primary key,
  slug text unique not null,
  label text not null,
  icon text,
  category_group text not null check (category_group in ('sports', 'concerts'))
);

create table if not exists public.leagues (
  id serial primary key,
  slug text unique not null,
  name text not null,
  sport text,
  category text references public.event_categories(slug),
  website text
);

create table if not exists public.teams (
  id serial primary key,
  slug text unique not null,
  name text not null,
  league_id integer references public.leagues(id),
  city text,
  website text
);

create table if not exists public.ticket_providers (
  id serial primary key,
  slug text unique not null,
  name text not null,
  website text,
  affiliate_env_var text
);

create table if not exists public.events (
  id text primary key,
  slug text unique not null,
  name text not null,
  category text not null references public.event_categories(slug),
  league_id integer references public.leagues(id),
  artist text,
  venue text not null,
  city text not null,
  state_or_country text,
  event_date date not null,
  event_time time,
  description text,
  price_range text,
  featured boolean default false,
  trending boolean default false
);

create table if not exists public.event_teams (
  event_id text references public.events(id),
  team_id integer references public.teams(id),
  primary key (event_id, team_id)
);

create table if not exists public.event_providers (
  event_id text references public.events(id),
  provider_id integer references public.ticket_providers(id),
  primary key (event_id, provider_id)
);

create table if not exists public.event_analytics (
  id serial primary key,
  event_id text references public.events(id),
  metric text not null check (metric in ('view', 'ticket_click', 'provider_click')),
  provider_id integer references public.ticket_providers(id),
  created_at timestamptz default now()
);
