import NextAuth from 'next-auth';
import authConfig from './auth/next-auth.config';
import {
  DEFAULT_LOGIN_REDIRECT,
  LOGIN_URL,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
  appointmentsPrefix,
  APPOINTMENTS_MAX_STAGE,
  APPOINTMENTS_MIN_STAGE,
} from './routes';

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix),
    isPublicRoute = publicRoutes.includes(nextUrl.pathname),
    isAuthRoute = authRoutes.includes(nextUrl.pathname),
    isAppointmentsRoute = nextUrl.pathname.startsWith(appointmentsPrefix);

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL(LOGIN_URL, nextUrl));
  }

  if (isAppointmentsRoute) {
    let currentStageNumber: string | number | null =
      nextUrl.searchParams.get('stage');

    if (!currentStageNumber) {
      // TODO: redirect to 'lastStage' rather than 0!
      return Response.redirect(
        new URL(
          `${appointmentsPrefix}?stage=${APPOINTMENTS_MIN_STAGE}`,
          nextUrl
        )
      );
    }

    currentStageNumber = Number(currentStageNumber);
    if (
      currentStageNumber < APPOINTMENTS_MIN_STAGE ||
      (isLoggedIn && currentStageNumber > APPOINTMENTS_MAX_STAGE) ||
      (!isLoggedIn && currentStageNumber >= APPOINTMENTS_MAX_STAGE)
    ) {
      // TODO: redirect to 'lastStage' rather than 0!
      return Response.redirect(
        new URL(
          `${appointmentsPrefix}?stage=${APPOINTMENTS_MIN_STAGE}`,
          nextUrl
        )
      );
    }
  }

  return null;
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
