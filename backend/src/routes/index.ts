import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('Olá, mundo! API rodando com Express e TypeScript.');
});

router.get('/ping', (req: Request, res: Response) => {
  res.json({ message: 'pong' });
});

export default router;
