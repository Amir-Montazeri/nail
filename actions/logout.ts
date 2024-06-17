'use server';

import { signOut } from '@/auth';

export const logout = async () => {
  // if you wanna you may do some stuff before loging out!

  await signOut();
};
