import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LocaleProvider } from './components/LocaleProvider';
import { AuthProvider } from './components/AuthProvider';

const baseUrl = 'https://gorgona-one.vercel.app';

// Site content is served from a single URL per page (language is chosen via
// cookie/localStorage, not a URL prefix), so every hreflang variant points
// at the same canonical URL - a valid pattern for search engines when
// language is determined client-side rather than through distinct routes.
const HREFLANG_CODES = ['en-US', 'ru', 'es', 'he-IL', 'zh', 'pt', 'uk', 'ja', 'ko', 'de', 'ar', 'tr', 'fa', 'it', 'fr', 'pl'];

export const metadata = {
  title: 'GORGONA ONE | Global deals, promo codes, and lifestyle offers',
  description: 'Premium marketplace for shopping, restaurants, entertainment, travel, sports, and betting deals.',
  keywords: ['coupons', 'deals', 'discounts', 'sportsbook promos', 'travel offers', 'restaurant deals'],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      ...Object.fromEntries(HREFLANG_CODES.map((code) => [code, baseUrl])),
      'x-default': baseUrl
    }
  },
  openGraph: {
    title: 'GORGONA ONE',
    description: 'Discover verified promo codes, premium offers, and hidden deals across the globe.',
    url: 'https://gorgona-one.vercel.app',
    siteName: 'GORGONA ONE',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GORGONA ONE',
    description: 'Unlock hidden deals with verified coupons and premium offers.'
  },
  other: {
    'impact-site-verification': 'ff43eb55-8fb6-4457-9e63-20e46d98978f'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#050505] text-zinc-100 antialiased">
        <LocaleProvider>
          <AuthProvider>
            <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
              <Header />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
