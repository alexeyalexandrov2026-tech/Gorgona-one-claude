import { getRentalsByCategorySlug } from '../../../lib/rentalsData';
import { RentalGrid } from '../RentalGrid';

export default function VacationRentalsPage() {
  const rentals = getRentalsByCategorySlug('vacation-rentals');

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="market-pill">Luxury Rentals</p>
        <h1 className="market-title mt-4">Vacation Rentals</h1>
        <p className="market-subtitle">Short-term stays, villas, and premium residences in key markets.</p>
      </div>

      <RentalGrid rentals={rentals} emptyMessage="New vacation rental listings are being added. Check back soon." />
    </main>
  );
}
