export const metadata = {
  title: 'Partner API Documentation | GORGONA ONE',
  description: 'REST API reference for GORGONA ONE partner and aggregator integrations.'
};

const endpoints = [
  { method: 'GET', path: '/api/businesses', desc: 'List approved businesses. Query: q, category, city, page, page_size (max 100).' },
  { method: 'POST', path: '/api/businesses', desc: 'Create a business (requires write scope). Body: name, description, website, city, state, country, category_id.' },
  { method: 'GET', path: '/api/businesses/{id}', desc: 'Fetch a single business by id.' },
  { method: 'PUT', path: '/api/businesses/{id}', desc: 'Update a business you own (requires write scope).' },
  { method: 'DELETE', path: '/api/businesses/{id}', desc: 'Delete a business you own (requires write scope).' },
  { method: 'GET', path: '/api/categories', desc: 'List active categories.' },
  { method: 'GET', path: '/api/promocodes', desc: 'List active promo codes. Query: business_id, page, page_size.' },
  { method: 'POST', path: '/api/promocodes', desc: 'Create a promo code (requires write scope). Body: business_id, code, discount, description.' },
  { method: 'GET', path: '/api/offers', desc: 'List active offers. Query: business_id, page, page_size.' },
  { method: 'POST', path: '/api/offers', desc: 'Create an offer (requires write scope). Body: business_id, title, description, price, discount_percent.' }
];

export default function ApiDocsPage() {
  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Partner API</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">GORGONA ONE REST API documentation</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Sign in as a business owner or admin, then call <code className="rounded bg-black/50 px-2 py-1">POST /api/partner/keys</code> with
          your Supabase session token in <code className="rounded bg-black/50 px-2 py-1">Authorization: Bearer &lt;token&gt;</code> to generate
          an API key. The plaintext key is only shown once - store it securely.
        </p>
      </div>

      <section className="mb-10 rounded-2xl border border-white/10 bg-black/40 p-6">
        <h2 className="mb-3 text-xl font-semibold text-white">Authentication</h2>
        <p className="text-zinc-400">Send your API key on every request as either header:</p>
        <pre className="mt-3 overflow-x-auto rounded-xl bg-black/60 p-4 text-sm text-emerald-400">
Authorization: Bearer gk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
{'\n'}x-api-key: gk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        </pre>
        <p className="mt-3 text-zinc-400">
          Keys are rate-limited per minute (default 60 requests/min, configurable per key). Exceeding the limit returns
          <code className="mx-1 rounded bg-black/50 px-2 py-1">429</code> with a <code className="rounded bg-black/50 px-2 py-1">Retry-After</code> header.
          Write endpoints require the <code className="rounded bg-black/50 px-2 py-1">write</code> scope on your key.
        </p>
      </section>

      <section className="rounded-2xl border border-white/10 bg-black/40 p-6">
        <h2 className="mb-4 text-xl font-semibold text-white">Endpoints</h2>
        <div className="space-y-3">
          {endpoints.map((e) => (
            <div key={e.method + e.path} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <p className="font-mono text-sm">
                <span className="mr-3 rounded bg-brand-gold px-2 py-1 text-xs font-semibold text-black">{e.method}</span>
                <span className="text-white">{e.path}</span>
              </p>
              <p className="mt-2 text-sm text-zinc-400">{e.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-2xl border border-white/10 bg-black/40 p-6">
        <h2 className="mb-3 text-xl font-semibold text-white">Example</h2>
        <pre className="overflow-x-auto rounded-xl bg-black/60 p-4 text-sm text-emerald-400">
{`curl https://your-domain.com/api/businesses?page=1&page_size=20 \\
  -H "Authorization: Bearer gk_live_xxxxxxxx"`}
        </pre>
      </section>
    </main>
  );
}
