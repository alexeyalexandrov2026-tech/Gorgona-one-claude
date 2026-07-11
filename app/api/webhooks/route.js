import { randomBytes } from 'crypto';
import { getSupabaseAdmin } from '../../../lib/supabaseServer';

const VALID_EVENTS = ['business.created', 'business.updated', 'business.deleted', 'offer.created', 'promo.created'];

async function getCallerUser(request, admin) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return null;
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}

export async function GET(request) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });
  const user = await getCallerUser(request, admin);
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { data, error } = await admin.from('webhooks').select('id,url,events,status,created_at').eq('owner_id', user.id);
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ data });
}

export async function POST(request) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });
  const user = await getCallerUser(request, admin);
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  if (!body.url) return Response.json({ error: 'url is required' }, { status: 422 });
  const events = Array.isArray(body.events) ? body.events.filter((e) => VALID_EVENTS.includes(e)) : VALID_EVENTS;

  const { data: partnerAccount } = await admin.from('partner_accounts').select('id').eq('owner_id', user.id).maybeSingle();
  const secret = randomBytes(24).toString('hex');

  const { data, error } = await admin.from('webhooks').insert({
    owner_id: user.id,
    partner_account_id: partnerAccount?.id || null,
    url: body.url,
    events,
    secret
  }).select('id,url,events,status,created_at').single();
  if (error) return Response.json({ error: error.message }, { status: 400 });

  return Response.json({ data: { ...data, secret } }, { status: 201 });
}
