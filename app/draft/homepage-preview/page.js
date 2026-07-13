"use client";

import { useState } from 'react';
import Link from 'next/link';
import { SearchBar } from '../../components/SearchBar';
import { categories } from '../../../lib/dealsData';
import { getTranslation } from '../../../lib/i18n';
import { useLocale } from '../../components/LocaleProvider';

function camelizeSlug(slug) {
  return slug.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

const TRUST_BADGES = [
  { title: 'Verified offers', detail: 'Handpicked & tested', icon: <path d="M12 2 4 5v6c0 5 3.4 8.7 8 11 4.6-2.3 8-6 8-11V5l-8-3Zm-1.2 13.6-3.4-3.4 1.4-1.4 2 2 4.6-4.6 1.4 1.4-6 6Z" /> },
  { title: 'Exclusive codes', detail: 'Members-only savings', icon: <path d="M12.6 2 22 11.4l-9.4 9.4a2 2 0 0 1-2.8 0L2 13V4a2 2 0 0 1 2-2h8.6ZM7 5.5A1.5 1.5 0 1 0 7 8.5 1.5 1.5 0 0 0 7 5.5Z" /> },
  { title: 'Trusted partners', detail: 'Top brands you love', icon: <path d="m12 2 2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17l-6.1 3.5 1.5-6.8L2.2 9l6.9-.7L12 2Z" /> },
  { title: 'All in one place', detail: 'Save time & money', icon: <path d="M20 7h-3.2a3 3 0 0 0-9.6 0H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8h.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1ZM12 4a2 2 0 0 1 1.87 1.3h-3.74A2 2 0 0 1 12 4Z" /> }
];

const COMPACT_DEALS = [
  { title: 'Yacht Rentals', value: 'Sunset cruising', href: '/yachts', accent: '#38bdf8' },
  { title: 'Sportsbook Bonuses', value: 'Top-tier offers', href: '/sportsbook', accent: '#a855f7' },
  { title: 'Vacation Rentals', value: 'Luxury stays', href: '/vacation-rentals', accent: '#d4af37' }
];

function palmFrond(cx, cy, angleDeg, length, width) {
  const angle = (angleDeg * Math.PI) / 180;
  const tipX = cx + Math.cos(angle) * length;
  const tipY = cy + Math.sin(angle) * length;
  const midX = cx + Math.cos(angle) * length * 0.55;
  const midY = cy + Math.sin(angle) * length * 0.55;
  const perp = angle + Math.PI / 2;
  const perpX = Math.cos(perp) * width;
  const perpY = Math.sin(perp) * width;
  return `M ${cx} ${cy} Q ${midX + perpX} ${midY + perpY} ${tipX} ${tipY} Q ${midX - perpX} ${midY - perpY} ${cx} ${cy} Z`;
}

const PALM_ANGLES = [-165, -140, -110, -80, -50, -20, 5, -195];

function PalmTree({ baseX, baseY, trunkHeight, scale = 1, lean = -8 }) {
  const topX = baseX + Math.sin((lean * Math.PI) / 180) * trunkHeight;
  const topY = baseY - trunkHeight;
  return (
    <g>
      <path
        d={`M ${baseX - 7} ${baseY} Q ${baseX + lean * 1.2} ${baseY - trunkHeight * 0.55} ${topX} ${topY}`}
        stroke="#050403"
        strokeWidth={9 * scale}
        fill="none"
        strokeLinecap="round"
      />
      {PALM_ANGLES.map((angle, i) => (
        <path key={i} d={palmFrond(topX, topY, angle, 95 * scale, 14 * scale)} fill="#050403" />
      ))}
      <circle cx={topX} cy={topY} r={7 * scale} fill="#050403" />
    </g>
  );
}

function SkylineIllustration() {
  return (
    <svg viewBox="0 0 700 560" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full">
      <defs>
        <linearGradient id="dp-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0704" />
          <stop offset="55%" stopColor="#1a1006" />
          <stop offset="100%" stopColor="#3a2408" />
        </linearGradient>
        <linearGradient id="dp-water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#241605" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
      </defs>
      <rect x="0" y="0" width="700" height="560" fill="url(#dp-sky)" />
      {[
        [40, 300, 34, 160], [80, 260, 26, 200], [112, 320, 30, 140],
        [148, 230, 40, 230], [194, 280, 28, 180], [228, 200, 46, 260],
        [280, 250, 30, 210], [316, 180, 50, 280], [372, 260, 32, 200],
        [410, 220, 40, 240], [456, 270, 26, 190], [488, 190, 44, 270],
        [538, 250, 28, 210], [572, 300, 34, 160], [612, 260, 26, 200]
      ].map(([x, y, w, h], i) => (
        <g key={i}>
          <rect x={x} y={y} width={w} height={h} fill="#0c0904" />
          {Array.from({ length: Math.max(2, Math.floor(h / 26)) }).map((_, r) =>
            Array.from({ length: Math.max(1, Math.floor(w / 14)) }).map((_, c) => (
              (r + c) % 3 !== 0 ? (
                <rect
                  key={`${r}-${c}`}
                  x={x + 4 + c * 13}
                  y={y + 8 + r * 24}
                  width="4"
                  height="6"
                  fill="#d4af37"
                  opacity={0.15 + ((r * c) % 4) * 0.12}
                />
              ) : null
            ))
          )}
        </g>
      ))}
      <rect x="0" y="440" width="700" height="120" fill="url(#dp-water)" />
      <rect x="0" y="440" width="700" height="3" fill="#d4af37" opacity="0.35" />
      <g opacity="0.22" transform="translate(0,460) scale(1,-1)">
        {[
          [40, -140, 34, 160], [148, -110, 40, 230], [228, -80, 46, 260],
          [316, -60, 50, 280], [410, -100, 40, 240], [488, -70, 44, 270]
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h} fill="#d4af37" />
        ))}
      </g>
      <PalmTree baseX={70} baseY={562} trunkHeight={230} scale={1.15} lean={-14} />
      <PalmTree baseX={150} baseY={562} trunkHeight={165} scale={0.85} lean={10} />
      <rect x="0" y="0" width="700" height="560" fill="url(#dp-fade)" />
      <defs>
        <linearGradient id="dp-fade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#050505" stopOpacity="0.15" />
          <stop offset="58%" stopColor="#050505" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#050505" stopOpacity="0.97" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function AbstractIllustration() {
  return (
    <div className="absolute inset-0">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 15% 30%, rgba(212,175,55,0.42), transparent 60%),' +
            'radial-gradient(45% 40% at 35% 80%, rgba(212,175,55,0.26), transparent 65%),' +
            'radial-gradient(70% 60% at 0% 100%, rgba(255,255,255,0.08), transparent 60%),' +
            '#050505'
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'repeating-linear-gradient(115deg, rgba(212,175,55,0.09) 0px, rgba(212,175,55,0.09) 2px, transparent 2px, transparent 26px)'
        }}
      />
      <div className="absolute left-[6%] top-[14%] h-48 w-48 rounded-full bg-brand-gold/35 blur-3xl" />
      <div className="absolute left-[20%] top-[52%] h-64 w-64 rounded-full bg-brand-gold/22 blur-3xl" />
      <div className="absolute left-[0%] bottom-[4%] h-36 w-72 rounded-full bg-white/8 blur-3xl" />
      <svg viewBox="0 0 700 560" preserveAspectRatio="xMidYMax slice" className="absolute inset-0 h-full w-full opacity-70">
        <path d="M0 480 C 120 420 220 460 340 400 S 560 340 700 380" stroke="#d4af37" strokeWidth="1.5" fill="none" opacity="0.5" />
        <path d="M0 520 C 140 470 260 500 380 450 S 580 400 700 430" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.3" />
      </svg>
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(5,5,5,0.15) 0%, rgba(5,5,5,0.55) 58%, rgba(5,5,5,0.97) 100%)'
        }}
      />
    </div>
  );
}

