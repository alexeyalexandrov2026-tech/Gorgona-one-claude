"use client";

import { trackEvent } from '../../../lib/analyticsEvents';

export function WebsiteLink({ businessId, website }) {
  return (
    <a
      href={website}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackEvent('click', businessId, { type: 'website' })}
      className="mt-6 inline-flex rounded-full bg-brand-gold px-5 py-3 font-medium text-black"
    >
      Visit website
    </a>
  );
}

export function PromoCodeCard({ businessId, promo }) {
  function copyCode() {
    navigator.clipboard?.writeText(promo.code);
    trackEvent('promo_click', businessId, { promo_id: promo.id, code: promo.code });
  }

  return (
    <button type="button" onClick={copyCode} className="market-card w-full rounded-2xl p-5 text-left">
      <p className="font-mono text-lg text-brand-gold">{promo.code}</p>
      <p className="mt-2 text-sm text-zinc-400">{promo.description || promo.discount}</p>
      <p className="mt-2 text-xs text-zinc-500">Tap to copy</p>
    </button>
  );
}
