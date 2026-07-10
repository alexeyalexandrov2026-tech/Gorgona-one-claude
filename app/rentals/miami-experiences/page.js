import { getRentalsByCategorySlug } from '../../../lib/rentalsData';
import { RentalGrid } from '../RentalGrid';

export default function MiamiExperiencesPage() {
  const rentals = getRentalsByCategorySlug('miami-experiences');

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="market-pill">Luxury Rentals</p>
        <h1 className="market-title mt-4">Miami Experiences</h1>
        <p className="market-subtitle">Private dining, nightlife, and premium events.</p>
      </div>

      <RentalGrid rentals={rentals} emptyMessage="New Miami experience listings are being added. Check back soon." />
    </main>
  );
}
