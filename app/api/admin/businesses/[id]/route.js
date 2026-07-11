// Admin-only business mutation route. Exists so status changes and
// deletes performed from /admin dispatch webhooks (business.updated /
// business.deleted) - direct browser Supabase client writes (used
// elsewhere in the dashboard/admin UI) can't call dispatchWebhookEvent
// since that requires the service-role client, which must never reach
// the browser.
import { getSupabaseAdmin } from '../../../../../lib/supabaseServer';
import { dispatchWebhookEvent } from '../../../../../lib/webhooks';

async function requireAdmin(request, admin) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return null;
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data?.user) return null;
  const { data: profile } = await admin.from('users').select('role').eq('id', data.user.id).maybeSingle();
  if (profile?.role !== 'admin') return null;
  return data.user;
}

const ALLOWED_STATUSES = ['pending', 'approved', 'rejected', 'suspended'];

export async function PUT(request, { params }) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });
  const user = await requireAdmin(request, admin);
  if (!user) return Response.json({ error: 'Admin access required.' }, { status: 403 });

  const body = await request.json().catch(() => ({}));
  if (!ALLOWED_STATUSES.includes(body.status)) {
    return Response.json({ error: `status must be one of ${ALLOWED_STATUSES.join(', ')}` }, { status: 422 });
  }

  const { data, error } = await admin.from('businesses').update({ status: body.status }).eq('id', params.id).select().single();
  if (error) return Response.json({ error: error.message }, { status: 400 });

  await dispatchWebhookEvent('business.updated', data);
  return Response.json({ data });
}

export async function DELETE(request, { params }) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });
  const user = await requireAdmin(request, admin);
  if (!user) return Response.json({ error: 'Admin access required.' }, { status: 403 });

  const { error } = await admin.from('businesses').delete().eq('id', params.id);
  if (error) return Response.json({ error: error.message }, { status: 400 });

  await dispatchWebhookEvent('business.deleted', { id: params.id });
  return Response.json({ success: true });
}
