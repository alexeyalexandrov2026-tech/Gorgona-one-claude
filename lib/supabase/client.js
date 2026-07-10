'use client';

import { createBrowserClient } from '@supabase/ssr';
import { supabaseUrl, supabaseAnonKey, hasSupabaseEnv } from './env';

let browserClient;

export function getSupabaseBrowserClient() {
  if (!hasSupabaseEnv()) {
    return null;
  }
  if (!browserClient) {
    browserClient = createBrowserClient(supabaseUrl, supabaseAnonKey);
  }
  return browserClient;
}
