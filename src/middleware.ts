import NextAuth from 'next-auth';
import authConfig from './auth/next-auth.config';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  console.log('IS LOGGEDIN: ', isLoggedIn);
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
