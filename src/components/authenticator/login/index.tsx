'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useSearchParams } from 'next/navigation';
import { CardWrapper, FormError, FormSuccess } from '@/features';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { LoginSchema } from '@/schemas';
import AuthSocial from '../social';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { loginAction } from '@actions/login';

function Login() {
  const [formError, setFormError] = useState<string | undefined>(undefined),
    [formSuccess, setFormSuccess] = useState<string | undefined>(undefined);
  const searchParams = useSearchParams(),
    urlError =
      searchParams.get('error') === 'OAuthAccountNotLinked'
        ? 'Email already in use with different provider!'
        : '';
  const [isPending, startTransition] = useTransition();

  const formStatusClear = () => {
    setFormError(undefined);
    setFormSuccess(undefined);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    formStatusClear();
    startTransition(() => {
      loginAction(values).then((res) => {
        setFormError(res?.error);
        // TODO: Add when we add 2FA
        // setFormSuccess(res.success);
      });
    });
  };

  return (
    <CardWrapper
      headerTitle="🔐 Auth"
      headerLabel="Welcome back"
      backButtonLabel="Don't have an account?"
      backButtonHref="/register"
      SocialComponent={AuthSocial}
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
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
          <FormError message={formError || urlError} />
          <FormSuccess message={formSuccess} />
          <Button type="submit" className="w-full" disabled={isPending}>
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default Login;
