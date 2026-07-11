// Aggregator feed sync runner. Not tied to a specific host's cron system -
// call this endpoint from any external scheduler (Vercel Cron, a GitHub
// Actions schedule, Cloudflare Cron Trigger hitting the URL, cron-job.org,
// etc.) with `Authorization: Bearer $CRON_SECRET`. Picks up every
// external_feed whose schedule window has elapsed, fetches + parses it,
// deduplicates against the partner's existing businesses, and logs a
// feed_sync_jobs row per run (with retry_count for failures).
import { getSupabaseAdmin } from '../../../../lib/supabaseServer';
import { parseCSV, parseJSONRecords, parseXMLRecords, mapRecordToBusiness } from '../../../../lib/importParsers';

const SCHEDULE_MS = { hourly: 60 * 60 * 1000, daily: 24 * 60 * 60 * 1000, weekly: 7 * 24 * 60 * 60 * 1000 };

function slugify(value) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function isDue(feed) {
  if (feed.schedule === 'manual') return false;
  if (!feed.last_synced_at) return true;
  const elapsed = Date.now() - new Date(feed.last_synced_at).getTime();
  return elapsed >= (SCHEDULE_MS[feed.schedule] || Infinity);
}

async function runFeed(admin, feed) {
  const { data: job } = await admin.from('feed_sync_jobs').insert({ feed_id: feed.id, owner_id: feed.owner_id, status: 'running', started_at: new Date().toISOString() }).select().single();

  try {
    const response = await fetch(feed.url, { headers: feed.auth_config?.headers || {} });
    if (!response.ok) throw new Error(`Feed request failed with status ${response.status}`);
    const text = await response.text();

    let records = [];
    if (feed.feed_type === 'csv') records = parseCSV(text);
    else if (feed.feed_type === 'json') records = parseJSONRecords(text);
    else if (feed.feed_type === 'xml') records = parseXMLRecords(text);
    else throw new Error(`Unsupported feed_type for scheduled sync: ${feed.feed_type}`);

    const { data: existing } = await admin.from('businesses').select('id,slug').eq('owner_id', feed.owner_id);
    const existingSlugs = new Map((existing || []).map((b) => [b.slug, b.id]));

    let created = 0;
    let updated = 0;
    let failed = 0;
    const errorLog = [];

    for (const record of records) {
      const mapped = mapRecordToBusiness(record);
      if (!mapped.name) { failed += 1; errorLog.push({ error: 'Missing name field', record }); continue; }
      const slug = slugify(mapped.name);
      const fields = {
        owner_id: feed.owner_id,
        name: mapped.name,
        description: mapped.description || null,
        website: mapped.website || null,
        phone: mapped.phone || null,
        city: mapped.city || null,
        state: mapped.state || null,
        country: mapped.country || null,
        source: 'feed'
      };

      if (existingSlugs.has(slug)) {
        // Deliberately does not touch `status` - re-syncing an already
        // approved business must not silently revert it to pending on
        // every scheduled run. (The protect_business_status DB trigger
        // would neutralize an attempt to do that anyway, since this
        // service-role connection has no authenticated admin identity.)
        const { error } = await admin.from('businesses').update(fields).eq('id', existingSlugs.get(slug));
        if (error) { failed += 1; errorLog.push({ error: error.message, slug }); } else updated += 1;
      } else {
        let { data: inserted, error } = await admin.from('businesses').insert({ ...fields, slug, status: 'pending' }).select('id').single();
        if (error?.code === '23505') {
          const suffixedSlug = `${slug}-${Math.random().toString(36).slice(2, 6)}`;
          ({ data: inserted, error } = await admin.from('businesses').insert({ ...fields, slug: suffixedSlug, status: 'pending' }).select('id').single());
        }
        if (error) { failed += 1; errorLog.push({ error: error.message, slug }); } else { existingSlugs.set(slug, inserted.id); created += 1; }
      }
    }

    await admin.from('feed_sync_jobs').update({
      status: 'success', records_processed: records.length, records_created: created, records_updated: updated,
      records_failed: failed, error_log: errorLog, finished_at: new Date().toISOString()
    }).eq('id', job.id);

    await admin.from('external_feeds').update({ last_synced_at: new Date().toISOString(), status: 'active' }).eq('id', feed.id);
    return { feed_id: feed.id, status: 'success', created, updated, failed };
  } catch (err) {
    await admin.from('feed_sync_jobs').update({
      status: 'failed', error_log: [{ error: err.message }], retry_count: job.retry_count + 1, finished_at: new Date().toISOString()
    }).eq('id', job.id);
    await admin.from('external_feeds').update({ status: 'error' }).eq('id', feed.id);
    return { feed_id: feed.id, status: 'failed', error: err.message };
  }
}

async function handleSync(request) {
  const admin = getSupabaseAdmin();
  if (!admin) return Response.json({ error: 'Not connected to a database yet.' }, { status: 503 });

  const authHeader = request.headers.get('authorization') || '';
  const providedSecret = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  if (!process.env.CRON_SECRET || providedSecret !== process.env.CRON_SECRET) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { data: feeds } = await admin.from('external_feeds').select('*').neq('status', 'paused');
  const due = (feeds || []).filter(isDue);
  const results = [];
  for (const feed of due) {
    results.push(await runFeed(admin, feed));
  }
  return Response.json({ checked: feeds?.length || 0, synced: results.length, results });
}

export async function GET(request) { return handleSync(request); }
export async function POST(request) { return handleSync(request); }
