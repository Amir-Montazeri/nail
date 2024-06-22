/**
 * An array of routes that are accessible to the public.
 * These routes do not required authentication.
 * @type {string[]}
 */
export const publicRoutes = ['/', '/auth-new-verification', '/appointments'];

/**
 * An array of routes that are used for authentication.
 * These routes will redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes = [
  '/login',
  '/register',
  '/auth-error',
  '/reset-password',
  '/configure-new-password',
];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purposes.
 * @type {string}
 */
export const apiAuthPrefix = '/api/auth';

/**
 * The default redirect path after logging in.
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = '/settings';

/**
 * The default redirect path whether tend to visit a private page before logging in
 * @type {string}
 */
export const LOGIN_URL = '/login';

/**
 * The maximum stage number avaiable for appointments process!
 * The last stage would be one only users can see as they have to pay for their appointment.
 * @type {number}
 */
export const APPOINTMENTS_MAX_STAGE = 2;

/**
 * The minimum stage number avaiable for appointments process!
 * The first stage would be a bit explaning.
 * @type {number}
 */
export const APPOINTMENTS_MIN_STAGE = 1;

/**
 * The prefix for appointments routes.
 * Routes that start with this prefix are used for booking appointment purposes.
 * @type {string}
 */
export const appointmentsPrefix = '/appointments';
