'use client';

import { usePathname } from 'next/navigation';
import TaskbarItemsRenderer from './TaskbarItemsRenderer';

const taskbarItems: Array<TaskbarItem> = [
  {
    href: '/',
    innerText: 'Home',
  },
  {
    href: '/appointments',
    innerText: 'appointments',
  },
  {
    href: '/login',
    innerText: 'login',
  },
];

const Taskbar = () => {
  const pathname = usePathname();

  return (
    <ul className="fixed flex space-x-1 mx-auto w-fit inset-x-0 bottom-4 bg-violet/90 dark:bg-violet/75 border-2 border-violet py-1 px-2 rounded-lg text-white capitalize shadow-sm shadow-violet z-10 flex-wrap">
      <TaskbarItemsRenderer
        items={taskbarItems}
        className="px-2 py-1"
        activeClassName="bg-violet rounded-lg"
        currentPathname={pathname}
      />
    </ul>
  );
};

export default Taskbar;
