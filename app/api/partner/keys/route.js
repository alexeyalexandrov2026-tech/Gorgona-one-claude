// Lets a signed-in business owner or admin create and list their own
// Partner API keys. Authenticated with the caller's Supabase access token
// (not an API key - this bootstraps the API keys themselves).
import { getSupabaseAdmin } from '../../../../lib/supabaseServer';
import { generateApiKey } from '../../../../lib/apiAuth';

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

  const { data, error } = await admin.from('api_keys').select('id,name,key_prefix,scopes,rate_limit_per_minute,status,last_used_at,created_at').eq('owner_id', user.id);
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ data });
}

export async function POST(request) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });
  const user = await getCallerUser(request, admin);
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json().catch(() => ({}));
  const name = body.name || 'Default key';

  // 'admin' is a total bypass of every ownership check in the partner API
  // (see hasScope/assertOwnsBusiness in lib/apiAuth.js) - it must only ever
  // be attached to a key by a real platform admin, never self-requested by
  // whoever happens to be signed in when they call this endpoint.
  const { data: profile } = await admin.from('users').select('role').eq('id', user.id).maybeSingle();
  const isPlatformAdmin = profile?.role === 'admin';
  const requestedScopes = Array.isArray(body.scopes) ? body.scopes : ['read'];
  const allowedScopes = isPlatformAdmin ? ['read', 'write', 'admin'] : ['read', 'write'];
  const scopes = requestedScopes.filter((scope) => allowedScopes.includes(scope));
  if (scopes.length === 0) scopes.push('read');

  let { data: partnerAccount } = await admin.from('partner_accounts').select('id').eq('owner_id', user.id).maybeSingle();
  if (!partnerAccount) {
    const { data: newPartner, error: partnerError } = await admin.from('partner_accounts').insert({
      owner_id: user.id,
      company_name: body.company_name || user.email,
      slug: `${(body.company_name || user.email).toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now().toString(36)}`,
      contact_email: user.email
    }).select().single();
    if (partnerError) return Response.json({ error: partnerError.message }, { status: 400 });
    partnerAccount = newPartner;
  }

  const { plain, prefix, hash } = generateApiKey();
  const { data, error } = await admin.from('api_keys').insert({
    owner_id: user.id,
    partner_account_id: partnerAccount.id,
    name,
    scopes,
    key_prefix: prefix,
    key_hash: hash
  }).select('id,name,key_prefix,scopes,rate_limit_per_minute,status,created_at').single();
  if (error) return Response.json({ error: error.message }, { status: 400 });

  return Response.json({ data: { ...data, key: plain } }, { status: 201 });
}
