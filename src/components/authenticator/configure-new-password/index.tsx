'use client';

import { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { useSearchParams } from 'next/navigation';
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
import { ConfigureNewPasswordSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { confirmNewPassword } from '@actions/confirm-new-password';

function ConfigureNewPassword() {
  const [formError, setFormError] = useState<string | undefined>(undefined),
    [formSuccess, setFormSuccess] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams(),
    token = searchParams.get('token');

  const formStatusClear = () => {
    setFormError(undefined);
    setFormSuccess(undefined);
  };

  const form = useForm<z.infer<typeof ConfigureNewPasswordSchema>>({
    resolver: zodResolver(ConfigureNewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof ConfigureNewPasswordSchema>) => {
    formStatusClear();
    startTransition(() => {
      confirmNewPassword(values, token).then((res) => {
        setFormError(res?.error);
        setFormSuccess(res?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerTitle="🔐 Auth"
      headerLabel="Enter a new password"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <Form {...form}>
        <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="space-y-4">
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
            <FormField
              control={form.control}
              name="passwordConfiguration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password configuration</FormLabel>
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
          <Button
            type="submit"
            className="w-full capitalize"
            disabled={isPending}
          >
            reset password
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default ConfigureNewPassword;
