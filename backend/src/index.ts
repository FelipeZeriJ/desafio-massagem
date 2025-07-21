import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Olá, mundo! API rodando com Express e TypeScript.');
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
