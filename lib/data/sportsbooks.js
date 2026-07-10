import { getSupabasePublicClient } from '../supabase/public';
import { sportsbooks as fallbackSportsbooks } from '../mockData';

export async function getSportsbooks() {
  const supabase = getSupabasePublicClient();
  if (supabase) {
    const { data, error } = await supabase.from('sportsbooks').select('*').order('id');
    if (!error && data && data.length > 0) {
      return data;
    }
  }
  return fallbackSportsbooks;
}

export async function getSportsbookBySlug(slug) {
  const sportsbooks = await getSportsbooks();
  return sportsbooks.find((book) => book.slug === slug);
}
