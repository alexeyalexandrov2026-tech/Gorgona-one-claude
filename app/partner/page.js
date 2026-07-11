import Link from 'next/link';
import { PartnerForm } from './PartnerForm';
import { getServerTranslations } from '../../lib/serverLocale';

export default async function PartnerPage() {
  const { t } = await getServerTranslations();

  const features = [t.partner.feature1, t.partner.feature2, t.partner.feature3, t.partner.feature4, t.partner.feature5];

  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-brand-gold/20 bg-gradient-to-br from-brand-gold/15 to-black p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{t.partner.title}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{t.partner.heading}</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">{t.partner.intro}</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
            <h2 className="text-xl font-semibold text-white">{t.partner.registrationTitle}</h2>
            <PartnerForm />
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-xl font-semibold text-white">{t.partner.dashboardFeaturesTitle}</h2>
            <ul className="mt-4 space-y-3 text-sm text-zinc-400">
              {features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Link href="/admin" className="mt-6 inline-flex rounded-full border border-brand-gold/40 px-4 py-2 text-sm font-medium text-brand-gold">{t.partner.viewAdminTools}</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
