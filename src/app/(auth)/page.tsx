import { getProviders } from 'next-auth/react';

const Signin = async () => {
  const providers = getProviders().finally((res) => console.log('res', res));
  console.log(providers);

  return (
    <div>
      {/* {Object.values(providers).map((provider) => {
        return (
          <div key={provider.name}>
            <button>Sign in with {provider.name}</button>
          </div>
        );
      })} */}
    </div>
  );
};

export default Signin;
