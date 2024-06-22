'use client';

import { AppointmentsCardWrapper } from '@/features';
import { getappointmentsStageBio } from '@/lib/appointmentsStages';
import { APPOINTMENTS_MAX_STAGE, APPOINTMENTS_MIN_STAGE } from '@/routes';
import { useSearchParams, redirect } from 'next/navigation';
import React from 'react';

interface ALProps {
  children: React.ReactNode;
}

function AppointmentsLayout({ children }: ALProps) {
  const searchParams = useSearchParams(),
    stageNumber = Number(searchParams.get('stage')),
    stageBio = getappointmentsStageBio(stageNumber),
    { stageName, stageLabel } = {
      stageName: stageBio?.stageName,
      stageLabel: stageBio?.stageLabel,
    };

  return stageName && stageLabel ? (
    <AppointmentsCardWrapper
      stage={stageNumber}
      stageName={stageName}
      headerLabel={stageLabel}
      minStage={APPOINTMENTS_MIN_STAGE}
      maxStage={APPOINTMENTS_MAX_STAGE}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child))
          return React.cloneElement(child, stageNumber);

        return child;
      })}
    </AppointmentsCardWrapper>
  ) : (
    redirect(`/error?message=Invalid_Stage_Number`)
  );
}

export default AppointmentsLayout;
