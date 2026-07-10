export function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 py-8 text-sm text-zinc-400">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 GORGONA ONE. Premium deals, verified offers, and affiliate-ready monetization.</p>
        <div className="flex flex-wrap gap-4">
          <a href="/privacy" className="transition hover:text-brand-gold">Privacy</a>
          <a href="/terms" className="transition hover:text-brand-gold">Terms</a>
          <a href="/affiliate-disclosure" className="transition hover:text-brand-gold">Disclosure</a>
          <a href="/cookie-policy" className="transition hover:text-brand-gold">Cookies</a>
          <a href="/partner-agreement" className="transition hover:text-brand-gold">Partner Agreement</a>
          <a href="/admin" className="transition hover:text-brand-gold">Admin</a>
        </div>
      </div>
    </footer>
  );
}
