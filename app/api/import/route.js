// Business owners upload a CSV/JSON/XML/Excel file of listings from the
// dashboard. Each row is field-mapped, validated, deduped against the
// caller's existing businesses (by slug), and inserted as a pending
// business (source='import'). The full run is logged to
// api_import_logs, including created ids, so it can be rolled back.
import { getSupabaseAdmin } from '../../../lib/supabaseServer';
import { parseCSV, parseJSONRecords, parseXMLRecords, parseExcelRecords, mapRecordToBusiness, detectFileType } from '../../../lib/importParsers';

async function getCallerUser(request, admin) {
  const authHeader = request.headers.get('authorization') || '';
  const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!token) return null;
  const { data, error } = await admin.auth.getUser(token);
  if (error || !data?.user) return null;
  return data.user;
}

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export async function POST(request) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });
  const user = await getCallerUser(request, admin);
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const form = await request.formData();
  const file = form.get('file');
  if (!file) return Response.json({ error: 'file is required (multipart/form-data)' }, { status: 422 });

  const fileType = detectFileType(file.name);
  if (!fileType) return Response.json({ error: 'Unsupported file type. Use .csv, .json, .xml, .xlsx, or .xls.' }, { status: 422 });

  let records = [];
  try {
    if (fileType === 'excel') {
      records = parseExcelRecords(await file.arrayBuffer());
    } else {
      const text = await file.text();
      if (fileType === 'csv') records = parseCSV(text);
      else if (fileType === 'json') records = parseJSONRecords(text);
      else if (fileType === 'xml') records = parseXMLRecords(text);
    }
  } catch (parseError) {
    return Response.json({ error: `Failed to parse file: ${parseError.message}` }, { status: 422 });
  }

  const { data: existingBusinesses } = await admin.from('businesses').select('slug').eq('owner_id', user.id);
  const existingSlugs = new Set((existingBusinesses || []).map((b) => b.slug));

  const errors = [];
  const createdIds = [];
  let duplicateCount = 0;
  let successCount = 0;

  for (let i = 0; i < records.length; i += 1) {
    const mapped = mapRecordToBusiness(records[i]);
    if (!mapped.name) {
      errors.push({ row: i + 1, error: 'Missing required field: name' });
      continue;
    }
    const slug = slugify(mapped.name);
    if (existingSlugs.has(slug)) {
      duplicateCount += 1;
      continue;
    }

    let categoryId = null;
    if (mapped.category) {
      const { data: cat } = await admin.from('categories').select('id').ilike('name', mapped.category).maybeSingle();
      categoryId = cat?.id || null;
    }

    const basePayload = {
      owner_id: user.id,
      name: mapped.name,
      description: mapped.description || null,
      website: mapped.website || null,
      phone: mapped.phone || null,
      email: mapped.email || null,
      address: mapped.address || null,
      city: mapped.city || null,
      state: mapped.state || null,
      country: mapped.country || null,
      category_id: categoryId,
      source: 'import',
      status: 'pending'
    };

    let { data: inserted, error: insertError } = await admin.from('businesses').insert({ ...basePayload, slug }).select('id').single();
    if (insertError?.code === '23505') {
      // The dedup check above only looked at the caller's own businesses -
      // the slug column is globally unique, so a different owner can
      // already hold this exact slug. Retry once with a short suffix
      // instead of failing the whole row.
      const suffixedSlug = `${slug}-${Math.random().toString(36).slice(2, 6)}`;
      ({ data: inserted, error: insertError } = await admin.from('businesses').insert({ ...basePayload, slug: suffixedSlug }).select('id').single());
    }

    if (insertError) {
      errors.push({ row: i + 1, error: insertError.message });
      continue;
    }
    existingSlugs.add(slug);
    createdIds.push(inserted.id);
    successCount += 1;
  }

  const { data: logRow, error: logError } = await admin.from('api_import_logs').insert({
    owner_id: user.id,
    file_name: file.name,
    file_type: fileType,
    total_rows: records.length,
    success_count: successCount,
    error_count: errors.length,
    duplicate_count: duplicateCount,
    errors,
    created_ids: createdIds,
    status: 'completed'
  }).select().single();
  if (logError) return Response.json({ error: logError.message }, { status: 500 });

  return Response.json({ data: logRow });
}

export async function GET(request) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });
  const user = await getCallerUser(request, admin);
  if (!user) return Response.json({ error: 'Unauthorized' }, { status: 401 });

  const { data, error } = await admin.from('api_import_logs').select('*').eq('owner_id', user.id).order('created_at', { ascending: false });
  if (error) return Response.json({ error: error.message }, { status: 500 });
  return Response.json({ data });
}
