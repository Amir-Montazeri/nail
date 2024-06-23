import { FullLoading } from '@/components';
import React, { Suspense } from 'react';

interface LazyProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

function Lazy({ children, fallback }: LazyProps) {
  return <Suspense fallback={fallback || <FullLoading />}>{children}</Suspense>;
}

export default Lazy;
