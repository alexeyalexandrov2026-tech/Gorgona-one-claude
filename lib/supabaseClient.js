import { createClient } from '@supabase/supabase-js';

// The Supabase project URL and the publishable (anon) key are public by
// design - they are shipped in the browser bundle and protected by
// Row Level Security. They are committed as defaults so the client works
// out of the box, and can be overridden via environment variables.
const DEFAULT_SUPABASE_URL = 'https://uxhoxrtzqvomwmilqvbt.supabase.co';
const DEFAULT_SUPABASE_ANON_KEY = 'sb_publishable_QrtwENgLyUfzoFXKsM_bUg_8ZWi7fw6';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || DEFAULT_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || DEFAULT_SUPABASE_ANON_KEY;

let browserClient = null;

export function isSupabaseConfigured() {
  return Boolean(supabaseUrl && supabaseAnonKey);
}

export function getSupabaseBrowserClient() {
  if (!isSupabaseConfigured()) {
    return null;
  }
  if (!browserClient) {
    browserClient = createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true
      }
    });
  }
  return browserClient;
}
