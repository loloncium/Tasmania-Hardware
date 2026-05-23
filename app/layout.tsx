import type { Metadata } from 'next';
import './globals.css';
import { PageTransition } from '../components/PageTransition';

export const metadata: Metadata = {
  title: 'Maison Atelier | Luxury Interiors & Finishes',
  description: 'A premium interiors destination for tiles, kitchens, bathrooms and architectural finishes.',
  metadataBase: new URL('https://www.maisonatelier.design'),
  openGraph: {
    title: 'Maison Atelier | Luxury Interiors & Finishes',
    description: 'A premium interiors destination for tiles, kitchens, bathrooms and architectural finishes.',
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
