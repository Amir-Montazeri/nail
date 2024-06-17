import { db } from '@/lib/db';

export const getAppointmentsById = async (userId: string) => {
  try {
    const appointment = await db.appointment.findUnique({
      where: {
        userId,
      },
    });

    return appointment;
  } catch {
    return null;
  }
};
