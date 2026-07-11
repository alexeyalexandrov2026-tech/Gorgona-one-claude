// Dispatches an event to every active webhook subscribed to it. Runs
// best-effort and never throws into the caller - a slow or broken partner
// endpoint must not block the API request that triggered the event.
import { createHmac } from 'crypto';
import { getSupabaseAdmin } from './supabaseServer';

export async function dispatchWebhookEvent(eventType, payload) {
  const admin = getSupabaseAdmin();
  if (!admin) return;

  const { data: webhooks } = await admin.from('webhooks').select('*').eq('status', 'active');
  const matching = (webhooks || []).filter((hook) => Array.isArray(hook.events) && hook.events.includes(eventType));

  await Promise.all(matching.map(async (hook) => {
    const body = JSON.stringify({ event: eventType, data: payload, sent_at: new Date().toISOString() });
    const signature = createHmac('sha256', hook.secret).update(body).digest('hex');
    let responseStatus = null;
    let status = 'failed';
    try {
      const response = await fetch(hook.url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Gorgona-Signature': signature, 'X-Gorgona-Event': eventType },
        body
      });
      responseStatus = response.status;
      status = response.ok ? 'delivered' : 'failed';
    } catch {
      status = 'failed';
    }
    await admin.from('webhook_deliveries').insert({ webhook_id: hook.id, event_type: eventType, payload, response_status: responseStatus, status });
  }));
}
