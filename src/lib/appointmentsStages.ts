import { APPOINTMENTS_MAX_STAGE, APPOINTMENTS_MIN_STAGE } from '@/routes';

type StageBioType = {
  stageName: string;
  stageLabel: string;
};

interface AppointmentsStagesType {
  [key: number]: StageBioType;
}

const appointmentsStages: AppointmentsStagesType = {
  1: {
    stageName: 'Select the service',
    stageLabel: 'select a service, providing the schedule dates!',
  },
  2: {
    stageName: 'Stage 2',
    stageLabel: 'select a service, providing the schedule dates!',
  },
};

export const getappointmentsStageBio = (stage: number): null | StageBioType => {
  if (stage > APPOINTMENTS_MAX_STAGE || stage < APPOINTMENTS_MIN_STAGE)
    return null;

  const stageBio = appointmentsStages[stage];

  return stageBio;
};
