import { Button } from '@/components/ui/button';
import clsx from 'clsx';
import { BarLoader } from 'react-spinners';
import Link from 'next/link';

interface TIProps {
  items: Array<TaskbarItem>;
  className?: string;
  activeClassName?: string;
  currentPathname: string;
  isLoading?: boolean;
}

const TaskbarItemsRenderer = ({
  items,
  className,
  activeClassName,
  currentPathname,
  isLoading,
}: TIProps) => {
  return (
    <>
      {items.map((item, _i) => (
        <li key={_i}>
          <Button
            size={'lg'}
            variant={item.href === currentPathname ? 'default' : 'outline'}
            className={clsx(className, [
              item.href === currentPathname && activeClassName,
            ])}
            asChild
          >
            <Link href={item.href}>{item.innerText}</Link>
          </Button>
        </li>
      ))}
      {isLoading && (
        <li>
          <Button size={'lg'} variant={'outline'}>
            <BarLoader />
          </Button>
        </li>
      )}
    </>
  );
};

export default TaskbarItemsRenderer;
