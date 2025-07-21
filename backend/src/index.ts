import express from 'express';
import dotenv from 'dotenv';
import routes from './routes';

// Carrega variáveis do .env
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Usa as rotas definidas no arquivo routes/index.ts
app.use('/', routes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
