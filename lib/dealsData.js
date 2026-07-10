const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const brandsByCategory = {
  shopping: [
    { name: 'Amazon', domain: 'amazon.com', discount: 'Up to 40% off', promoCode: '', featured: true },
    { name: 'Walmart', domain: 'walmart.com', discount: 'Extra savings', promoCode: '', featured: true },
    { name: 'Target', domain: 'target.com', discount: 'Free shipping', promoCode: 'SAVE10', featured: false },
    { name: 'Costco', domain: 'costco.com', discount: 'Member-only deals', promoCode: '', featured: false },
    { name: 'Best Buy', domain: 'bestbuy.com', discount: 'Limited-time offer', promoCode: '', featured: false },
    { name: 'Newegg', domain: 'newegg.com', discount: 'Flash sale', promoCode: 'TECH15', featured: false },
    { name: 'Macy’s', domain: 'macys.com', discount: 'Seasonal discounts', promoCode: '', featured: false },
    { name: 'Nordstrom', domain: 'nordstrom.com', discount: 'Gift with purchase', promoCode: 'STYLE20', featured: false },
    { name: 'Etsy', domain: 'etsy.com', discount: 'Crafted savings', promoCode: 'HANDMADE', featured: false },
    { name: 'Shopify', domain: 'shopify.com', discount: 'Store launch deals', promoCode: '', featured: false }
  ],
  fashion: [
    { name: 'Nike', domain: 'nike.com', discount: '25% off', promoCode: 'NIKE25', featured: true },
    { name: 'Adidas', domain: 'adidas.com', discount: '20% off', promoCode: 'ADI20', featured: true },
    { name: 'Zara', domain: 'zara.com', discount: 'Free express shipping', promoCode: '', featured: false },
    { name: 'H&M', domain: 'hm.com', discount: 'Buy 2 save 15%', promoCode: 'HM15', featured: false },
    { name: 'Shein', domain: 'shein.com', discount: 'New customer offer', promoCode: 'SHEIN10', featured: false },
    { name: 'ASOS', domain: 'asos.com', discount: 'Student discount', promoCode: 'ASOS15', featured: false },
    { name: 'Levi’s', domain: 'levi.com', discount: 'Sitewide savings', promoCode: '', featured: false },
    { name: 'Puma', domain: 'puma.com', discount: 'Sport style offers', promoCode: 'PUMA10', featured: false },
    { name: 'Uniqlo', domain: 'uniqlo.com', discount: 'Limited seasonal drop', promoCode: '', featured: false },
    { name: 'Gap', domain: 'gap.com', discount: 'App-only coupons', promoCode: 'GAP10', featured: false }
  ],
  electronics: [
    { name: 'Apple', domain: 'apple.com', discount: 'Trade-in bonus', promoCode: '', featured: true },
    { name: 'Samsung', domain: 'samsung.com', discount: 'Up to 20% off', promoCode: '', featured: true },
    { name: 'Dell', domain: 'dell.com', discount: 'Student bundles', promoCode: 'DELL10', featured: false },
    { name: 'Lenovo', domain: 'lenovo.com', discount: 'Premium laptop deals', promoCode: '', featured: false },
    { name: 'HP', domain: 'hp.com', discount: 'Printer savings', promoCode: 'HPPRINT', featured: false },
    { name: 'Sony', domain: 'sony.com', discount: 'Home audio offers', promoCode: '', featured: false },
    { name: 'Logitech', domain: 'logitech.com', discount: 'Accessory bundles', promoCode: 'LOGI15', featured: false },
    { name: 'Bose', domain: 'bose.com', discount: 'Sound bundle deals', promoCode: '', featured: false },
    { name: 'Razer', domain: 'razer.com', discount: 'Gaming gear promo', promoCode: 'RAZER10', featured: false },
    { name: 'Microsoft', domain: 'microsoft.com', discount: 'Surface savings', promoCode: 'MICROSOFT', featured: false }
  ],
  beauty: [
    { name: 'Sephora', domain: 'sephora.com', discount: 'Free sample bundle', promoCode: '', featured: true },
    { name: 'Ulta Beauty', domain: 'ulta.com', discount: 'Buy 2 get 1 free', promoCode: 'ULTA15', featured: true },
    { name: 'MAC Cosmetics', domain: 'maccosmetics.com', discount: 'VIP beauty bundles', promoCode: '', featured: false },
    { name: 'Clinique', domain: 'clinique.com', discount: 'Skincare starter set', promoCode: 'CLINIQUE', featured: false },
    { name: 'Estée Lauder', domain: 'esteelauder.com', discount: 'Gift with purchase', promoCode: '', featured: false },
    { name: 'L’Oréal', domain: 'loreal.com', discount: 'Color care offers', promoCode: 'LOREAL10', featured: false },
    { name: 'NYX', domain: 'nyxcosmetics.com', discount: 'Makeup bundle deals', promoCode: '', featured: false },
    { name: 'The Ordinary', domain: 'theordinary.com', discount: 'Skincare essentials', promoCode: 'ORDINARY10', featured: false },
    { name: 'Glossier', domain: 'glossier.com', discount: 'Accessorize and save', promoCode: 'GLOSSIER', featured: false },
    { name: 'Bumble and bumble', domain: 'bumbleandbumble.com', discount: 'Styling savings', promoCode: '', featured: false }
  ],
  home: [
    { name: 'IKEA', domain: 'ikea.com', discount: 'Home refresh offers', promoCode: '', featured: true },
    { name: 'Wayfair', domain: 'wayfair.com', discount: 'Free shipping', promoCode: 'WAYFAIR', featured: true },
    { name: 'Home Depot', domain: 'homedepot.com', discount: 'Free delivery', promoCode: '', featured: false },
    { name: 'Lowe’s', domain: 'lowes.com', discount: 'Spring project savings', promoCode: 'LOWES10', featured: false },
    { name: 'Ashley Furniture', domain: 'ashleyfurniture.com', discount: 'Furniture bundle offer', promoCode: '', featured: false },
    { name: 'West Elm', domain: 'westelm.com', discount: 'Home decor discounts', promoCode: 'WESTELM', featured: false },
    { name: 'Crate & Barrel', domain: 'crateandbarrel.com', discount: 'Designer home offers', promoCode: '', featured: false },
    { name: 'Pottery Barn', domain: 'potterybarn.com', discount: 'Holiday decor savings', promoCode: 'POTTERY15', featured: false },
    { name: 'CB2', domain: 'cb2.com', discount: 'Modern home deals', promoCode: '', featured: false },
    { name: 'Allmodern', domain: 'allmodern.com', discount: 'Smart home savings', promoCode: 'MODERN10', featured: false }
  ],
  travel: [
    { name: 'Booking.com', domain: 'booking.com', discount: 'Up to 25% off', promoCode: '', featured: true },
    { name: 'Expedia', domain: 'expedia.com', discount: 'Vacation package bonuses', promoCode: 'TRAVEL15', featured: true },
    { name: 'Airbnb', domain: 'airbnb.com', discount: 'Stay longer discounts', promoCode: '', featured: false },
    { name: 'Delta Air Lines', domain: 'delta.com', discount: 'Flexible fare offers', promoCode: 'DELTA10', featured: false },
    { name: 'United Airlines', domain: 'united.com', discount: 'Seat upgrade offers', promoCode: '', featured: false },
    { name: 'Hilton', domain: 'hilton.com', discount: 'Free breakfast', promoCode: 'HILTON', featured: false },
    { name: 'Marriott', domain: 'marriott.com', discount: 'Weekend getaway deals', promoCode: '', featured: false },
    { name: 'Rentalcars', domain: 'rentalcars.com', discount: 'Car rental savings', promoCode: 'CAR10', featured: false },
    { name: 'Kayak', domain: 'kayak.com', discount: 'Flight fare alerts', promoCode: '', featured: false },
    { name: 'Viator', domain: 'viator.com', discount: 'Tours and attraction deals', promoCode: 'VIATOR', featured: false }
  ],
  sport: [
    { name: 'Nike', domain: 'nike.com', discount: 'Athlete essentials', promoCode: 'SPORT25', featured: true },
    { name: 'Adidas', domain: 'adidas.com', discount: 'Training gear promo', promoCode: 'ADIDAS15', featured: true },
    { name: 'Dick’s Sporting Goods', domain: 'dickssportinggoods.com', discount: 'Equipment bundles', promoCode: 'DICKS10', featured: false },
    { name: 'Reebok', domain: 'reebok.com', discount: 'Sport style offers', promoCode: 'REEBOK', featured: false },
    { name: 'Under Armour', domain: 'underarmour.com', discount: 'Performance wear deals', promoCode: 'UA15', featured: false },
    { name: 'New Balance', domain: 'newbalance.com', discount: 'Running shoe offers', promoCode: '', featured: false },
    { name: 'Decathlon', domain: 'decathlon.com', discount: 'Outdoor adventure savings', promoCode: 'DECATHLON', featured: false },
    { name: 'Fitbit', domain: 'fitbit.com', discount: 'Wellness device offers', promoCode: '', featured: false },
    { name: 'Peloton', domain: 'onepeloton.com', discount: 'Fitness bundle deal', promoCode: 'PELOTON', featured: false },
    { name: 'Lululemon', domain: 'lululemon.com', discount: 'Activewear member perks', promoCode: '', featured: false }
  ],
  betting: [
    { name: 'Bet365', domain: 'bet365.com', discount: 'Bonus terms vary', promoCode: '', featured: true },
    { name: 'DraftKings', domain: 'draftkings.com', discount: 'Promotions by state', promoCode: '', featured: true },
    { name: 'FanDuel', domain: 'fanduel.com', discount: 'Promos available', promoCode: '', featured: false },
    { name: 'BetMGM', domain: 'betmgm.com', discount: 'Loyalty offers', promoCode: '', featured: false },
    { name: 'Caesars Sportsbook', domain: 'caesars.com', discount: 'Rewards-based promos', promoCode: '', featured: false },
    { name: 'Fanatics Sportsbook', domain: 'fanatics.com', discount: 'New customer offers', promoCode: '', featured: false },
    { name: 'Betrivers', domain: 'betrivers.com', discount: 'Sportsbook offers', promoCode: '', featured: false },
    { name: 'ESPN BET', domain: 'espnbet.com', discount: 'New user promos', promoCode: '', featured: false },
    { name: 'Hard Rock Bet', domain: 'hardrockbet.com', discount: 'Local promotions', promoCode: '', featured: false },
    { name: 'Bally Bet', domain: 'ballybet.com', discount: 'Market-specific offers', promoCode: '', featured: false }
  ],
  restaurants: [
    { name: 'McDonald’s', domain: 'mcdonalds.com', discount: 'Limited-time app offer', promoCode: 'MCDONALDS', featured: true },
    { name: 'Starbucks', domain: 'starbucks.com', discount: 'Free drink reward', promoCode: 'STARBUCKS', featured: true },
    { name: 'Domino’s', domain: 'dominos.com', discount: 'Carryout deal', promoCode: 'PIZZA20', featured: false },
    { name: 'Pizza Hut', domain: 'pizzahut.com', discount: 'Family meal savings', promoCode: 'PIZZA10', featured: false },
    { name: 'Chipotle', domain: 'chipotle.com', discount: 'Burrito rewards', promoCode: 'CHIP10', featured: false },
    { name: 'Subway', domain: 'subway.com', discount: 'Footlong savings', promoCode: 'SUBWAY', featured: false },
    { name: 'Taco Bell', domain: 'tacobell.com', discount: 'Combo meal deals', promoCode: 'TBELL', featured: false },
    { name: 'Panera Bread', domain: 'panerabread.com', discount: 'Coffee + pastry offer', promoCode: 'PANERA', featured: false },
    { name: 'Shake Shack', domain: 'shakeshack.com', discount: 'Loyalty reward', promoCode: '', featured: false },
    { name: 'Olive Garden', domain: 'olivegarden.com', discount: 'Dinner specials', promoCode: 'OLIVE15', featured: false }
  ],
  food: [
    { name: 'Uber Eats', domain: 'ubereats.com', discount: 'Free delivery', promoCode: 'EATSFREE', featured: true },
    { name: 'DoorDash', domain: 'doordash.com', discount: 'New customer perk', promoCode: 'DASH10', featured: true },
    { name: 'Instacart', domain: 'instacart.com', discount: 'Savings on groceries', promoCode: 'INSTACART', featured: false },
    { name: 'Whole Foods', domain: 'wholefoodsmarket.com', discount: 'Weekly member deals', promoCode: '', featured: false },
    { name: 'Trader Joe’s', domain: 'traderjoes.com', discount: 'Curated pantry savings', promoCode: '', featured: false },
    { name: 'Kroger', domain: 'kroger.com', discount: 'Digital coupons', promoCode: 'KROGER', featured: false },
    { name: 'Safeway', domain: 'safeway.com', discount: 'Grocery loyalty offers', promoCode: '', featured: false },
    { name: 'Walmart Grocery', domain: 'walmart.com', discount: 'Pickup discounts', promoCode: 'GROCERY', featured: false },
    { name: 'HelloFresh', domain: 'hellofresh.com', discount: 'Meal kit savings', promoCode: 'FOOD15', featured: false },
    { name: 'Blue Apron', domain: 'blueapron.com', discount: 'Subscription starter deal', promoCode: '', featured: false }
  ],
  entertainment: [
    { name: 'Netflix', domain: 'netflix.com', discount: 'Limited-time membership offer', promoCode: '', featured: true },
    { name: 'Disney+', domain: 'disneyplus.com', discount: 'Annual plan savings', promoCode: 'DISNEY', featured: true },
    { name: 'Spotify', domain: 'spotify.com', discount: 'Premium student deal', promoCode: 'SPOTIFY', featured: false },
    { name: 'AMC Theatres', domain: 'amctheatres.com', discount: 'Movie night promo', promoCode: 'AMC10', featured: false },
    { name: 'Cineworld', domain: 'cineworld.com', discount: 'Midweek ticket savings', promoCode: '', featured: false },
    { name: 'Eventbrite', domain: 'eventbrite.com', discount: 'Event discovery offers', promoCode: 'EVENT15', featured: false },
    { name: 'Live Nation', domain: 'livenation.com', discount: 'Concert pre-sale access', promoCode: 'LIVE10', featured: false },
    { name: 'Steam', domain: 'store.steampowered.com', discount: 'Game launch discounts', promoCode: 'STEAM20', featured: false },
    { name: 'Epic Games', domain: 'store.epicgames.com', discount: 'Free game rotations', promoCode: '', featured: false },
    { name: 'Airbnb Experiences', domain: 'airbnb.com', discount: 'Local experiences savings', promoCode: 'EXPLORE', featured: false }
  ]
};

