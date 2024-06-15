import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface BBProps {
  label: string;
  href: string;
}

function BackButton({ label, href }: BBProps) {
  return (
    <Button size={'sm'} variant={'link'} className="font-normal w-full" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
}

export default BackButton;
