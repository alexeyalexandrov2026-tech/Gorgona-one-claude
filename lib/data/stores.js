import { getSupabasePublicClient } from '../supabase/public';
import { stores as fallbackStores, coupons as fallbackCoupons } from '../mockData';

export async function getStores() {
  const supabase = getSupabasePublicClient();
  if (supabase) {
    const { data, error } = await supabase.from('stores').select('*').order('id');
    if (!error && data && data.length > 0) {
      return data;
    }
  }
  return fallbackStores;
}

export async function getStoreBySlug(slug) {
  const stores = await getStores();
  return stores.find((store) => store.slug === slug);
}

export async function getCoupons() {
  const supabase = getSupabasePublicClient();
  if (supabase) {
    const { data, error } = await supabase.from('coupons').select('*, stores(name)').order('id');
    if (!error && data && data.length > 0) {
      return data.map((row) => ({ ...row, store_name: row.stores?.name }));
    }
  }
  return fallbackCoupons;
}

export async function getCouponsByStoreName(storeName) {
  const coupons = await getCoupons();
  return coupons.filter((coupon) => coupon.store_name === storeName);
}
