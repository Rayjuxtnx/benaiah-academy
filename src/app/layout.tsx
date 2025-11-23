
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/toaster';
import { Poppins } from 'next/font/google';

const siteUrl = 'https://benaiah.ac.ke';
const siteTitle = 'Benaiah Academy';
const siteDescription = 'A happy place for little learners in Machakos. A Christ-centered kindergarten nurturing spiritual, academic, and social growth.';


export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  appleWebApp: {
    capable: true,
    title: siteTitle,
    statusBarStyle: 'default',
  },
  formatDetection: {
    telephone: false,
  },
  themeColor: '#FFD700',
  openGraph: {
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    siteName: siteTitle,
    images: [
      {
        url: `${siteUrl}/og-image.png`, 
        width: 1200,
        height: 630,
        alt: `Benaiah Academy Campus`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: [`${siteUrl}/twitter-image.png`], 
  },
  keywords: ['kindergarten', 'Machakos', 'Christian school', 'early childhood education', 'preschool', 'Benaiah Academy'],
  authors: [{ name: 'Benaiah Academy' }],
  creator: 'Benaiah Academy',
  publisher: 'Benaiah Academy',
  robots: {
    index: true,
    follow: true,
  },
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${poppins.variable}`}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffd700" />
        <meta name="msapplication-TileColor" content="#ffd700" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
