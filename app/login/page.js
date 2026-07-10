'use client';

import { Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { getSupabaseBrowserClient } from '../../lib/supabase/client';

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [mode, setMode] = useState('signIn');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('idle');
  const [message, setMessage] = useState('');

  const supabase = getSupabaseBrowserClient();

  async function handleSubmit(event) {
    event.preventDefault();
    if (!supabase) {
      setStatus('error');
      setMessage('Sign-in is not configured yet. Set the Supabase environment variables to enable it.');
      return;
    }

    setStatus('loading');
    setMessage('');

    const { error } =
      mode === 'signIn'
        ? await supabase.auth.signInWithPassword({ email, password })
        : await supabase.auth.signUp({ email, password });

    if (error) {
      setStatus('error');
      setMessage(error.message);
      return;
    }

    if (mode === 'signUp') {
      setStatus('success');
      setMessage('Account created. Check your email to confirm, then sign in.');
      setMode('signIn');
      return;
    }

    router.push(searchParams.get('next') || '/profile');
    router.refresh();
  }

  return (
    <main className="flex flex-1 items-center justify-center py-16">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">User System</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{mode === 'signIn' ? 'Welcome back' : 'Create your account'}</h1>
        <p className="mt-3 text-zinc-400">Sign in to save coupons, follow favorite stores, and track your offers.</p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
          />
          <input
            type="password"
            required
            minLength={6}
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password"
            className="w-full rounded-2xl border border-white/10 bg-black/50 px-4 py-3 text-white outline-none"
          />
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full rounded-full bg-brand-gold px-4 py-3 font-medium text-black disabled:opacity-60"
          >
            {status === 'loading' ? 'Please wait…' : mode === 'signIn' ? 'Continue' : 'Sign up'}
          </button>
        </form>
        {message && (
          <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-400' : 'text-brand-gold'}`}>{message}</p>
        )}
        <button
          type="button"
          onClick={() => {
            setMode(mode === 'signIn' ? 'signUp' : 'signIn');
            setStatus('idle');
            setMessage('');
          }}
          className="mt-6 text-sm text-zinc-400 hover:text-brand-gold"
        >
          {mode === 'signIn' ? "Don't have an account? Sign up" : 'Already have an account? Sign in'}
        </button>
      </div>
    </main>
  );
}
