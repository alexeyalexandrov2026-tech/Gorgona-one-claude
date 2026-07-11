"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from '../components/LocaleProvider';
import { getTranslation } from '../../lib/i18n';
import { requestPasswordReset, updatePassword, isValidEmail } from '../../lib/auth';

// Handles both steps of the reset flow on one route: requesting the reset
// email (no active recovery session yet), and setting a new password once
// Supabase's recovery link has established a session in the browser.
export default function ResetPasswordPage() {
  const locale = useLocale();
  const t = getTranslation(locale);
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState('request');

  async function handleRequest(event) {
    event.preventDefault();
    setError('');
    setSuccess('');
    if (!isValidEmail(email)) {
      setError(t.auth.errorEmail);
      return;
    }
    setLoading(true);
    try {
      await requestPasswordReset(email, t.auth);
      setSuccess('If an account exists for that email, a reset link has been sent.');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleUpdate(event) {
    event.preventDefault();
    setError('');
    setSuccess('');
    if (newPassword.length < 6) {
      setError(t.auth.errorPasswordLength);
      return;
    }
    if (newPassword !== confirmPassword) {
      setError(t.auth.errorPasswordMatch);
      return;
    }
    setLoading(true);
    try {
      await updatePassword(newPassword, t.auth);
      setSuccess('Password updated. Redirecting to login...');
      setTimeout(() => router.push('/login'), 1200);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex flex-1 items-center justify-center py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.auth.pill}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Reset password</h1>

        <div className="mt-6 flex gap-2 rounded-full border border-white/10 bg-black/40 p-1">
          <button type="button" onClick={() => { setMode('request'); setError(''); setSuccess(''); }} className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${mode === 'request' ? 'bg-brand-gold text-black' : 'text-zinc-300'}`}>Request link</button>
          <button type="button" onClick={() => { setMode('update'); setError(''); setSuccess(''); }} className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${mode === 'update' ? 'bg-brand-gold text-black' : 'text-zinc-300'}`}>Set new password</button>
        </div>

        {mode === 'request' ? (
          <form onSubmit={handleRequest} noValidate className="mt-6 space-y-4">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" placeholder={t.auth.email} />
            {error && <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>}
            {success && <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">{success}</p>}
            <button type="submit" disabled={loading} className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black transition disabled:opacity-60">{loading ? t.auth.loading : 'Send reset link'}</button>
          </form>
        ) : (
          <form onSubmit={handleUpdate} noValidate className="mt-6 space-y-4">
            <input type="password" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" placeholder="New password" />
            <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none" placeholder={t.auth.confirmPassword} />
            {error && <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>}
            {success && <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">{success}</p>}
            <button type="submit" disabled={loading} className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black transition disabled:opacity-60">{loading ? t.auth.loading : 'Update password'}</button>
          </form>
        )}
      </div>
    </main>
  );
}
