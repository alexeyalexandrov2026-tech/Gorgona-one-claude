// Browser-side Supabase client. Returns null when env vars are not yet
// configured so pages can render a graceful "not connected" state instead
// of crashing - this app must keep building and running before a real
// Supabase project is provisioned.
import { createClient } from '@supabase/supabase-js';

let cachedClient;
let loggedConfigState = false;

export function isSupabaseConfigured() {
  const hasUrl = Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL);
  const hasKey = Boolean(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY);
  // Temporary diagnostic: proves in the browser console, on the actual
  // deployed bundle, whether these two NEXT_PUBLIC_* vars were present
  // when `next build` ran (that's the only time they can be inlined -
  // this check runs client-side, so it can only ever see what got baked
  // in, never the live Cloudflare Worker's runtime env). Remove once the
  // deployment is confirmed working.
  if (typeof window !== 'undefined' && !loggedConfigState) {
    loggedConfigState = true;
    // eslint-disable-next-line no-console
    console.warn('[gorgona-debug] Supabase client env at build time:', { NEXT_PUBLIC_SUPABASE_URL: hasUrl, NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: hasKey });
  }
  return hasUrl && hasKey;
}

export function getSupabaseClient() {
  if (!isSupabaseConfigured()) return null;
  if (cachedClient) return cachedClient;
  cachedClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY,
    { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
  );
  return cachedClient;
}
