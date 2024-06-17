'use client';

import { usePathname } from 'next/navigation';
import TaskbarItemsRenderer from './TaskbarItemsRenderer';
import { useCurrentUser, useLinkTypeGenerator } from '@/hooks';
import { taskbarItems } from './taskbarItems';

const Taskbar = () => {
  const pathname = usePathname(),
    { status } = useCurrentUser(),
    generatedItems = useLinkTypeGenerator(taskbarItems, status);

  return generatedItems.length > 0 ? (
    <ul className="fixed flex space-x-1 mx-auto w-fit inset-x-0 bottom-4 bg-white/90 dark:bg-white/75 py-2 px-5 rounded-lg capitalize shadow-md shadow-black/50 z-10 flex-wrap">
      <TaskbarItemsRenderer
        items={generatedItems}
        currentPathname={pathname}
        isLoading={status === 'loading'}
      />
    </ul>
  ) : null;
};

export default Taskbar;
