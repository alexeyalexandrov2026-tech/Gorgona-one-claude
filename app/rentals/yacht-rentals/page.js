import { getRentalsByCategorySlug } from '../../../lib/rentalsData';
import { RentalGrid } from '../RentalGrid';

export default function YachtRentalsPage() {
  const rentals = getRentalsByCategorySlug('yacht-rentals');

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="market-pill">Luxury Rentals</p>
        <h1 className="market-title mt-4">Yacht Rentals</h1>
        <p className="market-subtitle">Private yacht experiences for nightlife, events, and luxury outings.</p>
      </div>

      <RentalGrid rentals={rentals} emptyMessage="New yacht rental listings are being added. Check back soon." />
    </main>
  );
}
