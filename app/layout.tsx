import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kritika.dev',
  description: 'Personal site built with Next.js and Tailwind CSS',
  alternates: {
    types: { 'application/rss+xml': 'https://my-next-app-five-umber.vercel.app/feed.xml' },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="light">
      {/* Runs before paint — reads localStorage and sets the class immediately to avoid flash */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            try {
              var t = localStorage.getItem('theme') || 'light';
              document.documentElement.classList.remove('light', 'dark');
              document.documentElement.classList.add(t);
            } catch(e) {}
          })();
        `}} />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground`}>
        <Header />
        <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
