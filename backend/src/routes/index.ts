import { 
    Router
} from 'express';
import rootRouter from './root.routes'
import healthRoutes from './health.routes'
import usersRoutes from './users.routes'

const router = Router();

router.use('/', rootRouter);
router.use('/', healthRoutes);
router.use('/', usersRoutes)

export default router;
