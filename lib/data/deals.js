import { getSupabasePublicClient } from '../supabase/public';
import { categories as fallbackCategories, allDeals as fallbackAllDeals } from '../dealsData';

function mapDealRow(row) {
  return {
    id: row.id,
    name: row.name,
    slug: row.slug,
    category: row.category,
    logo: row.logo,
    image: row.image,
    description: row.description,
    promoCode: row.promo_code || '',
    discount: row.discount,
    expirationDate: row.expiration_date,
    affiliateLink: row.affiliate_link,
    website: row.website,
    featured: row.featured
  };
}

export async function getCategories() {
  const supabase = getSupabasePublicClient();
  if (supabase) {
    const { data, error } = await supabase.from('deal_categories').select('*').order('id');
    if (!error && data && data.length > 0) {
      return data.map((row) => ({ slug: row.slug, label: row.label, icon: row.icon, description: row.description }));
    }
  }
  return fallbackCategories;
}

export async function getAllDeals() {
  const supabase = getSupabasePublicClient();
  if (supabase) {
    const { data, error } = await supabase.from('deals').select('*').order('id');
    if (!error && data && data.length > 0) {
      return data.map(mapDealRow);
    }
  }
  return fallbackAllDeals;
}

export async function getFeaturedDeals() {
  const deals = await getAllDeals();
  return deals.filter((deal) => deal.featured);
}

export async function getDealsByCategory(categorySlug) {
  const deals = await getAllDeals();
  return deals.filter((deal) => deal.category === categorySlug);
}

export async function getDealBySlug(slug) {
  const deals = await getAllDeals();
  return deals.find((deal) => deal.slug === slug);
}
