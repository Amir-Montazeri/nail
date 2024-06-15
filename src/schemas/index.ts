import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required!',
  }),
  password: z.string().min(1, {
    message: 'Password is required!',
  }),
});

export const RegisterSchema = z.object({
  lastname: z.string().min(1, {
    message: 'Lastname is required!',
  }),
  email: z.string().email({
    message: 'Email is required!',
  }),
  password: z.string().min(6, {
    message: 'Minimum 6 characters required!',
  }),
});