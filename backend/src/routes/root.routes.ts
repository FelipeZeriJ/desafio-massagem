import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Olá! Página inicial da API 🚀');
});

export default router;
