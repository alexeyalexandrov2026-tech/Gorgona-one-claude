import { redirect } from 'next/navigation';
import { getSupabaseServerClient } from '../../lib/supabase/server';
import { SignOutButton } from '../components/SignOutButton';
import { getServerTranslations } from '../../lib/serverLocale';

export default async function ProfilePage() {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    redirect('/login');
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  const { t } = await getServerTranslations();

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.profile.title}</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">{session.user.email}</h1>
          </div>
          <SignOutButton />
        </div>
        <p className="mt-4 max-w-2xl text-zinc-400">
          {t.profile.syncNote}
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-zinc-400">{t.profile.savedCoupons}</p>
            <p className="mt-2 text-2xl font-semibold text-brand-gold">0</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-zinc-400">{t.profile.favoriteStores}</p>
            <p className="mt-2 text-2xl font-semibold text-brand-gold">0</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
            <p className="text-sm text-zinc-400">{t.profile.couponHistory}</p>
            <p className="mt-2 text-2xl font-semibold text-brand-gold">0</p>
          </div>
        </div>
      </div>
    </main>
  );
}
