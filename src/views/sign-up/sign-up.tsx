import React, { ReactElement } from 'react';

import useSignUp from './use-sign-up';
import SignUpView from './sign-up-view';

const SignUp = (): ReactElement => {
  const data = useSignUp();

  return <SignUpView {...data} />;
};

export default SignUp;
