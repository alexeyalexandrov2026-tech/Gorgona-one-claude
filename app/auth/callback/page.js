"use client";

// Landing point for Supabase email confirmation and magic links.
// getSupabaseClient() already has detectSessionInUrl enabled, so the
// session is established automatically on load - this page just routes
// the user onward once that resolves.
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../components/AuthProvider';

export default function AuthCallbackPage() {
  const router = useRouter();
  const auth = useAuth();
  const [status, setStatus] = useState('Verifying...');

  useEffect(() => {
    (async () => {
      await auth?.refresh();
      setStatus('Success! Redirecting...');
      setTimeout(() => router.replace('/profile'), 800);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="flex flex-1 items-center justify-center py-16">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-white">
        <p>{status}</p>
      </div>
    </main>
  );
}
