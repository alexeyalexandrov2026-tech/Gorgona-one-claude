// Best-effort analytics event recording (view/click/conversion/search/promo_click).
// Never throws - a failed analytics insert must not break the page it's
// attached to. Works both server-side (business detail page view) and
// client-side (website click, promo code copy) since it's just a REST
// call through supabase-js, not a literal browser API.
import { getSupabaseClient } from './supabaseClient';

export async function trackEvent(metric, businessId, metadata = {}) {
  const supabase = getSupabaseClient();
  if (!supabase) return;
  if (!businessId && metric !== 'search') return;
  try {
    await supabase.from('analytics').insert({ business_id: businessId || null, metric, metadata });
  } catch {
    // ignore - analytics must never break the user-facing flow
  }
}
