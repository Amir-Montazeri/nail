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
import { ResetSchema } from '@/schemas';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { resetPasswordAction } from '@actions/reset-password';

function ResetPassword() {
  const [formError, setFormError] = useState<string | undefined>(undefined),
    [formSuccess, setFormSuccess] = useState<string | undefined>(undefined);
  const [isPending, startTransition] = useTransition();

  const formStatusClear = () => {
    setFormError(undefined);
    setFormSuccess(undefined);
  };

  const form = useForm<z.infer<typeof ResetSchema>>({
    resolver: zodResolver(ResetSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (values: z.infer<typeof ResetSchema>) => {
    formStatusClear();
    startTransition(() => {
      resetPasswordAction(values).then((res) => {
        setFormError(res?.error);
        setFormSuccess(res?.success);
      });
    });
  };

  return (
    <CardWrapper
      headerTitle="🔐 Auth"
      headerLabel="Forgot your password?"
      backButtonLabel="Back to login"
      backButtonHref="/login"
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
          </div>
          <FormError message={formError} />
          <FormSuccess message={formSuccess} />
          <Button
            type="submit"
            className="w-full capitalize"
            disabled={isPending}
          >
            send reset email
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default ResetPassword;
