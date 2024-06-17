interface PrivateTaskbarItem {
  href: string;
  innerText: string;
  isPublic: false;
  privateType: 'user' | 'nonuser';
}

interface PublicTaskbarItem {
  href: string;
  innerText: string;
  isPublic: true;
  privateType?: undefined;
}

type TaskbarItem = PrivateTaskbarItem | PublicTaskbarItem;
