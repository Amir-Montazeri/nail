'use client';
import { useCurrentUser } from '@/hooks';
import { signOut } from 'next-auth/react';

const Settings = () => {
  const user = useCurrentUser();

  return (
    <div className="bg-white p-10 rounded-xl">
      <button type="submit" onClick={() => signOut()}>
        Sign Out
      </button>
    </div>
  );
};

export default Settings;
