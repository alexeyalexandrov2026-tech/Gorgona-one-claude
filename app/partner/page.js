"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useLocale } from '../components/LocaleProvider';
import { getTranslation } from '../../lib/i18n';
import { isValidEmail } from '../../lib/auth';

export default function PartnerPage() {
  const locale = useLocale();
  const t = getTranslation(locale);

  const categoryOptions = [
    t.categories.shopping,
    t.categories.fashion,
    t.categories.restaurants,
    t.categories.kosherRestaurants,
    t.categories.kosherStores,
    t.categories.travel,
    t.categories.sportsbooks,
    t.categories.services
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

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setLoading(false);
    setSuccess(t.partnerForm.successSubmit);
    setForm({ companyName: '', website: '', contactEmail: '', category: categoryOptions[0] });
  }

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.partnerForm.pill}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.partnerForm.formTitle}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">{t.partnerForm.description}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold text-white">{t.partnerForm.title}</h2>
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
            <h2 className="text-xl font-semibold text-white">{t.partnerForm.dashboardFeaturesTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              {t.partnerForm.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Link href="/admin" className="mt-6 inline-flex rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-gold">{t.partnerForm.viewAdminTools}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
