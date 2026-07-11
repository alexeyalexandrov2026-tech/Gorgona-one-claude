// Browser-side Supabase client. Returns null when env vars are not yet
// configured so pages can render a graceful "not connected" state instead
// of crashing - this app must keep building and running before a real
// Supabase project is provisioned.
import { createClient } from '@supabase/supabase-js';

let cachedClient;

export function isSupabaseConfigured() {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
}

export function getSupabaseClient() {
  if (!isSupabaseConfigured()) return null;
  if (cachedClient) return cachedClient;
  cachedClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } }
  );
  return cachedClient;
}
