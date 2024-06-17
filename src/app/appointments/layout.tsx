'use client';
import { useSearchParams } from 'next/navigation';

import { AppointmentsCardWrapper } from '@/features';
import { APPOINTMENTS_MAX_STAGE, APPOINTMENTS_MIN_STAGE } from '@/routes';

interface ALProps {
  children: React.ReactNode;
}

function AppointmentsLayout({ children }: ALProps) {
  const searchParams = useSearchParams(),
    stageNumber = Number(searchParams.get('stage')) || 0;

  return (
    <AppointmentsCardWrapper
      stage={stageNumber}
      stageName="Select Service"
      headerLabel="Select one of these."
      minStage={APPOINTMENTS_MIN_STAGE}
      maxStage={APPOINTMENTS_MAX_STAGE}
    >
      {children}
    </AppointmentsCardWrapper>
  );
}

export default AppointmentsLayout;
