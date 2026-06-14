import type { Metadata } from 'next';
import { Crimson_Text, Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const crimson = Crimson_Text({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '600'],
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'JANGID INTERIOR\'S - Luxury Interior Design',
  description: 'Interiors that whisper elegance. Transforming spaces into sanctuaries of luxury and comfort.',
  keywords: 'interior design, luxury interiors, residential design, commercial design',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${crimson.variable} ${playfair.variable} ${inter.variable}`}>
      <body className="font-sans bg-warm-cream text-slate-gray antialiased">
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
