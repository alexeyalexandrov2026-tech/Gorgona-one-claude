// Temporary build-time diagnostic. Prints directly into the Cloudflare
// Workers Build log (stdout of `npm run build`) whether the required
// Supabase env vars are actually present in the environment `next build`
// runs in - the only environment that matters for NEXT_PUBLIC_* inlining.
// Cloudflare Workers Builds only exposes vars marked as plaintext "Build
// variables" (Settings > Build > Environment variables) to this step;
// vars added only under the Worker's runtime "Variables and Secrets" tab
// are injected into the deployed Worker's `env` binding at request time,
// which is a different environment this script cannot see and next build
// never runs in. Remove this script (and its `npm run build` reference in
// package.json) once the deployment is confirmed working.
const required = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY', 'SUPABASE_SERVICE_ROLE_KEY'];

console.log('--- Supabase env var presence at `next build` time ---');
for (const key of required) {
  const value = process.env[key];
  console.log(`${key}: ${value ? `present (length ${value.length})` : 'MISSING'}`);
}
console.log('-------------------------------------------------------');
