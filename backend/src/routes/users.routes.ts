import { Router } from 'express';
import { handleGetUsers, handleCreateUser } from '../controllers/users.controller';

const router = Router();

router.get('/users', handleGetUsers);
router.post('/users', handleCreateUser)

export default router;
