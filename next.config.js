/** @type {import('next').NextConfig} */
const nextConfig = {
  // NEXT_PUBLIC_* vars can only be inlined into the client bundle from
  // whatever `process.env` looks like when `next build` runs. Cloudflare
  // Workers Builds only exposes vars configured as plaintext "Build
  // variables" (Settings > Build > Environment variables) to that step -
  // vars added only under the Worker's runtime "Variables and Secrets"
  // tab are injected into the deployed Worker's `env` binding at request
  // time, a separate phase `next build` never runs in. These two values
  // are non-secret by design (Supabase's own "publishable" key is meant
  // for client exposure), so hardcoding them as a fallback here guarantees
  // a correct build regardless of Cloudflare's build-time env
  // configuration - `process.env` still wins when actually set, so this
  // has no effect on Vercel or any host that does expose it at build time.
  env: {
    NEXT_PUBLIC_SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://uxhoxrtzqvomwmilqvbt.supabase.co',
    NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || 'sb_publishable_QrtwENgLyUfzoFXKsM_bUg_8ZWi7fw6'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' }
        ]
      }
    ];
  }
};

module.exports = nextConfig;
