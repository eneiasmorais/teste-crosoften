# TodoList API

## Descrição

Esta é uma API RESTful para uma aplicação TodoList, onde os usuários podem gerenciar suas tarefas.

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma (ORM)
- MySQL
- JWT (JSON Web Token)

## Requisitos

- Node.js instalado
- MySQL instalado e configurado
- Docker (opcional, caso deseje usar contêineres)

## Configuração

1. Clone o repositório:

   git clone https://github.com/seu-usuario/cros_todolist_api.git

Instale as dependências:

cd cros_todolist_api
npm install

Configure as variáveis de ambiente:

Renomeie o arquivo .env.example para .env e configure as variáveis conforme necessário.
Configure o banco de dados:

Crie um banco de dados MySQL e atualize a URL do banco de dados no arquivo .env.
Execute as migrações do banco de dados:

npx prisma migrate dev

EXECUÇÃO:

Inicie a aplicação:

npm start
A aplicação estará disponível em http://localhost:3000.

ROTAS

POST /signup: Cria uma nova conta de usuário.

Parâmetros:
name: Nome do usuário.
email: Endereço de e-mail do usuário.
password: Senha do usuário.
POST /login: Realiza o login do usuário.

Parâmetros:
email: Endereço de e-mail do usuário.
password: Senha do usuário.
Outras rotas relacionadas a tarefas e usuários podem ser adicionadas conforme necessário.
