'use client';

import { useRouter } from 'next/navigation';
import { getSupabaseBrowserClient } from '../../lib/supabase/client';

export function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = getSupabaseBrowserClient();
    if (supabase) {
      await supabase.auth.signOut();
    }
    router.push('/login');
    router.refresh();
  }

  return (
    <button
      onClick={handleSignOut}
      className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-300 transition hover:border-brand-gold hover:text-brand-gold"
    >
      Sign out
    </button>
  );
}
