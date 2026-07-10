import { createClient } from '@supabase/supabase-js';
import { supabaseUrl, supabaseAnonKey, hasSupabaseEnv } from './env';

let publicClient;

export function getSupabasePublicClient() {
  if (!hasSupabaseEnv()) {
    return null;
  }
  if (!publicClient) {
    publicClient = createClient(supabaseUrl, supabaseAnonKey, { auth: { persistSession: false } });
  }
  return publicClient;
}
