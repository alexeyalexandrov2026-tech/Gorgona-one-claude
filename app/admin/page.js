"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../components/AuthProvider';
import { getSupabaseClient, isSupabaseConfigured } from '../../lib/supabaseClient';

const TABS = ['businesses', 'users', 'categories', 'promo codes', 'partners', 'feeds'];

export default function AdminPage() {
  const auth = useAuth();
  const router = useRouter();
  const supabase = getSupabaseClient();

  const [tab, setTab] = useState('businesses');
  const [businesses, setBusinesses] = useState([]);
  const [users, setUsers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [promoCodes, setPromoCodes] = useState([]);
  const [partners, setPartners] = useState([]);
  const [feeds, setFeeds] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: '', icon: '' });
  const [newFeed, setNewFeed] = useState({ partner_account_id: '', name: '', url: '', feed_type: 'json', schedule: 'daily' });
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!auth?.loading && (!auth?.session || auth.session.role !== 'admin')) router.push('/');
  }, [auth, router]);

  async function loadAll() {
    if (!supabase) return;
    const [b, u, c, p, pa, f] = await Promise.all([
      supabase.from('businesses').select('*,categories(name)').order('created_at', { ascending: false }),
      supabase.from('users').select('*').order('created_at', { ascending: false }),
      supabase.from('categories').select('*').order('name'),
      supabase.from('promo_codes').select('*,businesses(name)').order('created_at', { ascending: false }),
      supabase.from('partner_accounts').select('*').order('created_at', { ascending: false }),
      supabase.from('external_feeds').select('*').order('created_at', { ascending: false })
    ]);
    setBusinesses(b.data || []);
    setUsers(u.data || []);
    setCategories(c.data || []);
    setPromoCodes(p.data || []);
    setPartners(pa.data || []);
    setFeeds(f.data || []);
  }

  useEffect(() => {
    if (supabase && auth?.session?.role === 'admin') loadAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [supabase, auth?.session]);

  async function getAccessToken() {
    const { data } = await supabase.auth.getSession();
    return data?.session?.access_token;
  }

  async function setBusinessStatus(id, status) {
    const token = await getAccessToken();
    const response = await fetch(`/api/admin/businesses/${id}`, {
      method: 'PUT',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    const body = await response.json();
    if (!response.ok) { setMessage(body.error || 'Could not update status.'); return; }
    setBusinesses((prev) => prev.map((b) => (b.id === id ? { ...b, status } : b)));
  }

  async function deleteBusiness(id) {
    if (!confirm('Delete this business permanently?')) return;
    const token = await getAccessToken();
    const response = await fetch(`/api/admin/businesses/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${token}` } });
    if (!response.ok) { const body = await response.json(); setMessage(body.error || 'Could not delete business.'); return; }
    setBusinesses((prev) => prev.filter((b) => b.id !== id));
  }

  async function setUserRole(id, role) {
    const { error } = await supabase.from('users').update({ role }).eq('id', id);
    if (error) { setMessage(error.message); return; }
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role } : u)));
  }

  async function suspendUser(id, status) {
    const { error } = await supabase.from('users').update({ status }).eq('id', id);
    if (error) { setMessage(error.message); return; }
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, status } : u)));
  }

  async function addCategory(event) {
    event.preventDefault();
    if (!newCategory.name.trim()) return;
    const slug = newCategory.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const { data, error } = await supabase.from('categories').insert({ name: newCategory.name, slug, icon: newCategory.icon }).select().single();
    if (error) { setMessage(error.message); return; }
    setCategories((prev) => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
    setNewCategory({ name: '', icon: '' });
  }

  async function deleteCategory(id) {
    const { error } = await supabase.from('categories').delete().eq('id', id);
    if (error) { setMessage(error.message); return; }
    setCategories((prev) => prev.filter((c) => c.id !== id));
  }

  async function setPromoStatus(id, status) {
    const { error } = await supabase.from('promo_codes').update({ status }).eq('id', id);
    if (error) { setMessage(error.message); return; }
    setPromoCodes((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  }

  async function deletePromo(id) {
    const { error } = await supabase.from('promo_codes').delete().eq('id', id);
    if (error) { setMessage(error.message); return; }
    setPromoCodes((prev) => prev.filter((p) => p.id !== id));
  }

  async function setPartnerStatus(id, status) {
    const { error } = await supabase.from('partner_accounts').update({ status }).eq('id', id);
    if (error) { setMessage(error.message); return; }
    setPartners((prev) => prev.map((p) => (p.id === id ? { ...p, status } : p)));
  }

  async function setFeedStatus(id, status) {
    const { error } = await supabase.from('external_feeds').update({ status }).eq('id', id);
    if (error) { setMessage(error.message); return; }
    setFeeds((prev) => prev.map((f) => (f.id === id ? { ...f, status } : f)));
  }

  async function addFeed(event) {
    event.preventDefault();
    if (!newFeed.partner_account_id || !newFeed.name.trim() || !newFeed.url.trim()) {
      setMessage('Partner, name, and URL are required to add a feed.');
      return;
    }
    const partner = partners.find((p) => p.id === newFeed.partner_account_id);
    const slug = `${newFeed.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now().toString(36)}`;
    const { data, error } = await supabase.from('external_feeds').insert({
      owner_id: partner?.owner_id,
      partner_account_id: newFeed.partner_account_id,
      name: newFeed.name,
      slug,
      url: newFeed.url,
      feed_type: newFeed.feed_type,
      schedule: newFeed.schedule
    }).select().single();
    if (error) { setMessage(error.message); return; }
    setFeeds((prev) => [data, ...prev]);
    setNewFeed({ partner_account_id: '', name: '', url: '', feed_type: 'json', schedule: 'daily' });
  }

  async function deleteFeed(id) {
    if (!confirm('Delete this feed permanently?')) return;
    const { error } = await supabase.from('external_feeds').delete().eq('id', id);
    if (error) { setMessage(error.message); return; }
    setFeeds((prev) => prev.filter((f) => f.id !== id));
  }

  if (!isSupabaseConfigured()) {
    return (
      <main className="flex-1 py-10">
        <p className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-6 text-zinc-300">
          The admin panel is not connected to a database yet. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable it.
        </p>
      </main>
    );
  }

  if (auth?.loading || !auth?.session || auth.session.role !== 'admin') {
    return <main className="flex-1 py-10"><p className="text-zinc-400">Loading...</p></main>;
  }

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-brand-gold/20 bg-brand-gold/10 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Protected Admin Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Manage businesses, users, categories, promo codes, and partners</h1>
      </div>

      {message && <p className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{message}</p>}

      <div className="mt-6 mb-6 flex flex-wrap gap-2 rounded-full border border-white/10 bg-black/40 p-1 w-fit">
        {TABS.map((key) => (
          <button key={key} onClick={() => setTab(key)} className={`rounded-full px-4 py-2 text-sm font-medium capitalize transition ${tab === key ? 'bg-brand-gold text-black' : 'text-zinc-300'}`}>{key}</button>
        ))}
      </div>

      {tab === 'businesses' && (
        <div className="space-y-3">
          {businesses.map((b) => (
            <div key={b.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div>
                <p className="font-semibold text-white">{b.name} <span className="text-xs uppercase text-zinc-500">{b.status}</span></p>
                <p className="text-sm text-zinc-400">{b.categories?.name} · {b.city}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setBusinessStatus(b.id, 'approved')} className="rounded-full border border-emerald-500/40 px-3 py-1.5 text-sm text-emerald-400">Approve</button>
                <button onClick={() => setBusinessStatus(b.id, 'rejected')} className="rounded-full border border-red-500/40 px-3 py-1.5 text-sm text-red-400">Reject</button>
                <button onClick={() => setBusinessStatus(b.id, 'suspended')} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">Suspend</button>
                <button onClick={() => deleteBusiness(b.id)} className="rounded-full border border-red-500/40 px-3 py-1.5 text-sm text-red-400">Delete</button>
              </div>
            </div>
          ))}
          {businesses.length === 0 && <p className="text-zinc-400">No businesses submitted yet.</p>}
        </div>
      )}

      {tab === 'users' && (
        <div className="space-y-3">
          {users.map((u) => (
            <div key={u.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div>
                <p className="font-semibold text-white">{u.name || u.email}</p>
                <p className="text-sm text-zinc-400">{u.email} · {u.status}</p>
              </div>
              <div className="flex gap-2">
                <select value={u.role} onChange={(e) => setUserRole(u.id, e.target.value)} className="rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-sm text-white">
                  <option value="customer">Customer</option>
                  <option value="business_owner">Business Owner</option>
                  <option value="admin">Admin</option>
                </select>
                <button onClick={() => suspendUser(u.id, u.status === 'active' ? 'suspended' : 'active')} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">
                  {u.status === 'active' ? 'Suspend' : 'Reactivate'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'categories' && (
        <div className="space-y-4">
          <form onSubmit={addCategory} className="flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
            <input value={newCategory.name} onChange={(e) => setNewCategory((p) => ({ ...p, name: e.target.value }))} placeholder="Category name" className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none" />
            <input value={newCategory.icon} onChange={(e) => setNewCategory((p) => ({ ...p, icon: e.target.value }))} placeholder="Icon (emoji)" className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none" />
            <button type="submit" className="rounded-full bg-brand-gold px-4 py-2 font-medium text-black">Add category</button>
          </form>
          <div className="grid gap-3 md:grid-cols-3">
            {categories.map((c) => (
              <div key={c.id} className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-white">{c.icon} {c.name}</p>
                <button onClick={() => deleteCategory(c.id)} className="text-sm text-red-400">Delete</button>
              </div>
            ))}
          </div>
        </div>
      )}

      {tab === 'promo codes' && (
        <div className="space-y-3">
          {promoCodes.map((p) => (
            <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div>
                <p className="font-mono text-brand-gold">{p.code}</p>
                <p className="text-sm text-zinc-400">{p.businesses?.name} · {p.status}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setPromoStatus(p.id, 'active')} className="rounded-full border border-emerald-500/40 px-3 py-1.5 text-sm text-emerald-400">Activate</button>
                <button onClick={() => setPromoStatus(p.id, 'disabled')} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">Disable</button>
                <button onClick={() => deletePromo(p.id)} className="rounded-full border border-red-500/40 px-3 py-1.5 text-sm text-red-400">Delete</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'partners' && (
        <div className="space-y-3">
          {partners.map((p) => (
            <div key={p.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
              <div>
                <p className="font-semibold text-white">{p.company_name}</p>
                <p className="text-sm text-zinc-400">{p.contact_email} · {p.tier} · {p.status}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setPartnerStatus(p.id, 'approved')} className="rounded-full border border-emerald-500/40 px-3 py-1.5 text-sm text-emerald-400">Approve</button>
                <button onClick={() => setPartnerStatus(p.id, 'suspended')} className="rounded-full border border-red-500/40 px-3 py-1.5 text-sm text-red-400">Suspend</button>
              </div>
            </div>
          ))}
          {partners.length === 0 && <p className="text-zinc-400">No partner applications yet.</p>}
        </div>
      )}

      {tab === 'feeds' && (
        <div className="space-y-4">
          <form onSubmit={addFeed} className="grid gap-3 rounded-2xl border border-white/10 bg-black/40 p-4 md:grid-cols-3">
            <select value={newFeed.partner_account_id} onChange={(e) => setNewFeed((p) => ({ ...p, partner_account_id: e.target.value }))} className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none">
              <option value="">Select partner</option>
              {partners.map((p) => <option key={p.id} value={p.id}>{p.company_name}</option>)}
            </select>
            <input value={newFeed.name} onChange={(e) => setNewFeed((p) => ({ ...p, name: e.target.value }))} placeholder="Feed name" className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none" />
            <select value={newFeed.feed_type} onChange={(e) => setNewFeed((p) => ({ ...p, feed_type: e.target.value }))} className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none">
              <option value="json">JSON</option>
              <option value="csv">CSV</option>
              <option value="xml">XML</option>
            </select>
            <input value={newFeed.url} onChange={(e) => setNewFeed((p) => ({ ...p, url: e.target.value }))} placeholder="Feed URL" className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none md:col-span-2" />
            <select value={newFeed.schedule} onChange={(e) => setNewFeed((p) => ({ ...p, schedule: e.target.value }))} className="rounded-xl border border-white/10 bg-black/50 px-4 py-2 text-white outline-none">
              <option value="hourly">Hourly</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="manual">Manual</option>
            </select>
            <button type="submit" className="rounded-full bg-brand-gold px-4 py-2 font-medium text-black md:col-span-3">Add feed</button>
          </form>
          <div className="space-y-3">
            {feeds.map((f) => (
              <div key={f.id} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/40 p-4">
                <div>
                  <p className="font-semibold text-white">{f.name}</p>
                  <p className="text-sm text-zinc-400">{f.feed_type} · {f.schedule} · {f.status} {f.last_synced_at ? `· last sync ${new Date(f.last_synced_at).toLocaleString()}` : ''}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => setFeedStatus(f.id, 'active')} className="rounded-full border border-emerald-500/40 px-3 py-1.5 text-sm text-emerald-400">Activate</button>
                  <button onClick={() => setFeedStatus(f.id, 'paused')} className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-zinc-300">Pause</button>
                  <button onClick={() => deleteFeed(f.id)} className="rounded-full border border-red-500/40 px-3 py-1.5 text-sm text-red-400">Delete</button>
                </div>
              </div>
            ))}
            {feeds.length === 0 && <p className="text-zinc-400">No external feeds configured yet.</p>}
          </div>
        </div>
      )}
    </main>
  );
}
