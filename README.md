
# 📦 Desafio Massagem - Backend

## 📝 Descrição do Projeto

Este projeto é a API backend de um sistema de agendamento de sessões de massagem. Foi desenvolvido como parte de um desafio técnico para vaga de desenvolvedor. O objetivo é construir uma aplicação robusta, segura e bem estruturada utilizando Node.js, TypeScript, Express e PostgreSQL.

## 🚀 Tecnologias Utilizadas

* **Node.js**
* **TypeScript**
* **Express**
* **PostgreSQL**
* **Docker (futuramente)**
* **JWT** (para autenticação - a ser implementado)
* **ts-node-dev** (para desenvolvimento com hot reload)

## 💻 Como Executar Localmente

### Pré-requisitos

* Node.js (v18 ou superior)
* npm ou yarn
* PostgreSQL instalado e rodando localmente

### Passo a passo de instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/desafio-massagem.git
   cd desafio-massagem/backend
   ```
2. Instale as dependências:

   ```bash
   npm install
   ```
3. Configure o TypeScript:

   O arquivo `tsconfig.json` já está configurado com:

   ```json
   {
     "target": "ESNext",
     "module": "ESNext",
     "moduleResolution": "node",
     "esModuleInterop": true,
     "strict": true,
     "forceConsistentCasingInFileNames": true,
     "skipLibCheck": true
   }
   ```
4. Crie o diretório de entrada:

   ```bash
   mkdir src
   touch src/index.ts
   ```
5. Adicione o seguinte código básico no `src/index.ts`:

   ```ts
   import express from 'express';

   const app = express();
   const port = 3000;

   app.get('/', (req, res) => {
     res.send('Olá, mundo! API rodando com Express e TypeScript.');
   });

   app.listen(port, () => {
     console.log(`Servidor rodando na porta ${port}`);
   });
   ```
6. Execute o servidor em modo desenvolvimento:

   ```bash
   npm run dev
   ```
7. Acesse [http://localhost:3000](http://localhost:3000) no navegador para verificar se está rodando.

### Scripts disponíveis

```json
"scripts": {
  "dev": "ts-node-dev --respawn src/index.ts"
}
```

## 👤 Usuários Padrão para Teste

> Ainda não implementado. Será adicionado junto com autenticação e persistência no banco de dados.

## 🧩 Estrutura Inicial do Projeto

```
backend/
│
├── node_modules/
├── src/
│   └── index.ts
├── package.json
├── tsconfig.json
└── ...
```

## 🗃️ Modelagem do Banco de Dados

> Ainda será criada com base nas entidades: Usuário, Cliente, Sessão, Agenda.
