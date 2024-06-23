'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, AnimatePresence } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa6';

import TaskbarItemsRenderer from './TaskbarItemsRenderer';
import { useCurrentUser, useLinkTypeGenerator } from '@/hooks';
import { taskbarItems } from './taskbarItems';

const Taskbar = () => {
  const [showUpArrow, setShowUpArrow] = useState<boolean>(false);
  const pathname = usePathname(),
    { status } = useCurrentUser(),
    generatedItems = useLinkTypeGenerator(taskbarItems, status),
    draggableDivCurrentPosY = useMotionValue(0);

  return generatedItems.length > 0 ? (
    <motion.div
      drag="y"
      dragConstraints={{ top: 0, bottom: 70 }}
      onDragEnd={() => {
        setShowUpArrow(() =>
          draggableDivCurrentPosY.get() > 25 ? true : false
        );
      }}
      transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      style={{ y: draggableDivCurrentPosY }}
      className="fixed flex flex-col items-center bottom-4 mx-auto w-fit max-w-[95vw] inset-x-0 cursor-pointer"
    >
      <AnimatePresence>
        {showUpArrow && (
          <motion.div
            initial={{ opacity: 0, y: 10, boxShadow: '0 0 0 0' }}
            animate={{ opacity: 1, y: -5, boxShadow: '0 1px 2px 0' }}
            exit={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.3 }}
            // className="p-4 bg-white dark:bg-black rounded-full z-[9] border-white/40 border-[1px]"
            className="p-4 bg-white dark:bg-black rounded-full z-[9] dark:shadow-white/50 shadow-black/50"
          >
            <FaArrowUp className="mx-auto text-black dark:text-white" />
          </motion.div>
        )}
      </AnimatePresence>
      <ul className="flex space-x-1 bg-white dark:bg-black dark:bg-white/75 py-1 sm:py-2 px-3 sm:px-5 rounded-lg capitalize shadow-md shadow-black/50 dark:shadow-inner dark:shadow-white/20 overflow-x-auto z-10">
        <TaskbarItemsRenderer
          items={generatedItems}
          currentPathname={pathname}
          className="px-2 sm:px-8 h-9 sm:h-10 font-light sm:font-medium"
          isLoading={status === 'loading'}
        />
      </ul>
    </motion.div>
  ) : null;
};

export default Taskbar;
