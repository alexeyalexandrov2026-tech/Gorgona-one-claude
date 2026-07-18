import './globals.css';
import './ai-overlays.css';
import { Inter, Inter_Tight, Space_Mono, Fira_Mono, Playfair_Display } from 'next/font/google';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LocaleProvider } from './components/LocaleProvider';
import { AuthProvider } from './components/AuthProvider';
// Track A — themed AI ecosystem surfaces (particle sphere + Discovery Room).
import { ThemeProvider } from './components/ThemeProvider';
import { AIProvider } from './components/ai/AIProvider';
import DiscoveryDock from './components/ai/DiscoveryDock';
// Track B — Gemini concierge dock, site-wide orb, PWA install prompt.
import { AiDockProvider } from './components/ai/AiDockProvider';
import { AiSphere } from './components/ai/AiSphere';
import { AiDock } from './components/ai/AiDock';
import { InstallPrompt } from './components/InstallPrompt';
import { ServiceWorkerRegistrar } from './components/ServiceWorkerRegistrar';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap'
});
const spaceMono = Space_Mono({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-mono', display: 'swap' });
const firaMono = Fira_Mono({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-fira', display: 'swap' });
const playfair = Playfair_Display({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap'
});

const fontVariables = [inter, interTight, spaceMono, firaMono, playfair].map((f) => f.variable).join(' ');

const baseUrl = 'https://gorgona-one.com';

// Site content is served from a single URL per page (language is chosen via
// cookie/localStorage, not a URL prefix), so every hreflang variant points
// at the same canonical URL - a valid pattern for search engines when
// language is determined client-side rather than through distinct routes.
const HREFLANG_CODES = ['en-US', 'ru', 'es', 'he-IL', 'zh', 'pt', 'uk', 'ja', 'ko', 'de', 'ar', 'tr', 'fa', 'it', 'fr', 'pl'];

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#050505'
};

export const metadata = {
  title: 'GORGONA ONE | Luxury AI concierge, travel, dining and lifestyle',
  description: 'A luxury AI concierge ecosystem for travel, dining, shopping, stays, yachts, cars, sportsbooks and events.',
  keywords: ['luxury concierge', 'AI concierge', 'travel offers', 'restaurant deals', 'yacht rentals', 'villa rentals'],
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: baseUrl,
    languages: {
      ...Object.fromEntries(HREFLANG_CODES.map((code) => [code, baseUrl])),
      'x-default': baseUrl
    }
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: '/apple-touch-icon.png'
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'GORGONA ONE'
  },
  openGraph: {
    title: 'GORGONA ONE',
    description: 'A luxury AI concierge ecosystem — travel, dining, shopping, stays, yachts, cars and events.',
    url: 'https://gorgona-one.com',
    siteName: 'GORGONA ONE',
    images: [{ url: '/og-image.svg', width: 1200, height: 630 }],
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GORGONA ONE',
    description: 'A luxury AI concierge ecosystem — travel, dining, shopping, stays, yachts, cars and events.'
  },
  verification: {
    other: {
      verification: 'c64feafe15fa67c649d4f21448b3438a'
    }
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${fontVariables}`}>
      <body className="min-h-screen bg-[#050505] font-sans text-zinc-100 antialiased">
        <LocaleProvider>
          <AuthProvider>
            {/* Both AI systems are preserved and coexist. Track A: theme + the
                persistent Discovery Room session/dock. Track B: the Gemini
                concierge dock provider, site-wide orb, and PWA install prompt. */}
            <ThemeProvider defaultTheme="dark">
              <AIProvider>
                <AiDockProvider>
                  <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-4 sm:px-6 lg:px-8">
                    <Header />
                    {children}
                    <Footer />
                  </div>
                  <ServiceWorkerRegistrar />
                  <InstallPrompt />
                  <AiSphere />
                  <AiDock />
                  <DiscoveryDock />
                </AiDockProvider>
              </AIProvider>
            </ThemeProvider>
          </AuthProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
