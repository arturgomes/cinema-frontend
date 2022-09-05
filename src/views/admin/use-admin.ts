import { useState, useEffect } from 'react';


import { getUsers } from '../shared/modules/user/api/get-users';
import { User } from '../shared/modules/user/model';

export interface HookData {
  users: User[];
}

const useAdmin = (): HookData => {
  const [users, setUsers] = useState<User[]>([]);

  // FILL IN THE GAPS
  // Load users ...
  useEffect(() => {
    let fetchUsers = async () => {
      setUsers(await getUsers())
    }
    fetchUsers();
  }, [])

  return {
    users,
  }
};

export default useAdmin;
