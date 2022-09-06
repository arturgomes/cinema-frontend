import { useState, useEffect } from 'react';
import api from '../../services/api';


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
      await api.get('/users').then(
        (response: any) => {
          let res = response.data;
          setUsers(res)
        }
      )
    }
    fetchUsers();
  }, [])

  return {
    users,
  }
};

export default useAdmin;
