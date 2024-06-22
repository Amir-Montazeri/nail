import { FullLoading } from '@/components';
import { Suspense } from 'react';

interface LazyProps {
  children: React.ReactNode;
}

function Lazy({ children }: LazyProps) {
  return <Suspense fallback={<FullLoading />}>{children}</Suspense>;
}

export default Lazy;
