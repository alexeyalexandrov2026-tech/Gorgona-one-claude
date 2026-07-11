'use client';

import { useState } from 'react';
import { useTranslations } from '../components/LocaleProvider';

export function PartnerForm() {
  const t = useTranslations();
  const [form, setForm] = useState({ companyName: '', website: '', contactEmail: '', category: 'Shopping' });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const categoryOptions = [
    { value: 'Shopping', label: t.partner.categoryShopping },
    { value: 'Fashion', label: t.partner.categoryFashion },
    { value: 'Restaurants', label: t.partner.categoryRestaurants },
    { value: 'Travel', label: t.partner.categoryTravel },
    { value: 'Sportsbooks', label: t.partner.categorySportsbooks },
    { value: 'Services', label: t.partner.categoryServices }
  ];

  function updateField(field) {
    return (event) => setForm((current) => ({ ...current, [field]: event.target.value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/partner-applications', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error || t.errors.genericError);
        return;
      }

      setStatus('success');
      setMessage(t.partner.successMessage);
      setForm({ companyName: '', website: '', contactEmail: '', category: 'Shopping' });
    } catch {
      setStatus('error');
      setMessage(t.errors.networkError);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input
        required
        value={form.companyName}
        onChange={updateField('companyName')}
        placeholder={t.partner.companyPlaceholder}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
      />
      <input
        value={form.website}
        onChange={updateField('website')}
        placeholder={t.partner.websitePlaceholder}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
      />
      <input
        type="email"
        required
        value={form.contactEmail}
        onChange={updateField('contactEmail')}
        placeholder={t.partner.emailPlaceholder}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
      />
      <select
        value={form.category}
        onChange={updateField('category')}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
      >
        {categoryOptions.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black disabled:opacity-60"
      >
        {status === 'loading' ? t.partner.submitting : t.partner.applyButton}
      </button>
      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-brand-gold'}`}>{message}</p>
      )}
    </form>
  );
}
