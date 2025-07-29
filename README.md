# 🧘‍♂️ Desafio Massagem — API RESTful

Projeto desenvolvido como parte de um desafio técnico com foco na criação de uma API RESTful utilizando Node.js, Express, TypeScript, validação com Zod e infraestrutura dockerizada.

---

## 📦 Tecnologias utilizadas

- **Node.js**
- **Express**
- **TypeScript**
- **Zod** (validação de dados)
- **Docker** / **Docker Compose**

---

## 🚀 Como executar localmente

> Certifique-se de ter o Docker e Docker Compose instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/desafio-massagem.git
cd desafio-massagem

# 2. Execute a aplicação
docker compose up --build
```

A aplicação estará disponível em:
📍 `http://localhost:3000`

---

## 🔌 Endpoints disponíveis

### 📍 `GET /users`

Retorna todos os usuários disponíveis na memória (sem banco de dados por enquanto).

#### ✅ Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@email.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@email.com"
  }
]
```

---

### 📍 `POST /users`

Cria um novo usuário com os dados enviados no corpo da requisição.

#### 🧾 Body (JSON)

```json
{
  "name": "Carol",
  "email": "carol@email.com"
}
```

#### ✅ Regras de validação (Zod)

| Campo | Tipo   | Validação                   |
| ----- | ------ | ----------------------------- |
| name  | string | Obrigatório, não vazio      |
| email | string | Obrigatório, formato válido |

#### ❌ Exemplo de erro (422)

```json
{
  "error": {
    "name": ["Required"],
    "email": ["Invalid email"]
  }
}
```

---

## 👤 Usuários padrão para teste

Os usuários abaixo são inseridos automaticamente ao iniciar a API:

```json
[
  {
    "id": 1,
    "name": "Alice",
    "email": "alice@email.com"
  },
  {
    "id": 2,
    "name": "Bob",
    "email": "bob@email.com"
  }
]
```

---
