import { type DefaultSession } from 'next-auth';
import { UserRole } from '@prisma/client';

// export type ExtendedUser = DefaultSession['user'] & {
type ExtendedUser = DefaultSession['user'] & {
  role: UserRole;
  hasAppointment: boolean;
};

declare module 'next-auth' {
  interface Session {
    user: ExtendedUser;
  }
}
