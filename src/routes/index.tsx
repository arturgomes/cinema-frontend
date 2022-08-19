import React, { ReactElement } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Admin from '../views/admin';
import SignUp from '../views/sign-up';
import Success from '../views/success';

const IndexRouter: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}


export default IndexRouter;
