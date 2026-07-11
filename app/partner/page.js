"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from '../components/LocaleProvider';
import { getTranslation } from '../../lib/i18n';
import { isValidEmail } from '../../lib/auth';
import { useAuth } from '../components/AuthProvider';
import { getSupabaseClient, isSupabaseConfigured } from '../../lib/supabaseClient';

export default function PartnerPage() {
  const locale = useLocale();
  const t = getTranslation(locale);
  const auth = useAuth();
  const supabase = getSupabaseClient();

  const categoryOptions = [
    t.categories.shopping,
    t.categories.fashion,
    t.categories.restaurants,
    t.categories.kosherRestaurants,
    t.categories.kosherStores,
    t.categories.travel,
    'Sportsbooks',
    'Services'
  ];

  const [form, setForm] = useState({ companyName: '', website: '', contactEmail: '', category: categoryOptions[0] });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess('');

    if (!form.companyName.trim() || !form.website.trim() || !form.contactEmail.trim()) {
      setError(t.auth.errorRequired);
      return;
    }
    if (!isValidEmail(form.contactEmail)) {
      setError(t.auth.errorEmail);
      return;
    }

    if (!isSupabaseConfigured() || !supabase) {
      setLoading(true);
      await new Promise((resolve) => setTimeout(resolve, 600));
      setLoading(false);
      setSuccess(t.partnerForm.successSubmit);
      setForm({ companyName: '', website: '', contactEmail: '', category: categoryOptions[0] });
      return;
    }

    if (!auth?.session) {
      setError('Create a free account first, then apply as a partner from this page.');
      return;
    }

    setLoading(true);
    const slug = `${form.companyName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}-${Date.now().toString(36)}`;
    const { error: insertError } = await supabase.from('partner_accounts').insert({
      owner_id: auth.session.id,
      company_name: form.companyName.trim(),
      slug,
      website: form.website.trim(),
      contact_email: form.contactEmail.trim()
    });
    setLoading(false);
    if (insertError) { setError(insertError.message); return; }
    setSuccess(t.partnerForm.successSubmit);
    setForm({ companyName: '', website: '', contactEmail: '', category: categoryOptions[0] });
  }

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Partner Portal</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Register your business and manage promotions</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">GORGONA ONE supports merchant onboarding, offer management, promo code publishing, verification workflows, location-based promotions, and affiliate-ready analytics for growing brands.</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold text-white">{t.partnerForm.title}</h2>
            {isSupabaseConfigured() && !auth?.session && (
              <p className="mt-2 text-sm text-zinc-400">
                <Link href="/login" className="text-brand-gold">Create a free account</Link> first, then come back here to submit your application.
              </p>
            )}
            <form onSubmit={handleSubmit} noValidate className="mt-4 space-y-3">
              <input
                value={form.companyName}
                onChange={(event) => handleChange('companyName', event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
                placeholder={t.partnerForm.companyName}
              />
              <input
                value={form.website}
                onChange={(event) => handleChange('website', event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
                placeholder={t.partnerForm.website}
              />
              <input
                type="email"
                value={form.contactEmail}
                onChange={(event) => handleChange('contactEmail', event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
                placeholder={t.partnerForm.contactEmail}
              />
              <select
                value={form.category}
                onChange={(event) => handleChange('category', event.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
              >
                {categoryOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>

              {error && <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>}
              {success && <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">{success}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black transition disabled:opacity-60"
              >
                {loading ? t.auth.loading : t.partnerForm.submit}
              </button>
            </form>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">Partner dashboard features</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              <li>• Add new promotions and promo codes</li>
              <li>• Upload banners and company information</li>
              <li>• Manage multiple stores and locations</li>
              <li>• Activate or deactivate offers instantly</li>
              <li>• Track clicks, conversions, and affiliate performance</li>
            </ul>
            <Link href="/admin" className="mt-6 inline-flex rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-gold">View admin tools</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
