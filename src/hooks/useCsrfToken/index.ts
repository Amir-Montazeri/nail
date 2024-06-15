import axios from 'axios';
import { getCsrfToken } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useCsrfToken = () => {
  const [csrfToken, setCsrfToken] = useState<string>('');

  useEffect(() => {
    const csrfTokenGetter = async () => {
      await axios
        .get('/api/auth/csrf')
        .then((res) => setCsrfToken(res.data.csrfToken))
        .catch((err) => console.error('Error fetching CSRF Token: ', err));
    };
    // const csrfTokenGetter = async () => {
    //   await getCsrfToken()
    //     // .then((res) => setCsrfToken(res || null))
    //     .then((res) => console.log(res))
    //     .catch((err) => console.error('Error fetching CSRF Token: ', err));
    // };

    csrfTokenGetter();
  }, []);

  return csrfToken;
};

export default useCsrfToken;
