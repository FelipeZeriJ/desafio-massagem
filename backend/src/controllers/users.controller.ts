import { Request, Response } from 'express';
import { getAllUsers, addUser } from '../services/users.service';
// import { User } from '../interfaces/user.interface';
import { createUserSchema } from '../schemas/user.schema';
import { treeifyError } from 'zod';

export function handleGetUsers(req: Request, res: Response): Response {
  const allUsers = getAllUsers();
  return res.json(allUsers);
}

export function handleCreateUser(req: Request, res: Response): Response {
  const parsed = createUserSchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json(treeifyError(parsed.error));
  }

  const newUser = addUser(parsed.data);
  return res.status(201).json(newUser);
}