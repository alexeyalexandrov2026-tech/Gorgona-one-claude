import './globals.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LocaleProvider } from './components/LocaleProvider';
import { LanguageSelectionModal } from './components/LanguageSelectionModal';
import { getAdminSession } from '../lib/adminAuth';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'GORGONA ONE | Global deals, promo codes, and lifestyle offers',
  description: 'Premium marketplace for shopping, restaurants, entertainment, travel, sports, and betting deals.',
  keywords: ['coupons', 'deals', 'discounts', 'sportsbook promos', 'travel offers', 'restaurant deals'],
  metadataBase: new URL('https://gorgona-one.vercel.app'),
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
  }
};

export default async function RootLayout({ children }) {
  const { session, isAdmin } = await getAdminSession();

  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-[#050505] text-zinc-100 antialiased">
        <LocaleProvider>
          <LanguageSelectionModal />
          <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
            <Header isAuthenticated={!!session} isAdmin={isAdmin} />
            {children}
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  );
}
