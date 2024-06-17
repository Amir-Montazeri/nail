'use server';

import * as z from 'zod';

import { db } from '@/lib/db';
import { getAppointmentsById } from '@db-modules/appointments';
import { NewAppointmentSchema } from '@/schemas';

export const addNewAppointmentAction = async (
  values: z.infer<typeof NewAppointmentSchema>,
  id: string
) => {
  const validatedFields = NewAppointmentSchema.safeParse(values);

  if (!validatedFields.success) return { error: 'Invalid fields!' };

  const { model, service, date } = validatedFields.data;

  const existingAppointment = await getAppointmentsById(id);
  existingAppointment?.date;

  if (existingAppointment) {
    if (
      existingAppointment.date &&
      new Date(existingAppointment.date) > new Date()
    ) {
      return {
        error: 'An existing appointment is available! Cancel that one first!',
      };
    }

    db.appointment.delete({
      where: {
        id: existingAppointment.id,
      },
    });
  }

  await db.appointment.create({
    data: {
      userId: id,
      date,
      service,
      model,
    },
  });

  return { success: `Appointment created on ${date.getDate()}` };
};
