import { useState, useEffect } from 'react';

import { User } from '../shared/modules/user/model';
import { getUsers } from '../shared/modules/user/api/get-users';

export interface HookData {
  users: User[];
}

const useAdmin = (): HookData => {
  const [users, setUsers] = useState<User[]>([]);

  // FILL IN THE GAPS
  // Load users ...

  return {
    users,
  }
};

export default useAdmin;
