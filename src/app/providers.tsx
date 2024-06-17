'use client';

import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

interface PProps {
  children: React.ReactNode;
  session?: Session | null;
}

function Providers({ children, session }: PProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}

export default Providers;
