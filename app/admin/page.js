export default function AdminPage() {
  return (
    <main className="flex-1 py-10">
      <div className="rounded-3xl border border-brand-gold/20 bg-brand-gold/10 p-8 shadow-premium">
        <p className="text-sm uppercase tracking-[0.3em] text-brand-gold">Protected Admin Dashboard</p>
        <h1 className="mt-2 text-3xl font-semibold text-white">Manage stores, coupons, sportsbook offers, and analytics</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            'Add stores',
            'Edit coupons',
            'Delete offers',
            'Import CSV data'
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-black/40 p-4 text-white">{item}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
