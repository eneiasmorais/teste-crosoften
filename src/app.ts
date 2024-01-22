import "express-async-errors";
import express from "express";
import { errorHandler } from "./middlewares/errors.middleware";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use(errorHandler);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/users", usersRoutes);
app.use("/tasks");

export { app };
