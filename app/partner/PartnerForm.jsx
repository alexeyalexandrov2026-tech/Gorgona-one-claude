'use client';

import { useState } from 'react';

export function PartnerForm() {
  const [form, setForm] = useState({ companyName: '', website: '', contactEmail: '', category: 'Shopping' });
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

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
        setMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setMessage("Application received. Our partnerships team will follow up by email.");
      setForm({ companyName: '', website: '', contactEmail: '', category: 'Shopping' });
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <input
        required
        value={form.companyName}
        onChange={updateField('companyName')}
        placeholder="Company name"
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
      />
      <input
        value={form.website}
        onChange={updateField('website')}
        placeholder="Website"
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
      />
      <input
        type="email"
        required
        value={form.contactEmail}
        onChange={updateField('contactEmail')}
        placeholder="Contact email"
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
      />
      <select
        value={form.category}
        onChange={updateField('category')}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
      >
        <option>Shopping</option>
        <option>Fashion</option>
        <option>Restaurants</option>
        <option>Travel</option>
        <option>Sportsbooks</option>
        <option>Services</option>
      </select>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black disabled:opacity-60"
      >
        {status === 'loading' ? 'Submitting…' : 'Apply as partner'}
      </button>
      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-brand-gold'}`}>{message}</p>
      )}
    </form>
  );
}
