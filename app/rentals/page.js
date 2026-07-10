import { getRentals } from '../../lib/rentalsData';
import { RentalGrid } from './RentalGrid';

export default function RentalsPage() {
  const rentals = getRentals();

  return (
    <main className="flex-1 py-10">
      <div className="market-shell mb-8 rounded-[2rem] p-8">
        <p className="market-pill">Luxury Rentals</p>
        <h1 className="market-title mt-4">Premium cars, yachts, villas, and private experiences</h1>
        <p className="market-subtitle">A simple marketplace for high-value rentals and concierge-led bookings in Miami and beyond.</p>
      </div>

      <RentalGrid rentals={rentals} emptyMessage="New rental listings are being added. Check back soon." />
    </main>
  );
}
