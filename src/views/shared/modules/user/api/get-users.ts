import { User } from '../model';

export const getUsers = async (): Promise<User[]> => {
  const usersStringified = await localStorage.getItem('users');
  let users: User[] = [];

  if (usersStringified) {
    users = JSON.parse(usersStringified);
  }

  return Promise.resolve(users);
}
