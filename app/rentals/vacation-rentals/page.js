import { getRentalsByCategorySlug } from '../../../lib/rentalsData';
import { RentalGrid } from '../RentalGrid';
import { getServerTranslations } from '../../../lib/serverLocale';

export default async function VacationRentalsPage() {
  const rentals = getRentalsByCategorySlug('vacation-rentals');
  const { t } = await getServerTranslations();

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="market-pill">{t.rentals.title}</p>
        <h1 className="market-title mt-4">{t.rentals.vacationRentalsTitle}</h1>
        <p className="market-subtitle">{t.rentals.vacationRentalsSubtitle}</p>
      </div>

      <RentalGrid rentals={rentals} emptyMessage={t.rentals.checkBackSoon} t={t} />
    </main>
  );
}
