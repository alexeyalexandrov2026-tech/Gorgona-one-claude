// Partner API key issuance and request-time authentication + rate limiting.
// Keys are sha256-hashed at rest; only the prefix is stored in the clear so
// a lookup doesn't require scanning every row. Rate limiting is a
// best-effort fixed window counted on the api_keys row itself (no external
// cache/queue dependency) - fine for a partner API at this scale, and it
// resets every 60 seconds per key.
import { createHash, randomBytes } from 'crypto';
import { getSupabaseAdmin } from './supabaseServer';

export function generateApiKey() {
  const plain = `gk_live_${randomBytes(24).toString('hex')}`;
  const prefix = plain.slice(0, 16);
  const hash = createHash('sha256').update(plain).digest('hex');
  return { plain, prefix, hash };
}

export function unauthorized(message) {
  return Response.json({ error: message }, { status: 401 });
}

export function forbidden(message) {
  return Response.json({ error: message }, { status: 403 });
}

export function rateLimited(retryAfterSeconds) {
  return Response.json({ error: 'Rate limit exceeded' }, { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } });
}

// Verifies the `Authorization: Bearer <key>` or `x-api-key` header against
// api_keys, enforces per-key rate limiting, and returns the key record
// (including partner_account_id/owner_id/scopes) for the caller to
// authorize specific actions against.
export async function authenticateApiKey(request) {
  const admin = getSupabaseAdmin();
  if (!admin) return { error: unauthorized('API is not connected to a database yet.') };

  const authHeader = request.headers.get('authorization') || '';
  const bearer = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : null;
  const plainKey = bearer || request.headers.get('x-api-key');
  if (!plainKey) return { error: unauthorized('Missing API key. Pass it as `Authorization: Bearer <key>` or `x-api-key`.') };

  const prefix = plainKey.slice(0, 16);
  const hash = createHash('sha256').update(plainKey).digest('hex');

  const { data: keyRow, error } = await admin.from('api_keys').select('*').eq('key_prefix', prefix).maybeSingle();
  if (error || !keyRow || keyRow.key_hash !== hash) return { error: unauthorized('Invalid API key.') };
  if (keyRow.status !== 'active') return { error: forbidden('This API key has been revoked.') };

  const now = new Date();
  const windowStart = new Date(keyRow.window_started_at);
  const windowExpired = now.getTime() - windowStart.getTime() > 60_000;
  const nextCount = windowExpired ? 1 : keyRow.requests_in_window + 1;

  if (!windowExpired && keyRow.requests_in_window >= keyRow.rate_limit_per_minute) {
    const retryAfter = Math.max(1, 60 - Math.floor((now.getTime() - windowStart.getTime()) / 1000));
    return { error: rateLimited(retryAfter) };
  }

  await admin.from('api_keys').update({
    requests_in_window: nextCount,
    window_started_at: windowExpired ? now.toISOString() : keyRow.window_started_at,
    last_used_at: now.toISOString()
  }).eq('id', keyRow.id);

  return { keyRow, admin };
}

export function hasScope(keyRow, scope) {
  return Array.isArray(keyRow.scopes) && (keyRow.scopes.includes(scope) || keyRow.scopes.includes('admin'));
}

export function paginationParams(searchParams) {
  const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
  const pageSize = Math.min(100, Math.max(1, parseInt(searchParams.get('page_size') || '20', 10) || 20));
  return { page, pageSize, from: (page - 1) * pageSize, to: (page - 1) * pageSize + pageSize - 1 };
}
