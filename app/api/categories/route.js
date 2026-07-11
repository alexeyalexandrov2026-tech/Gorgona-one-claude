import { authenticateApiKey } from '../../../lib/apiAuth';

export async function GET(request) {
  const { admin, error } = await authenticateApiKey(request);
  if (error) return error;

  const { data, error: queryError } = await admin.from('categories').select('*').eq('status', 'active').order('name');
  if (queryError) return Response.json({ error: queryError.message }, { status: 500 });
  return Response.json({ data });
}
