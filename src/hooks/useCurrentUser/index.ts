'use client';

import { useCallback, useEffect, useState } from 'react';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { DEFAULT_LOGIN_REDIRECT, LOGIN_URL } from '@/routes';

export const useCurrentUser = () => {
  const [session, setSession] = useState<Session | null>(null),
    [status, setStatus] = useState<AuthStatusTypes>('loading');
  const pathname = usePathname();

  const retrieveSession = useCallback(async () => {
    try {
      setStatus('loading');
      const sessionData = await getSession();

      if (sessionData) {
        setSession(sessionData);
        setStatus('authenticated');
        return;
      }

      setStatus('unauthenticated');
    } catch (error) {
      setStatus('unauthenticated');
      setSession(null);
    }
  }, []);

  useEffect(() => {
    if (status === 'loading' || pathname === DEFAULT_LOGIN_REDIRECT) {
      retrieveSession();
    }
  }, [retrieveSession, pathname]);

  return {
    user: session?.user,
    status,
    retrieveSession: () => retrieveSession(),
  };
};

export default useCurrentUser;
