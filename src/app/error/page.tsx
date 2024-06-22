'use client';

import { useSearchParams } from 'next/navigation';

function Error() {
  const searchParams = useSearchParams(),
    errorMessage = searchParams.get('message');

  return <div>Error: ${errorMessage}</div>;
}

export default Error;
