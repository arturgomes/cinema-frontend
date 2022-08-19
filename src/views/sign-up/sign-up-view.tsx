import React, { ReactElement } from 'react';
import { Row, Col } from 'react-styled-flexboxgrid';

import Menu from '../shared/components/menu';
import { H1 } from '../layout/layout.styles';
import { getLocaleDateString } from '../shared/utils/locale-datetime';

import { HookData } from './use-sign-up';
import {
  Wrapper,
  Form,
  Input,
  InputFile,
  Button,
  Droparea,
  ClearButton,
  Preview,
  Img,
  Label,
  Select,
} from './sign-up.styles';

const SignUpView: React.FC<HookData> = (): ReactElement => {
  return (
    <Wrapper>
      <Menu />

      <Form>
        <Row center="xs">
          <Col xs={12} md={4}>
            <H1>Sign up for a movie</H1>

            {/* FILL IN THE GAPS */}
            {/* Fields go here ... */}

            <Button type="submit">Save</Button>
          </Col>
        </Row>
      </Form>
    </Wrapper>
  );
};

export default SignUpView
