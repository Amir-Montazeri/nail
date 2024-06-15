import clsx from 'clsx';
import Link from 'next/link';

interface TIProps {
  items: Array<TaskbarItem>;
  className?: string;
  activeClassName: string;
  currentPathname: string;
}

const TaskbarItemsRenderer = ({
  items,
  className,
  activeClassName,
  currentPathname,
}: TIProps) => {
  return items.map((item, _i) => (
    <li
      key={_i}
      className={clsx(className, [
        item.href === currentPathname && activeClassName,
      ])}
    >
      <Link href={item.href}>{item.innerText}</Link>
    </li>
  ));
};

export default TaskbarItemsRenderer;
