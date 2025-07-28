import { 
    Router
} from 'express';
import rootRouter from "./root.routes"
import healthRoutes from "./health.routes"

const router = Router();

router.use('/', rootRouter);
router.use('/', healthRoutes);

export default router;
