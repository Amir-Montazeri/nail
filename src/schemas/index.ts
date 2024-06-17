import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'Email is required!',
  }),
  password: z.string().min(1, {
    message: 'Password is required!',
  }),
  code: z.optional(z.string()),
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

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required!',
  }),
});

export const ConfigureNewPasswordSchema = z
  .object({
    password: z.string().min(6, {
      message: 'Minimum 6 characters required!',
    }),
    passwordConfiguration: z.string().min(6, {
      message: 'Minimum 6 characters required!',
    }),
  })
  .refine((data) => data.password === data.passwordConfiguration, {
    message: "Passwords don't match!",
    path: ['passwordConfiguration'],
  });
