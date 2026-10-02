import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rasindu Kaushalya — Systems Developer & CS Undergraduate',
  description: 'Portfolio of Rasindu Kaushalya — Systems programming, OS development, AI/ML, and compiler design.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="noise">
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
