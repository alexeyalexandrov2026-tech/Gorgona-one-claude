'use client';

import { useState } from 'react';

export function CsvImportForm() {
  const [csv, setCsv] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/admin/import-stores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ csv }),
      });
      const data = await response.json();

      if (!response.ok) {
        setStatus('error');
        setMessage(data.error || 'Import failed.');
        return;
      }

      setStatus('success');
      setMessage(`Imported ${data.imported} store${data.imported === 1 ? '' : 's'}.`);
      setCsv('');
    } catch {
      setStatus('error');
      setMessage('Network error. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 space-y-3">
      <textarea
        required
        value={csv}
        onChange={(event) => setCsv(event.target.value)}
        rows={6}
        placeholder="name,slug,category,logo,website,affiliate_link,description"
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-sm text-white outline-none"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-full bg-brand-gold px-4 py-3 text-sm font-medium text-black disabled:opacity-60"
      >
        {status === 'loading' ? 'Importing…' : 'Import CSV'}
      </button>
      {message && (
        <p className={`text-sm ${status === 'error' ? 'text-red-400' : 'text-brand-gold'}`}>{message}</p>
      )}
    </form>
  );
}
