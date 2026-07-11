'use client';

import { useState } from 'react';
import { useTranslations } from './LocaleProvider';

export function NewsletterSignup() {
  const t = useTranslations();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error || t.errors.genericError);
        return;
      }

      setStatus('success');
      setMessage(t.newsletter.successMessage);
      setEmail('');
    } catch {
      setStatus('error');
      setMessage(t.errors.networkError);
    }
  }

  return (
    <div className="market-shell rounded-[2rem] border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.newsletter.title}</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">{t.newsletter.heading}</h2>
      <p className="mt-2 max-w-xl text-zinc-400">{t.newsletter.subtitle}</p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t.newsletter.placeholder}
          className="flex-1 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-brand-gold px-6 py-3 text-sm font-medium text-black disabled:opacity-60"
        >
          {status === 'loading' ? t.common.subscribing : t.common.subscribe}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm ${status === 'error' ? 'text-red-400' : 'text-brand-gold'}`}>{message}</p>
      )}
    </div>
  );
}
