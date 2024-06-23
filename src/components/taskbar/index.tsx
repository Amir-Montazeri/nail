'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

import TaskbarItemsRenderer from './TaskbarItemsRenderer';
import { useCurrentUser, useLinkTypeGenerator } from '@/hooks';
import { taskbarItems } from './taskbarItems';

const Taskbar = () => {
  const [showUpArrow, setShowUpArrow] = useState<boolean>(false);
  const pathname = usePathname(),
    { status } = useCurrentUser(),
    generatedItems = useLinkTypeGenerator(taskbarItems, status),
    ulCurrentPosY = useMotionValue(0);

  return generatedItems.length > 0 ? (
    <motion.ul
      drag="y"
      dragConstraints={{ top: 0, bottom: 70 }}
      onDragEnd={() => {
        setShowUpArrow(() => (ulCurrentPosY.get() > 25 ? true : false));
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ y: ulCurrentPosY }}
      className="fixed flex flex-col items-center bottom-4 mx-auto w-fit max-w-[95vw] z-10 inset-x-0"
    >
      {showUpArrow && (
        <div className="cursor-pointer bg-white rounded-t-2xl w-1/4 max-w-32 py-1 translate-y-px border-black border-[1px] border-b-0">
          <FaArrowUp className="mx-auto text-black" />
        </div>
      )}
      <ul className="flex space-x-1 bg-white/90 dark:bg-white/75 py-1 sm:py-2 px-3 sm:px-5 rounded-lg capitalize shadow-md shadow-black/50 overflow-x-auto">
        <TaskbarItemsRenderer
          items={generatedItems}
          currentPathname={pathname}
          className="px-2 sm:px-8 h-9 sm:h-10 font-light sm:font-medium"
          isLoading={status === 'loading'}
        />
      </ul>
    </motion.ul>
  ) : null;
};

export default Taskbar;
