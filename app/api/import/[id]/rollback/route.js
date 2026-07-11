import { getSupabaseAdmin } from '../../../../../lib/supabaseServer';

async function getCallerUser(request, admin) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return null;
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}

export async function POST(request, { params }) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });
  const user = await getCallerUser(request, admin);
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { data: log } = await admin.from('api_import_logs').select('*').eq('id', params.id).maybeSingle();
  if (!log) return Response.json({ error: 'Import log not found' }, { status: 404 });
  if (log.owner_id !== user.id) return Response.json({ error: 'Forbidden' }, { status: 403 });
  if (log.status === 'rolled_back') return Response.json({ error: 'Already rolled back' }, { status: 409 });

  const ids = log.created_ids || [];
  if (ids.length > 0) {
    await admin.from('businesses').delete().in('id', ids);
  }
  const { data, error } = await admin.from('api_import_logs').update({ status: 'rolled_back' }).eq('id', params.id).select().single();
  if (error) return Response.json({ error: error.message }, { status: 500 });

  return Response.json({ data });
}
