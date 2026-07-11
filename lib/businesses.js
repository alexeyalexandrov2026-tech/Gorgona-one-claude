// Server-side read helpers for the public business directory. Uses the
// anon Supabase client - RLS already restricts results to status='approved'
// for anonymous callers, so no service key is needed here. Every function
// degrades to an empty result set (configured: false) when Supabase env
// vars are not set yet, so the directory renders a clear "not connected"
// state instead of crashing.
import { getSupabaseClient, isSupabaseConfigured } from './supabaseClient';

const PAGE_SIZE_DEFAULT = 12;

export async function listCategories() {
  const supabase = getSupabaseClient();
  if (!supabase) return { items: [], configured: false };
  const { data, error } = await supabase
    .from('categories')
    .select('id,name,slug,icon,description')
    .eq('status', 'active')
    .order('name', { ascending: true });
  if (error) return { items: [], configured: true, error: error.message };
  return { items: data || [], configured: true };
}

export async function listBusinesses({ search = '', category = '', city = '', sort = 'newest', page = 1, pageSize = PAGE_SIZE_DEFAULT } = {}) {
  const supabase = getSupabaseClient();
  if (!supabase) return { items: [], total: 0, page, pageSize, configured: false };

  let query = supabase.from('businesses').select('id,name,slug,description,logo_url,banner_url,city,state,country,category_id,featured,created_at,categories(name,slug)', { count: 'exact' }).eq('status', 'approved');

  if (search) {
    query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%,city.ilike.%${search}%`);
  }
  if (category) {
    const { data: cat } = await supabase.from('categories').select('id').eq('slug', category).maybeSingle();
    if (cat) query = query.eq('category_id', cat.id);
  }
  if (city) {
    query = query.ilike('city', `%${city}%`);
  }

  if (sort === 'name') query = query.order('name', { ascending: true });
  else if (sort === 'featured') query = query.order('featured', { ascending: false }).order('created_at', { ascending: false });
  else query = query.order('created_at', { ascending: false });

  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  query = query.range(from, to);

  const { data, error, count } = await query;
  if (error) return { items: [], total: 0, page, pageSize, configured: true, error: error.message };
  return { items: data || [], total: count || 0, page, pageSize, configured: true };
}

export async function getBusinessBySlug(slug) {
  const supabase = getSupabaseClient();
  if (!supabase) return { business: null, configured: false };
  const { data, error } = await supabase
    .from('businesses')
    .select('*,categories(name,slug),promo_codes(id,code,discount,description,status,expires_at),offers(id,title,description,price,discount_percent,image_url,status),reviews(id,rating,comment,status,created_at)')
    .eq('slug', slug)
    .eq('status', 'approved')
    .maybeSingle();
  if (error) return { business: null, configured: true, error: error.message };
  return { business: data, configured: true };
}

export { isSupabaseConfigured };
