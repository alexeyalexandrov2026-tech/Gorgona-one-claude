import { redirect } from 'next/navigation';
import { getAdminSession } from '../../lib/adminAuth';
import { getSupabaseAdminClient } from '../../lib/supabase/admin';
import { CsvImportForm } from './CsvImportForm';
import { getServerTranslations } from '../../lib/serverLocale';

export default async function AdminPage() {
  const { session, isAdmin } = await getAdminSession();

  if (!session) {
    redirect('/login?next=/admin');
  }

  const { t } = await getServerTranslations();

  if (!isAdmin) {
    return (
      <main className="flex-1 py-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
          <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.admin.title}</p>
          <h1 className="mt-2 text-3xl font-semibold text-white">{t.admin.accessRestrictedTitle}</h1>
          <p className="mt-3 max-w-xl text-zinc-400">
            {t.admin.accessRestrictedBody.replace('{email}', session.user.email)}
          </p>
        </div>
      </main>
    );
  }

  const adminClient = getSupabaseAdminClient();
  const [{ data: partnerApplications }, { data: newsletterSubscribers }] = await Promise.all([
    adminClient.from('partner_applications').select('*').order('created_at', { ascending: false }).limit(20),
    adminClient.from('newsletter_subscribers').select('*').order('subscribed_at', { ascending: false }).limit(20),
  ]);

  return (
    <main className="flex-1 py-10 space-y-8">
      <div className="rounded-3xl border border-brand-gold/20 bg-brand-gold/10 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.admin.title}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.admin.heading}</h1>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
        <h2 className="text-xl font-semibold text-white">{t.admin.csvImportTitle}</h2>
        <p className="mt-2 text-sm text-zinc-400">
          {t.admin.csvImportBody}
        </p>
        <CsvImportForm />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
          <h2 className="text-xl font-semibold text-white">{t.admin.partnerApplications}</h2>
          <div className="mt-4 space-y-3">
            {!partnerApplications || partnerApplications.length === 0 ? (
              <p className="text-sm text-zinc-400">{t.admin.noApplicationsYet}</p>
            ) : (
              partnerApplications.map((application) => (
                <div key={application.id} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                  <p className="font-semibold text-white">{application.company_name}</p>
                  <p className="text-sm text-zinc-400">{application.contact_email} · {application.category}</p>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-premium">
          <h2 className="text-xl font-semibold text-white">{t.admin.newsletterSubscribers}</h2>
          <div className="mt-4 space-y-3">
            {!newsletterSubscribers || newsletterSubscribers.length === 0 ? (
              <p className="text-sm text-zinc-400">{t.admin.noSubscribersYet}</p>
            ) : (
              newsletterSubscribers.map((subscriber) => (
                <div key={subscriber.id} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white">
                  {subscriber.email}
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
