import React, { ReactElement } from 'react';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';
import { Wrapper } from './success.styles';

const Success = (): ReactElement => {
  return (
    <Wrapper>
      <Menu />

      <H1>Thank you! You have been successfully registered for the movie!</H1>
    </Wrapper>
  );
};

export default Success;
