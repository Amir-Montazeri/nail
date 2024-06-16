'use client';

import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BeatLoader } from 'react-spinners';
import { CardWrapper, FormError, FormSuccess } from '@/features';
import { newVerification } from '@actions/new-verification';

function NewVerificationForm() {
  const [error, setError] = useState<string | undefined>(undefined),
    [success, setSuccess] = useState<string | undefined>(undefined);
  const searchParams = useSearchParams();
  const token = searchParams.get('token');

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError('Missing the token!');
      return;
    }

    newVerification(token)
      .then((res) => {
        setSuccess(res.success);
        setError(res.error);
      })
      .catch((err) => {
        setError('Something went wrong!');
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerTitle="🔐 Auth"
      headerLabel="Confirming your verification"
      backButtonLabel="Back to login"
      backButtonHref="/login"
    >
      <div className="flex items-center justify-center w-full">
        {!error && !success && <BeatLoader />}
        <FormSuccess message={success} />
        {!success && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
}

export default NewVerificationForm;
