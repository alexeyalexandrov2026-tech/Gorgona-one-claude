import { notFound } from 'next/navigation';
import { getBusinessBySlug } from '../../../lib/businesses';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const { business } = await getBusinessBySlug(params.slug);
  if (!business) return { title: 'Business | GORGONA ONE' };
  return {
    title: `${business.name} | GORGONA ONE`,
    description: business.description?.slice(0, 155) || `${business.name} on GORGONA ONE.`,
    openGraph: {
      title: business.name,
      description: business.description,
      images: business.banner_url ? [{ url: business.banner_url }] : undefined
    }
  };
}

export default async function BusinessDetailPage({ params }) {
  const { business, configured } = await getBusinessBySlug(params.slug);

  if (!configured) {
    return (
      <main className="flex-1 py-10">
        <p className="rounded-2xl border border-brand-gold/20 bg-brand-gold/10 p-6 text-zinc-300">
          The business directory is not connected to a database yet.
        </p>
      </main>
    );
  }

  if (!business) return notFound();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    description: business.description,
    image: business.logo_url || business.banner_url,
    url: business.website,
    telephone: business.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: business.address,
      addressLocality: business.city,
      addressRegion: business.state,
      addressCountry: business.country
    }
  };

  return (
    <main className="flex-1 py-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">{business.categories?.name || 'Business'}</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">{business.name}</h1>
        {business.city && <p className="mt-2 text-zinc-400">{business.city}{business.state ? `, ${business.state}` : ''}</p>}
        <p className="mt-4 max-w-2xl text-zinc-300">{business.description}</p>
        {business.website && (
          <a href={business.website} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex rounded-full bg-brand-gold px-5 py-3 font-medium text-black">
            Visit website
          </a>
        )}
      </div>

      {business.offers?.filter((o) => o.status === 'active').length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-white">Offers</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {business.offers.filter((o) => o.status === 'active').map((offer) => (
              <div key={offer.id} className="market-card rounded-2xl p-5">
                <h3 className="font-semibold text-white">{offer.title}</h3>
                <p className="mt-2 text-sm text-zinc-400">{offer.description}</p>
                {offer.discount_percent && <p className="mt-2 text-brand-gold">{offer.discount_percent}% off</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {business.promo_codes?.filter((p) => p.status === 'active').length > 0 && (
        <section className="mb-8">
          <h2 className="mb-4 text-xl font-semibold text-white">Promo Codes</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {business.promo_codes.filter((p) => p.status === 'active').map((promo) => (
              <div key={promo.id} className="market-card rounded-2xl p-5">
                <p className="font-mono text-lg text-brand-gold">{promo.code}</p>
                <p className="mt-2 text-sm text-zinc-400">{promo.description || promo.discount}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {business.reviews?.filter((r) => r.status === 'published').length > 0 && (
        <section>
          <h2 className="mb-4 text-xl font-semibold text-white">Reviews</h2>
          <div className="space-y-4">
            {business.reviews.filter((r) => r.status === 'published').map((review) => (
              <div key={review.id} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-brand-gold">{'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</p>
                <p className="mt-2 text-sm text-zinc-400">{review.comment}</p>
              </div>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
