// import { generateRandomId } from '../../../utils/common';

import { User } from '../model';
import { getUsers } from './get-users';

export const addUser = async (data: User): Promise<void> => {
  await localStorage.setItem(
    'users',
    JSON.stringify([ ...(await getUsers()), data ])
  );
};
