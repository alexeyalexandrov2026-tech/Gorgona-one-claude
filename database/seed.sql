-- Optional seed data. Run after schema.sql to pre-populate the category
-- list so the business directory, dashboard, and admin panel aren't empty
-- on a fresh project. Safe to re-run (on conflict do nothing).
insert into public.categories (name, slug, icon, description) values
  ('Shopping', 'shopping', '🛍️', 'Everyday essentials and premium retail savings.'),
  ('Fashion', 'fashion', '👗', 'Style, apparel, footwear, and fashion retailer discounts.'),
  ('Electronics', 'electronics', '💻', 'Devices, accessories, and gaming tech offers.'),
  ('Beauty', 'beauty', '💄', 'Skincare, cosmetics, and wellness deals.'),
  ('Home', 'home', '🏡', 'Furniture, decor, and home improvement savings.'),
  ('Travel', 'travel', '✈️', 'Hotels, flights, car rentals, and vacation offers.'),
  ('Sport', 'sport', '⚽', 'Fitness brands, equipment, and athletic wear discounts.'),
  ('Betting', 'betting', '🎯', 'Sportsbook promos and betting-related offers.'),
  ('Restaurants', 'restaurants', '🍽️', 'Fast food, cafes, and restaurant reward deals.'),
  ('Food', 'food', '🛒', 'Food delivery, grocery, and subscription savings.'),
  ('Entertainment', 'entertainment', '🎬', 'Streaming, events, cinemas, and gaming deals.'),
  ('Kosher Restaurants', 'kosher-restaurants', '🕎', 'Certified kosher dining, catering, and delivery.'),
  ('Kosher Stores', 'kosher-stores', '🥖', 'Kosher grocers, butchers, and specialty markets.'),
  ('Car Rentals', 'car-rentals', '🚗', 'Premium and everyday vehicle rentals.'),
  ('Yacht Rentals', 'yacht-rentals', '🛥️', 'Private yacht charters and luxury boats.'),
  ('Vacation Rentals', 'vacation-rentals', '🏖️', 'Villas, penthouses, and waterfront homes.'),
  ('Experiences', 'experiences', '🎉', 'Curated activities, tours, and premium experiences.'),
  ('Nightlife', 'nightlife', '🍸', 'Clubs, lounges, and rooftop nightlife venues.')
on conflict (slug) do nothing;
