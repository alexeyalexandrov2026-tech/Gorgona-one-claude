// Best-effort SSRF guard for partner-supplied webhook URLs. Webhooks are
// fetched server-side whenever a business/offer/promo event fires, so an
// attacker registering http://169.254.169.254/... or http://localhost:...
// could otherwise use this platform to probe or hit internal services.
// This is a hostname-string check, not a resolved-IP check (that needs a
// DNS-aware egress proxy this environment doesn't have) - it blocks the
// obvious cases at both registration time and dispatch time, not DNS
// rebinding attacks against a hostname that resolves to a public IP at
// registration and a private one at delivery time.
const BLOCKED_HOSTNAMES = new Set(['localhost', '0.0.0.0', '::1']);

function isPrivateIPv4(hostname) {
  const match = hostname.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
  if (!match) return false;
  const [a, b] = [Number(match[1]), Number(match[2])];
  return (
    a === 127 ||
    a === 10 ||
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 169 && b === 254) // link-local, includes cloud metadata endpoints
  );
}

export function validateWebhookUrl(rawUrl) {
  let parsed;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return 'url must be a valid absolute URL.';
  }
  if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') {
    return 'url must use http or https.';
  }
  const hostname = parsed.hostname.toLowerCase();
  if (BLOCKED_HOSTNAMES.has(hostname) || hostname.endsWith('.local') || isPrivateIPv4(hostname)) {
    return 'url may not point to a private, loopback, or link-local address.';
  }
  return null;
}
