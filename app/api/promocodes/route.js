import { authenticateApiKey, hasScope, paginationParams, assertOwnsBusiness } from '../../../lib/apiAuth';
import { dispatchWebhookEvent } from '../../../lib/webhooks';

export async function GET(request) {
  const { admin, error } = await authenticateApiKey(request);
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const { page, pageSize, from, to } = paginationParams(searchParams);
  const businessId = searchParams.get('business_id');

  let query = admin.from('promo_codes').select('*', { count: 'exact' }).eq('status', 'active');
  if (businessId) query = query.eq('business_id', businessId);
  query = query.order('created_at', { ascending: false }).range(from, to);

  const { data, error: queryError, count } = await query;
  if (queryError) return Response.json({ error: queryError.message }, { status: 500 });
  return Response.json({ data, page, page_size: pageSize, total: count });
}

export async function POST(request) {
  const { keyRow, admin, error } = await authenticateApiKey(request);
  if (error) return error;
  if (!hasScope(keyRow, 'write')) return Response.json({ error: 'This API key does not have write access.' }, { status: 403 });

  const body = await request.json();
  if (!body?.business_id || !body?.code) return Response.json({ error: 'business_id and code are required' }, { status: 422 });

  const ownershipError = await assertOwnsBusiness(admin, keyRow, body.business_id);
  if (ownershipError) return ownershipError;

  const { data, error: insertError } = await admin.from('promo_codes').insert({ ...body, owner_id: keyRow.owner_id }).select().single();
  if (insertError) return Response.json({ error: insertError.message }, { status: 400 });

  await dispatchWebhookEvent('promo.created', data);
  return Response.json({ data }, { status: 201 });
}
