"use client";

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';
import { getSupabaseClient, isSupabaseConfigured } from '../../lib/supabaseClient';

function slugify(value) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const EMPTY_BUSINESS = {
  name: '', slug: '', category_id: '', description: '', website: '', phone: '', email: '',
  address: '', city: '', state: '', country: ''
};

export default function DashboardPage() {
  const auth = useAuth();
  const router = useRouter();
  const supabase = getSupabaseClient();

  const [categories, setCategories] = useState([]);
  const [businesses, setBusinesses] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [form, setForm] = useState(EMPTY_BUSINESS);
  const [promoCodes, setPromoCodes] = useState([]);
  const [offers, setOffers] = useState([]);
  const [analytics, setAnalytics] = useState({ view: 0, click: 0, conversion: 0, search: 0, promo_click: 0 });
  const [tab, setTab] = useState('listing');
  const [message, setMessage] = useState('');
  const [uploading, setUploading] = useState('');
  const [importLogs, setImportLogs] = useState([]);
  const [importFile, setImportFile] = useState(null);
  const [importBusy, setImportBusy] = useState(false);
  const [apiKeys, setApiKeys] = useState([]);
  const [newApiKey, setNewApiKey] = useState(null);
  const [webhooks, setWebhooks] = useState([]);
  const [webhookUrl, setWebhookUrl] = useState('');

  const selectedBusiness = useMemo(() => businesses.find((b) => b.id === selectedId) || null, [businesses, selectedId]);

  useEffect(() => {
    if (!auth?.loading && !auth?.session) router.push('/login');
  }, [auth, router]);

  useEffect(() => {
    if (!supabase || !auth?.session) return;
    (async () => {
      const { data: cats } = await supabase.from('categories').select('id,name,slug').eq('status', 'active').order('name');
      setCategories(cats || []);
      const { data: own } = await supabase.from('businesses').select('*').eq('owner_id', auth.session.id).order('created_at', { ascending: false });
      setBusinesses(own || []);
      if (own?.length) setSelectedId(own[0].id);
    })();
  }, [supabase, auth?.session]);

  useEffect(() => {
    if (selectedBusiness) {
      setForm({ ...EMPTY_BUSINESS, ...selectedBusiness, category_id: selectedBusiness.category_id || '' });
    } else {
      setForm(EMPTY_BUSINESS);
    }
  }, [selectedBusiness]);

  useEffect(() => {
    if (!supabase || !selectedId) { setPromoCodes([]); setOffers([]); setAnalytics({ view: 0, click: 0, conversion: 0, search: 0, promo_click: 0 }); return; }
    (async () => {
      const [{ data: promos }, { data: offerRows }, { data: analyticsRows }] = await Promise.all([
        supabase.from('promo_codes').select('*').eq('business_id', selectedId).order('created_at', { ascending: false }),
        supabase.from('offers').select('*').eq('business_id', selectedId).order('created_at', { ascending: false }),
        supabase.from('analytics').select('metric').eq('business_id', selectedId).limit(5000)
      ]);
      setPromoCodes(promos || []);
      setOffers(offerRows || []);
      const counts = { view: 0, click: 0, conversion: 0, search: 0, promo_click: 0 };
      (analyticsRows || []).forEach((row) => { counts[row.metric] = (counts[row.metric] || 0) + 1; });
      setAnalytics(counts);
    })();
  }, [supabase, selectedId]);

  async function getAccessToken() {
    const { data } = await supabase.auth.getSession();
    return data?.session?.access_token;
  }

  async function loadImportLogs() {
    const token = await getAccessToken();
    if (!token) return;
    const response = await fetch('/api/import', { headers: { Authorization: `Bearer ${token}` } });
    const body = await response.json();
    setImportLogs(body.data || []);
  }

  async function loadApiKeysAndWebhooks() {
    const token = await getAccessToken();
    if (!token) return;
    const [keysRes, hooksRes] = await Promise.all([
      fetch('/api/partner/keys', { headers: { Authorization: `Bearer ${token}` } }),
      fetch('/api/webhooks', { headers: { Authorization: `Bearer ${token}` } })
    ]);
    const keysBody = await keysRes.json();
    const hooksBody = await hooksRes.json();
    setApiKeys(keysBody.data || []);
    setWebhooks(hooksBody.data || []);
  }

  useEffect(() => {
    if (tab === 'import') loadImportLogs();
    if (tab === 'developer') loadApiKeysAndWebhooks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab]);

  async function submitImport(event) {
    event.preventDefault();
    if (!importFile) return;
    setImportBusy(true);
    setMessage('');
    const token = await getAccessToken();
    const formData = new FormData();
    formData.append('file', importFile);
    const response = await fetch('/api/import', { method: 'POST', headers: { Authorization: `Bearer ${token}` }, body: formData });
    const body = await response.json();
    setImportBusy(false);
    if (!response.ok) { setMessage(body.error || 'Import failed.'); return; }
    setMessage(`Imported ${body.data.success_count} of ${body.data.total_rows} rows (${body.data.duplicate_count} duplicates, ${body.data.error_count} errors).`);
    setImportFile(null);
    await loadImportLogs();
    const { data: own } = await supabase.from('businesses').select('*').eq('owner_id', auth.session.id).order('created_at', { ascending: false });
    setBusinesses(own || []);
  }

  async function rollbackImport(id) {
    const token = await getAccessToken();
    const response = await fetch(`/api/import/${id}/rollback`, { method: 'POST', headers: { Authorization: `Bearer ${token}` } });
    const body = await response.json();
    if (!response.ok) { setMessage(body.error || 'Rollback failed.'); return; }
    await loadImportLogs();
    const { data: own } = await supabase.from('businesses').select('*').eq('owner_id', auth.session.id).order('created_at', { ascending: false });
    setBusinesses(own || []);
  }

  async function createApiKey(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const token = await getAccessToken();
    const response = await fetch('/api/partner/keys', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: form.get('name'), scopes: form.get('scope') === 'write' ? ['read', 'write'] : ['read'] })
    });
    const body = await response.json();
    if (!response.ok) { setMessage(body.error || 'Could not create key.'); return; }
    setNewApiKey(body.data.key);
    await loadApiKeysAndWebhooks();
    event.target.reset();
  }

  async function createWebhook(event) {
    event.preventDefault();
    if (!webhookUrl.trim()) return;
    const token = await getAccessToken();
    const response = await fetch('/api/webhooks', {
      method: 'POST',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: webhookUrl.trim() })
    });
    const body = await response.json();
    if (!response.ok) { setMessage(body.error || 'Could not create webhook.'); return; }
    setMessage(`Webhook created. Secret (shown once): ${body.data.secret}`);
    setWebhookUrl('');
    await loadApiKeysAndWebhooks();
  }

  async function becomeBusinessOwner() {
    if (!supabase || !auth?.session) return;
    await supabase.from('users').update({ role: 'business_owner' }).eq('id', auth.session.id);
    await auth.refresh();
  }

  function handleFormChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value, ...(field === 'name' && !prev.id ? { slug: slugify(value) } : {}) }));
  }

  async function saveBusiness(event) {
    event.preventDefault();
    setMessage('');
    if (!form.name.trim()) { setMessage('Business name is required.'); return; }
    const payload = {
      ...form,
      slug: form.slug || slugify(form.name),
      category_id: form.category_id || null,
      owner_id: auth.session.id,
      status: form.id ? form.status : 'pending'
    };
    let { data, error } = await supabase.from('businesses').upsert(payload).select().single();
    if (error?.code === '23505' && error.message.includes('slug')) {
      // Another business (any owner) already has this slug - retry once
      // with a short random suffix rather than surfacing a raw constraint
      // error to someone who just typed a common business name.
      payload.slug = `${payload.slug}-${Math.random().toString(36).slice(2, 6)}`;
      ({ data, error } = await supabase.from('businesses').upsert(payload).select().single());
    }
    if (error) { setMessage(error.message); return; }
    setBusinesses((prev) => {
      const exists = prev.some((b) => b.id === data.id);
      return exists ? prev.map((b) => (b.id === data.id ? data : b)) : [data, ...prev];
    });
    setSelectedId(data.id);
    setMessage('Listing saved. New listings require admin approval before appearing publicly.');
  }

  async function deleteBusiness() {
    if (!selectedBusiness || !confirm('Delete this listing permanently?')) return;
    const { error } = await supabase.from('businesses').delete().eq('id', selectedBusiness.id);
    if (error) { setMessage(error.message); return; }
    setBusinesses((prev) => prev.filter((b) => b.id !== selectedBusiness.id));
    setSelectedId(null);
  }

  async function uploadMedia(field, file) {
    if (!file || !selectedBusiness) return;
    setUploading(field);
    const path = `${auth.session.id}/${selectedBusiness.id}/${field}-${Date.now()}-${file.name}`;
    const { error: uploadError } = await supabase.storage.from('business-media').upload(path, file, { upsert: true });
    if (uploadError) { setMessage(uploadError.message); setUploading(''); return; }
    const { data: publicUrl } = supabase.storage.from('business-media').getPublicUrl(path);
    const updates = field === 'gallery'
      ? { gallery: [...(selectedBusiness.gallery || []), publicUrl.publicUrl] }
      : { [field]: publicUrl.publicUrl };
    const { data, error } = await supabase.from('businesses').update(updates).eq('id', selectedBusiness.id).select().single();
    setUploading('');
    if (error) { setMessage(error.message); return; }
    setBusinesses((prev) => prev.map((b) => (b.id === data.id ? data : b)));
  }

  async function addPromoCode(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const payload = {
      business_id: selectedId,
      owner_id: auth.session.id,
      code: form.get('code'),
      discount: form.get('discount'),
      description: form.get('description')
    };
    const { data, error } = await supabase.from('promo_codes').insert(payload).select().single();
    if (error) { setMessage(error.message); return; }
    setPromoCodes((prev) => [data, ...prev]);
    event.target.reset();
  }

  async function deletePromoCode(id) {
    await supabase.from('promo_codes').delete().eq('id', id);
    setPromoCodes((prev) => prev.filter((p) => p.id !== id));
  }

  async function addOffer(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const payload = {
      business_id: selectedId,
      owner_id: auth.session.id,
      title: form.get('title'),
      description: form.get('description'),
      price: form.get('price') ? Number(form.get('price')) : null,
      discount_percent: form.get('discount_percent') ? Number(form.get('discount_percent')) : null
    };
    const { data, error } = await supabase.from('offers').insert(payload).select().single();
    if (error) { setMessage(error.message); return; }
    setOffers((prev) => [data, ...prev]);
    event.target.reset();
  }

  async function deleteOffer(id) {
    await supabase.from('offers').delete().eq('id', id);
    setOffers((prev) => prev.filter((o) => o.id !== id));
  }

  if (!isSupabaseConfigured()) {
    return (
      <main className="flex-1 py-10">
        <p className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-6 text-zinc-300">
          The business dashboard is not connected to a database yet. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable it.
        </p>
      </main>
    );
  }

  if (auth?.loading || !auth?.session) {
    return <main className="flex-1 py-10"><p className="text-zinc-400">Loading...</p></main>;
  }

  if (auth.session.role === 'customer') {
    return (
      <main className="flex-1 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <p className="text-zinc-300">This dashboard is for business owners. Upgrade your account to start listing your business.</p>
          <button onClick={becomeBusinessOwner} className="mt-6 rounded-full bg-brand-gold px-6 py-3 font-medium text-black">Become a business owner</button>
        </div>
      </main>
    );
  }

  const tabs = ['listing', 'media', 'promos', 'offers', 'analytics', 'import', 'developer'];

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Business Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Manage your listings, media, and promotions</h1>
      </div>

      <div className="mb-6 flex flex-wrap items-center gap-3">
        <select value={selectedId || ''} onChange={(e) => setSelectedId(e.target.value || null)} className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none">
          <option value="">+ New listing</option>
          {businesses.map((b) => <option key={b.id} value={b.id}>{b.name} ({b.status})</option>)}
        </select>
        {selectedBusiness && <button onClick={deleteBusiness} className="rounded-full border border-red-500/40 px-4 py-2 text-sm text-red-400">Delete listing</button>}
      </div>

      {message && <p className="mb-6 rounded-xl border border-brand-gold/30 bg-brand-gold/10 px-4 py-3 text-sm text-brand-gold">{message}</p>}

      <div className="mb-6 flex gap-2 rounded-full border border-white/10 bg-black/40 p-1 w-fit">
        {tabs.map((key) => (
          <button key={key} onClick={() => setTab(key)} className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${tab === key ? 'bg-brand-gold text-black' : 'text-zinc-300'}`}>{key}</button>
        ))}
      </div>

      {tab === 'listing' && (
        <form onSubmit={saveBusiness} className="grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-6 md:grid-cols-2">
          <input value={form.name} onChange={(e) => handleFormChange('name', e.target.value)} placeholder="Business name" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none md:col-span-2" />
          <select value={form.category_id || ''} onChange={(e) => handleFormChange('category_id', e.target.value)} className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none">
            <option value="">Select category</option>
            {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
          </select>
          <input value={form.website || ''} onChange={(e) => handleFormChange('website', e.target.value)} placeholder="Website" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
          <input value={form.phone || ''} onChange={(e) => handleFormChange('phone', e.target.value)} placeholder="Phone" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
          <input value={form.email || ''} onChange={(e) => handleFormChange('email', e.target.value)} placeholder="Contact email" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
          <input value={form.address || ''} onChange={(e) => handleFormChange('address', e.target.value)} placeholder="Address" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none md:col-span-2" />
          <input value={form.city || ''} onChange={(e) => handleFormChange('city', e.target.value)} placeholder="City" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
          <input value={form.state || ''} onChange={(e) => handleFormChange('state', e.target.value)} placeholder="State" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
          <input value={form.country || ''} onChange={(e) => handleFormChange('country', e.target.value)} placeholder="Country" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
          <textarea value={form.description || ''} onChange={(e) => handleFormChange('description', e.target.value)} placeholder="Description" rows={4} className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none md:col-span-2" />
          <button type="submit" className="rounded-full bg-brand-gold px-6 py-3 font-medium text-black md:col-span-2">Save listing</button>
        </form>
      )}

      {tab === 'media' && (
        selectedBusiness ? (
          <div className="grid gap-4 rounded-2xl border border-white/10 bg-black/40 p-6 md:grid-cols-3">
            {['logo_url', 'banner_url', 'gallery'].map((field) => (
              <div key={field}>
                <p className="mb-2 text-sm capitalize text-zinc-300">{field.replace('_url', '')}</p>
                <input type="file" accept="image/*" disabled={uploading === field} onChange={(e) => uploadMedia(field, e.target.files?.[0])} className="w-full text-sm text-zinc-400" />
                {field !== 'gallery' && selectedBusiness[field] && <img src={selectedBusiness[field]} alt={field} className="mt-3 h-24 w-full rounded-xl object-cover" />}
                {field === 'gallery' && (
                  <div className="mt-3 grid grid-cols-3 gap-2">
                    {(selectedBusiness.gallery || []).map((url) => <img key={url} src={url} alt="gallery" className="h-16 w-full rounded-lg object-cover" />)}
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : <p className="text-zinc-400">Save a listing first to upload media.</p>
      )}

      {tab === 'promos' && (
        selectedBusiness ? (
          <div className="space-y-4">
            <form onSubmit={addPromoCode} className="grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-6 md:grid-cols-4">
              <input name="code" placeholder="Promo code" required className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <input name="discount" placeholder="Discount (e.g. 20% off)" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <input name="description" placeholder="Description" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <button type="submit" className="rounded-full bg-brand-gold px-4 py-3 font-medium text-black">Add</button>
            </form>
            <div className="grid gap-3 md:grid-cols-2">
              {promoCodes.map((promo) => (
                <div key={promo.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="font-mono text-brand-gold">{promo.code}</p>
                    <p className="text-sm text-zinc-400">{promo.description || promo.discount}</p>
                  </div>
                  <button onClick={() => deletePromoCode(promo.id)} className="text-sm text-red-400">Delete</button>
                </div>
              ))}
            </div>
          </div>
        ) : <p className="text-zinc-400">Save a listing first to add promo codes.</p>
      )}

      {tab === 'offers' && (
        selectedBusiness ? (
          <div className="space-y-4">
            <form onSubmit={addOffer} className="grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-6 md:grid-cols-4">
              <input name="title" placeholder="Offer title" required className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <input name="price" placeholder="Price" type="number" step="0.01" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <input name="discount_percent" placeholder="Discount %" type="number" step="0.1" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <input name="description" placeholder="Description" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <button type="submit" className="rounded-full bg-brand-gold px-4 py-3 font-medium text-black">Add</button>
            </form>
            <div className="grid gap-3 md:grid-cols-2">
              {offers.map((offer) => (
                <div key={offer.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="font-semibold text-white">{offer.title}</p>
                    <p className="text-sm text-zinc-400">{offer.description}</p>
                  </div>
                  <button onClick={() => deleteOffer(offer.id)} className="text-sm text-red-400">Delete</button>
                </div>
              ))}
            </div>
          </div>
        ) : <p className="text-zinc-400">Save a listing first to add offers.</p>
      )}

      {tab === 'analytics' && (
        <div className="grid gap-4 md:grid-cols-5">
          {Object.entries(analytics).map(([metric, count]) => (
            <div key={metric} className="rounded-2xl border border-white/10 bg-black/40 p-5 text-center">
              <p className="text-2xl font-semibold text-brand-gold">{count}</p>
              <p className="mt-1 text-sm capitalize text-zinc-400">{metric.replace('_', ' ')}</p>
            </div>
          ))}
        </div>
      )}

      {tab === 'import' && (
        <div className="space-y-6">
          <form onSubmit={submitImport} className="grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-6 md:grid-cols-3">
            <input
              type="file"
              accept=".csv,.json,.xml,.xlsx,.xls"
              onChange={(e) => setImportFile(e.target.files?.[0] || null)}
              className="text-sm text-zinc-400 md:col-span-2"
            />
            <button type="submit" disabled={!importFile || importBusy} className="rounded-full bg-brand-gold px-4 py-3 font-medium text-black disabled:opacity-60">
              {importBusy ? 'Importing...' : 'Upload and import'}
            </button>
            <p className="text-xs text-zinc-500 md:col-span-3">
              Supports CSV, JSON, XML, and Excel (.xlsx/.xls). Rows are matched to name/description/website/phone/email/address/city/state/country/category
              columns automatically, deduplicated against your existing listings by name, and imported as pending businesses.
            </p>
          </form>

          <div className="space-y-3">
            {importLogs.map((log) => (
              <div key={log.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <div>
                  <p className="font-semibold text-white">{log.file_name} <span className="text-xs uppercase text-zinc-500">{log.status}</span></p>
                  <p className="text-sm text-zinc-400">
                    {log.success_count} created · {log.duplicate_count} duplicates · {log.error_count} errors · {new Date(log.created_at).toLocaleString()}
                  </p>
                </div>
                {log.status === 'completed' && log.success_count > 0 && (
                  <button onClick={() => rollbackImport(log.id)} className="rounded-full border border-red-500/40 px-3 py-1.5 text-sm text-red-400">Rollback</button>
                )}
              </div>
            ))}
            {importLogs.length === 0 && <p className="text-zinc-400">No imports yet.</p>}
          </div>
        </div>
      )}

      {tab === 'developer' && (
        <div className="space-y-8">
          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">API keys</h2>
            <form onSubmit={createApiKey} className="grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-6 md:grid-cols-3">
              <input name="name" placeholder="Key name" required className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <select name="scope" className="rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none">
                <option value="read">Read only</option>
                <option value="write">Read + write</option>
              </select>
              <button type="submit" className="rounded-full bg-brand-gold px-4 py-3 font-medium text-black">Generate key</button>
            </form>
            {newApiKey && (
              <p className="mt-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                New key (shown once, copy it now): <span className="font-mono">{newApiKey}</span>
              </p>
            )}
            <div className="mt-4 space-y-2">
              {apiKeys.map((key) => (
                <div key={key.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                  <div>
                    <p className="text-white">{key.name} <span className="font-mono text-xs text-zinc-500">{key.key_prefix}...</span></p>
                    <p className="text-sm text-zinc-400">{(key.scopes || []).join(', ')} · {key.rate_limit_per_minute}/min · {key.status}</p>
                  </div>
                </div>
              ))}
              {apiKeys.length === 0 && <p className="text-zinc-400">No API keys yet. See <a href="/api-docs" className="text-brand-gold">API documentation</a>.</p>}
            </div>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-semibold text-white">Webhooks</h2>
            <form onSubmit={createWebhook} className="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-black/40 p-6">
              <input value={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} placeholder="https://your-endpoint.com/webhook" className="flex-1 rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" />
              <button type="submit" className="rounded-full bg-brand-gold px-4 py-3 font-medium text-black">Subscribe</button>
            </form>
            <div className="mt-4 space-y-2">
              {webhooks.map((hook) => (
                <div key={hook.id} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-white">{hook.url}</p>
                  <p className="text-sm text-zinc-400">{(hook.events || []).join(', ')} · {hook.status}</p>
                </div>
              ))}
              {webhooks.length === 0 && <p className="text-zinc-400">No webhooks subscribed yet. Events: business.created, business.updated, business.deleted, offer.created, promo.created.</p>}
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
