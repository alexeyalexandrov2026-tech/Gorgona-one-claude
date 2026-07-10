import { getSupabaseServerClient } from './supabase/server';
import { getSupabaseAdminClient } from './supabase/admin';

export async function getAdminSession() {
  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return { session: null, isAdmin: false };
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    return { session: null, isAdmin: false };
  }

  const adminClient = getSupabaseAdminClient();
  if (!adminClient) {
    return { session, isAdmin: false };
  }

  const { data } = await adminClient.from('users').select('role').eq('id', session.user.id).maybeSingle();

  return { session, isAdmin: data?.role === 'admin' };
}
