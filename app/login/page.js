"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { getTranslation } from '../../lib/i18n';
import { useLocale } from '../components/LocaleProvider';
import { useAuth } from '../components/AuthProvider';
import { signIn, signUp } from '../../lib/auth';

export default function LoginPage() {
  const locale = useLocale();
  const t = getTranslation(locale);
  const auth = useAuth();
  const router = useRouter();

  const [tab, setTab] = useState('signin');
  const [form, setForm] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function switchTab(nextTab) {
    setTab(nextTab);
    setError('');
    setSuccess('');
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    try {
      if (tab === 'signup') {
        const { needsEmailConfirmation } = await signUp(form, t.auth);
        if (needsEmailConfirmation) {
          setSuccess(t.auth.checkEmail);
          return;
        }
        setSuccess(t.auth.successSignUp);
      } else {
        await signIn(form, t.auth);
        setSuccess(t.auth.successSignIn);
      }
      await auth?.refresh();
      setTimeout(() => router.push('/profile'), 900);
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
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.auth.title}</h1>
        <p className="mt-3 text-zinc-400">{t.auth.subtitle}</p>

        <div className="mt-6 flex gap-2 rounded-full border border-white/10 bg-black/40 p-1">
          <button
            type="button"
            onClick={() => switchTab('signin')}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${tab === 'signin' ? 'bg-brand-gold text-black' : 'text-zinc-300 hover:text-brand-gold'}`}
          >
            {t.auth.signInTab}
          </button>
          <button
            type="button"
            onClick={() => switchTab('signup')}
            className={`flex-1 rounded-full px-4 py-2 text-sm font-medium transition ${tab === 'signup' ? 'bg-brand-gold text-black' : 'text-zinc-300 hover:text-brand-gold'}`}
          >
            {t.auth.signUpTab}
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          {tab === 'signup' && (
            <input
              value={form.name}
              onChange={(event) => handleChange('name', event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
              placeholder={t.auth.name}
            />
          )}
          <input
            type="email"
            value={form.email}
            onChange={(event) => handleChange('email', event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
            placeholder={t.auth.email}
          />
          <input
            type="password"
            value={form.password}
            onChange={(event) => handleChange('password', event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
            placeholder={t.auth.password}
          />
          {tab === 'signup' && (
            <input
              type="password"
              value={form.confirmPassword}
              onChange={(event) => handleChange('confirmPassword', event.target.value)}
              className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
              placeholder={t.auth.confirmPassword}
            />
          )}

          {error && <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">{error}</p>}
          {success && <p className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">{success}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black transition disabled:opacity-60"
          >
            {loading ? t.auth.loading : t.auth.continueLabel}
          </button>
        </form>
      </div>
    </main>
  );
}
