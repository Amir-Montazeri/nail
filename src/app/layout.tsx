import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import './globals.css';
import { Navbar, Taskbar } from '@/components';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Azin Nail',
  description: 'Azin Nail',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={recursive.className}>
        <Navbar />
        {children}
        <Taskbar />
      </body>
    </html>
  );
}
