import { users } from '../models/user.model';
import { User } from '../interfaces/user.interface';

export function getAllUsers(): User[] {
  return users;
}

export function addUser(data: Omit<User, 'id'>): User {
  const newUser: User = {
    id: users.length + 1,
    ...data,
  };

  users.push(newUser);
  return newUser;
}