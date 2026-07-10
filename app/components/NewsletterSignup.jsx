'use client';

import { useState } from 'react';

export function NewsletterSignup() {
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
        setMessage(data.error || 'Something went wrong. Please try again.');
        return;
      }

      setStatus('success');
      setMessage('You are subscribed. Watch for verified deals in your inbox.');
      setEmail('');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <div className="market-shell rounded-[2rem] border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-8">
      <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Stay in the loop</p>
      <h2 className="mt-2 text-2xl font-semibold text-white">Get verified deals before anyone else</h2>
      <p className="mt-2 max-w-xl text-zinc-400">
        Weekly picks on stores, sportsbook bonuses, and premium rentals — no spam, unsubscribe anytime.
      </p>
      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3 sm:flex-row">
        <input
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="flex-1 rounded-full border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full bg-brand-gold px-6 py-3 text-sm font-medium text-black disabled:opacity-60"
        >
          {status === 'loading' ? 'Subscribing…' : 'Subscribe'}
        </button>
      </form>
      {message && (
        <p className={`mt-3 text-sm ${status === 'error' ? 'text-red-400' : 'text-brand-gold'}`}>{message}</p>
      )}
    </div>
  );
}