const FLORIDA_PATH = 'M12 58 L18 46 L70 32 L118 40 L134 44 C142 46 148 52 150 60 C154 76 148 90 156 104 C166 122 172 140 170 160 C168 182 178 200 174 222 C170 246 176 268 166 290 C160 304 150 316 140 322 C132 326 126 320 124 310 C122 296 128 282 120 272 C112 262 100 266 94 278 C88 290 76 296 66 288 C58 282 60 270 52 262 C42 252 30 250 24 236 C18 222 26 208 18 194 C10 180 6 164 12 148 C18 132 8 118 12 102 C16 88 8 74 12 58 Z';

function FloridaMap() {
  return (
    <svg viewBox="0 0 190 340" className="h-full w-full">
      <path d={FLORIDA_PATH} fill="#d4af37" fillOpacity="0.08" stroke="#d4af37" strokeOpacity="0.6" strokeWidth="1.75" strokeLinejoin="round" />
      <circle cx="150" cy="60" r="1.6" fill="#d4af37" opacity="0.7" />
      <circle cx="134" cy="300" r="5" fill="#d4af37" />
      <circle cx="134" cy="300" r="5" fill="none" stroke="#d4af37" strokeOpacity="0.6">
        <animate attributeName="r" values="6;18;6" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

export default function HomepagePreviewDraft() {
  const locale = useLocale();
  const t = getTranslation(locale);
  const [variant, setVariant] = useState('skyline');

  return (
    <main className="flex-1">
      <div className="sticky top-0 z-50 -mx-4 mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-brand-gold/30 bg-black/90 px-4 py-3 backdrop-blur sm:-mx-6 lg:-mx-8 lg:px-8">
        <p className="text-xs uppercase tracking-[0.2em] text-brand-gold">
          Draft preview — not the live homepage
        </p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-zinc-400">Hero visual:</span>
          <button
            type="button"
            onClick={() => setVariant('skyline')}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${variant === 'skyline' ? 'border-brand-gold bg-brand-gold text-black' : 'border-white/20 text-zinc-300 hover:border-brand-gold/50'}`}
          >
            A · Skyline
          </button>
          <button
            type="button"
            onClick={() => setVariant('abstract')}
            className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${variant === 'abstract' ? 'border-brand-gold bg-brand-gold text-black' : 'border-white/20 text-zinc-300 hover:border-brand-gold/50'}`}
          >
            B · Abstract
          </button>
        </div>
      </div>

      <section className="market-shell relative overflow-hidden rounded-[2rem] border-brand-gold/20">
        {variant === 'skyline' ? <SkylineIllustration /> : <AbstractIllustration />}

        <div className="relative z-10 px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
          <p className="market-pill mb-5">Global deals • Promo codes • Lifestyle offers</p>
          <h1 className="market-title text-3xl sm:text-4xl lg:text-5xl">
            Premium deals for every lifestyle{' '}
            <span className="font-serif italic text-brand-gold">in Miami,</span> 🌴
          </h1>
          <p className="market-subtitle text-lg">
            Verified discounts • Exclusive promo codes • Shopping • Travel • Dining • Entertainment • Miami
          </p>
          <p className="mt-3 flex items-center gap-2 text-base text-zinc-200">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4 text-brand-gold">
              <path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
            </svg>
            <span className="font-semibold text-brand-gold">Miami, Florida</span>
            <span className="text-zinc-400">• Our home. Your advantage.</span>
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/stores" className="market-button">Explore Marketplace</Link>
            <Link href="/coupons" className="market-button-secondary border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black">Browse Deals</Link>
            <Link href="/partner" className="market-button-secondary border-brand-gold/40 text-brand-gold hover:bg-brand-gold hover:text-black">Join as Partner</Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 lg:grid-cols-4">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.title} className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-brand-gold/40 text-brand-gold">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">{badge.icon}</svg>
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">{badge.title}</p>
                  <p className="text-xs text-zinc-400">{badge.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">Featured Deals</p>
        <div className="market-shell mt-6 flex flex-col overflow-hidden rounded-[2rem] border-brand-gold/20 lg:flex-row lg:items-stretch">
          <div className="flex items-center justify-center bg-black/60 p-6 lg:w-2/5">
            <div className="flex w-full max-w-[220px] flex-col items-center text-center">
              <div className="h-64 w-full">
                <FloridaMap />
              </div>
              <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold">Miami</p>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">Florida</p>
            </div>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-4 border-t border-white/10 p-6 lg:border-l lg:border-t-0 lg:p-8">
            {COMPACT_DEALS.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="featured-deal-card group flex items-center justify-between rounded-xl px-5 py-4"
                style={{ '--fd-accent': item.accent, '--fd-glow': `${item.accent}66` }}
              >
                <div className="min-w-0">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm" style={{ color: item.accent }}>{item.value}</p>
                </div>
                <span
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border bg-black/60"
                  style={{ borderColor: item.accent, color: item.accent }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                    <path d="M9 6l6 6-6 6" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-6">
        <SearchBar />
      </section>

      <section className="py-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">Popular categories</h2>
          <Link href="/stores" className="text-sm text-brand-gold">Browse all</Link>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link key={category.slug} href={`/stores/${category.slug}`} className="market-card rounded-2xl p-5">
              <p className="text-2xl">{category.icon}</p>
              <p className="mt-3 font-semibold text-white">{t.categories[camelizeSlug(category.slug)] || category.label}</p>
              <p className="mt-2 text-sm text-zinc-400">{category.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="py-6">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            { title: 'User accounts', body: 'Register, save favorites, track promo codes, and manage profile activity.', href: '/login' },
            { title: 'Partner portal', body: 'Apply as a merchant, publish offers, manage multiple locations, and track performance.', href: '/partner' },
            { title: 'Admin control', body: 'Approve partners, manage offers, monitor analytics, and keep content compliant.', href: '/admin' },
            { title: 'Legal framework', body: 'Terms, privacy, affiliate disclosure, and cookie policy pages ready for rollout.', href: '/terms' }
          ].map((item) => (
            <Link key={item.title} href={item.href} className="market-card rounded-2xl p-5">
              <p className="font-semibold text-white">{item.title}</p>
              <p className="mt-2 text-sm text-zinc-400">{item.body}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
