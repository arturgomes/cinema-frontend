import React, { ReactElement } from 'react';

import useAdmin from './use-admin';
import AdminView from './admin-view';

const Admin: React.FC = (): ReactElement => {
  const data = useAdmin();

  return <AdminView {...data} />;
};

export default Admin;
