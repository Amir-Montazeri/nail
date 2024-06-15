'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { CardWrapper, FormError, FormSuccess } from '@/features';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { RegisterSchema } from '@/schemas';
import AuthSocial from '../social';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { registerAction } from '@actions/register';

function Register() {
  const [formError, setFormError] = useState<string | undefined>(undefined),
    [formSuccess, setFormSuccess] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition();

  const formStatusClear = () => {
    setFormError(undefined);
    setFormSuccess(undefined);
  };

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      lastname: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    formStatusClear();
    startTransition(() => {
      registerAction(values).then((res) => {
        setFormError(res.error);
        setFormSuccess(res.success);
      });
    });
  };

  return (
    <CardWrapper
      headerTitle="🔐 Auth"
      headerLabel="Create an account"
      backButtonLabel="Already have an account?"
      backButtonHref="/login"
      SocialComponent={AuthSocial}
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Tajik"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="azin.taj@example.com"
                      type="email"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="******"
                      type="password"
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={formError} />
          <FormSuccess message={formSuccess} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default Register;
