// Temporary diagnostic endpoint - reports presence (not values) of the
// required Supabase env vars as seen by the deployed Worker at request
// time. This is a DIFFERENT environment than the one `next build` runs
// in (see scripts/print-env-presence.js) - this route tells you whether
// Cloudflare's runtime "Variables and Secrets" binding is wired, that
// script's build-log output tells you whether the build step saw them.
// Both must be true: the build step needs them to inline NEXT_PUBLIC_*
// into the client bundle, the runtime needs them for server-side reads
// (SUPABASE_SERVICE_ROLE_KEY, and any server component's use of
// NEXT_PUBLIC_SUPABASE_URL). Delete this route once the deployment is
// confirmed working - it is intentionally not linked from anywhere.
export async function GET() {
  const report = {};
  for (const key of ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY', 'SUPABASE_SERVICE_ROLE_KEY']) {
    const value = process.env[key];
    report[key] = value ? { present: true, length: value.length } : { present: false };
  }
  return Response.json({ checkedAt: new Date().toISOString(), env: report });
}
