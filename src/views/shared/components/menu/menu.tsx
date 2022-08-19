import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { Wrapper } from './menu.styles';

const Menu: React.FC = (): ReactElement => {
  return (
    <Wrapper>
      <Link to="/">Sign up</Link>
      <Link to="/admin">Admin</Link>
    </Wrapper>
  );
};

export default Menu;
