import { authenticateApiKey, hasScope } from '../../../../lib/apiAuth';
import { dispatchWebhookEvent } from '../../../../lib/webhooks';

export async function GET(request, { params }) {
  const { admin, error } = await authenticateApiKey(request);
  if (error) return error;

  const { data, error: queryError } = await admin.from('businesses').select('*,categories(name,slug)').eq('id', params.id).maybeSingle();
  if (queryError) return Response.json({ error: queryError.message }, { status: 500 });
  if (!data) return Response.json({ error: 'Not found' }, { status: 404 });
  return Response.json({ data });
}

export async function PUT(request, { params }) {
  const { keyRow, admin, error } = await authenticateApiKey(request);
  if (error) return error;
  if (!hasScope(keyRow, 'write')) return Response.json({ error: 'This API key does not have write access.' }, { status: 403 });

  const { data: existing } = await admin.from('businesses').select('owner_id').eq('id', params.id).maybeSingle();
  if (!existing) return Response.json({ error: 'Not found' }, { status: 404 });
  if (existing.owner_id !== keyRow.owner_id && !hasScope(keyRow, 'admin')) {
    return Response.json({ error: 'You do not own this business.' }, { status: 403 });
  }

  const body = await request.json();
  // A write-scoped key must never be able to self-approve (status), steal a
  // listing (owner_id), or forge its id/creation metadata - only an
  // admin-scoped key may touch those. The businesses table also has a DB
  // trigger (protect_business_status) enforcing this independently, but
  // stripping it here avoids a confusing "your update silently no-op'd".
  const restrictedFields = ['id', 'owner_id', 'status', 'source', 'created_at'];
  const updates = { ...body };
  if (!hasScope(keyRow, 'admin')) {
    for (const field of restrictedFields) delete updates[field];
  }

  const { data, error: updateError } = await admin.from('businesses').update(updates).eq('id', params.id).select().single();
  if (updateError) return Response.json({ error: updateError.message }, { status: 400 });

  await dispatchWebhookEvent('business.updated', data);
  return Response.json({ data });
}

export async function DELETE(request, { params }) {
  const { keyRow, admin, error } = await authenticateApiKey(request);
  if (error) return error;
  if (!hasScope(keyRow, 'write')) return Response.json({ error: 'This API key does not have write access.' }, { status: 403 });

  const { data: existing } = await admin.from('businesses').select('owner_id').eq('id', params.id).maybeSingle();
  if (!existing) return Response.json({ error: 'Not found' }, { status: 404 });
  if (existing.owner_id !== keyRow.owner_id && !hasScope(keyRow, 'admin')) {
    return Response.json({ error: 'You do not own this business.' }, { status: 403 });
  }

  const { error: deleteError } = await admin.from('businesses').delete().eq('id', params.id);
  if (deleteError) return Response.json({ error: deleteError.message }, { status: 400 });

  await dispatchWebhookEvent('business.deleted', { id: params.id });
  return Response.json({ success: true });
}
