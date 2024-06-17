import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import { auth } from '@/auth';
import './globals.css';
import { Navbar, Taskbar } from '@/components';
import Providers from './providers';

const recursive = Recursive({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Azin Nail',
  description: 'Azin Nail',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={recursive.className}>
        <Providers session={session}>
          <Navbar />
          {children}
          <Taskbar />
        </Providers>
      </body>
    </html>
  );
}
