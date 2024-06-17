export const taskbarItems: Array<TaskbarItem> = [
  {
    href: '/',
    innerText: 'Home',
    isPublic: true,
  },
  {
    href: '/appointments',
    innerText: 'appointments',
    isPublic: false,
    privateType: 'user',
  },
  {
    href: '/login',
    innerText: 'login',
    isPublic: false,
    privateType: 'nonuser',
  },
  {
    innerText: 'settings',
    href: '/settings',
    isPublic: false,
    privateType: 'user',
  },
];
