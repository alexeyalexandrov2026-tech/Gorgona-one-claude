import { getRentalsByCategorySlug } from '../../../lib/rentalsData';
import { RentalGrid } from '../RentalGrid';

export default function CarRentalsPage() {
  const rentals = getRentalsByCategorySlug('car-rentals');

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="market-pill">Luxury Rentals</p>
        <h1 className="market-title mt-4">Car Rentals</h1>
        <p className="market-subtitle">Luxury cars and premium experiences.</p>
      </div>

      <RentalGrid rentals={rentals} emptyMessage="New car rental listings are being added. Check back soon." />
    </main>
  );
}
