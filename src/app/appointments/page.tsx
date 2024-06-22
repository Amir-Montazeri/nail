import React from 'react';
import { redirect } from 'next/navigation';

import { Lazy } from '@/features';
import { APPOINTMENTS_MAX_STAGE, APPOINTMENTS_MIN_STAGE } from '@/routes';
const AppointmentStageOne = React.lazy(
  () => import('@/components/appointments/stage-one')
);

interface AppointmentsProps {
  params: object;
  searchParams: { stage: number };
}

function Appointments({ searchParams: { stage } }: AppointmentsProps) {
  const numberedStage = Number(stage);

  if (!numberedStage)
    return redirect('/error?message=Stage_Not_Entered_Properly');

  if (
    numberedStage > APPOINTMENTS_MAX_STAGE ||
    numberedStage < APPOINTMENTS_MIN_STAGE
  )
    return null;

  switch (numberedStage) {
    case 1:
      return (
        <Lazy>
          <AppointmentStageOne />
        </Lazy>
      );

    case 2:
      return (
        <Lazy>
          <div>stage 2</div>
        </Lazy>
      );

    default:
      return <div>stage not in case1</div>;
  }
}

export default Appointments;
