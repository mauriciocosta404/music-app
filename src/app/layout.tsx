
import { MusicProvider } from '@/context/musicContext';
import './globals.css';
import type { Metadata } from 'next';
import { Providers } from '@/providers/providers';
//import { Inter } from 'next/font/google'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Music app',
  description: 'listen you favorite music',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <body className="bg-zinc-900 text-zinc-50">{children}</body>
      </Providers>
    </html>

  );
}