const categoryMeta = [
  { slug: 'shopping', label: 'Shopping', icon: '🛍️', description: 'Everyday essentials and premium retail savings.' },
  { slug: 'fashion', label: 'Fashion', icon: '👗', description: 'Style, apparel, footwear, and fashion retailer discounts.' },
  { slug: 'electronics', label: 'Electronics', icon: '💻', description: 'Devices, accessories, and gaming tech offers.' },
  { slug: 'beauty', label: 'Beauty', icon: '💄', description: 'Skincare, cosmetics, and wellness deals.' },
  { slug: 'home', label: 'Home', icon: '🏡', description: 'Furniture, decor, and home improvement savings.' },
  { slug: 'travel', label: 'Travel', icon: '✈️', description: 'Hotels, flights, car rentals, and vacation offers.' },
  { slug: 'sport', label: 'Sport', icon: '🏅', description: 'Fitness brands, equipment, and athletic wear discounts.' },
  { slug: 'betting', label: 'Betting', icon: '🎯', description: 'Sportsbook promos and betting-related offers.' },
  { slug: 'restaurants', label: 'Restaurants', icon: '🍽️', description: 'Fast food, cafes, and restaurant reward deals.' },
  { slug: 'food', label: 'Food', icon: '🛒', description: 'Food delivery, grocery, and subscription savings.' },
  { slug: 'entertainment', label: 'Entertainment', icon: '🎬', description: 'Streaming, events, cinemas, and gaming deals.' }
];

const buildDeals = () => {
  const deals = [];
  Object.entries(brandsByCategory).forEach(([category, brands]) => {
    brands.forEach((brand, index) => {
      const slug = slugify(`${brand.name}-${category}`);
      deals.push({
        id: `${category}-${index + 1}`,
        name: brand.name,
        slug,
        category,
        logo: `/images/brands/${slug}.svg`,
        image: `/images/brands/${slug}.svg`,
        description: `${brand.name} offers premium savings across ${category} with verified deals and optimized affiliate-ready links.`,
        promoCode: brand.promoCode || '',
        discount: brand.discount,
        expirationDate: '2026-12-31',
        affiliateLink: `https://www.example.com/affiliate/${slug}`,
        website: `https://${brand.domain}`,
        featured: brand.featured
      });
    });
  });
  return deals;
};

export const categories = categoryMeta;
export const allDeals = buildDeals();
export const featuredDeals = allDeals.filter((deal) => deal.featured);

export function getDealsByCategory(categorySlug) {
  return allDeals.filter((deal) => deal.category === categorySlug);
}

export function getDealBySlug(slug) {
  return allDeals.find((deal) => deal.slug === slug);
}
