import { notFound } from 'next/navigation';
import { getEventCategoryBySlug, getEventsByCategory, paginate } from '../../../../lib/eventsData';
import { EventGrid } from '../../EventGrid';
import { EventPagination } from '../../EventPagination';
import { getServerTranslations } from '../../../../lib/serverLocale';

export const dynamic = 'force-dynamic';

export default async function EventCategoryPage({ params, searchParams }) {
  const category = getEventCategoryBySlug(params.category);

  if (!category) {
    notFound();
  }

  const { t } = await getServerTranslations();
  const page = Number(searchParams?.page) || 1;
  const { items, currentPage, totalPages } = paginate(getEventsByCategory(params.category), page, 9);

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="market-pill">{category.icon} {t.events.categoryLabels[category.slug] || category.label}</p>
        <h1 className="market-title mt-4">{t.events.categoryLabels[category.slug] || category.label}</h1>
      </div>

      <EventGrid events={items} emptyMessage={t.events.comingSoon} t={t} />
      <EventPagination currentPage={currentPage} totalPages={totalPages} basePath={`/events/category/${params.category}`} t={t} />
    </main>
  );
}
