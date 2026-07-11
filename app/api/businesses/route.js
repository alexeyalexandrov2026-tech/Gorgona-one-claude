import { authenticateApiKey, hasScope, paginationParams } from '../../../lib/apiAuth';
import { dispatchWebhookEvent } from '../../../lib/webhooks';

export async function GET(request) {
  const { keyRow, admin, error } = await authenticateApiKey(request);
  if (error) return error;

  const { searchParams } = new URL(request.url);
  const { page, pageSize, from, to } = paginationParams(searchParams);
  const search = searchParams.get('q');
  const category = searchParams.get('category');
  const city = searchParams.get('city');

  let query = admin.from('businesses').select('*,categories(name,slug)', { count: 'exact' }).eq('status', 'approved');
  if (search) query = query.or(`name.ilike.%${search}%,description.ilike.%${search}%`);
  if (category) {
    // PostgREST only honors a filter on an embedded resource (categories.slug)
    // when the select uses the `!inner` join hint - otherwise it's silently
    // ignored and every category is returned. Resolve the slug to an id and
    // filter on businesses.category_id directly instead.
    const { data: categoryRow } = await admin.from('categories').select('id').eq('slug', category).maybeSingle();
    query = query.eq('category_id', categoryRow?.id || '00000000-0000-0000-0000-000000000000');
  }
  if (city) query = query.ilike('city', `%${city}%`);
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
  if (!body?.name) return Response.json({ error: 'name is required' }, { status: 422 });

  const slug = (body.slug || body.name).toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  const payload = {
    name: body.name,
    slug,
    description: body.description || null,
    website: body.website || null,
    phone: body.phone || null,
    email: body.email || null,
    address: body.address || null,
    city: body.city || null,
    state: body.state || null,
    country: body.country || null,
    category_id: body.category_id || null,
    owner_id: keyRow.owner_id,
    source: 'api',
    status: 'pending'
  };

  const { data, error: insertError } = await admin.from('businesses').insert(payload).select().single();
  if (insertError) return Response.json({ error: insertError.message }, { status: 400 });

  await dispatchWebhookEvent('business.created', data);
  return Response.json({ data }, { status: 201 });
}
