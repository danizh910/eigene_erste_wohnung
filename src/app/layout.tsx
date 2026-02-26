import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'UBS Life Moments Sprint Hub',
  description: 'Sprint-Dashboard für das UBS Life Moments Projekt, Fokus "Erste eigene Wohnung".',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
