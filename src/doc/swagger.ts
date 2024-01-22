const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "TodoList API",
      version: "1.0.0",
      description: "API para gerenciar tarefas em um TodoList.",
    },
  },
  apis: ["./src/routes/*.js"], // Caminho para os arquivos que contêm as rotas da API
};

const specs = swaggerJsdoc(options);

module.exports = { specs, swaggerUi };
