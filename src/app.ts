import "express-async-errors";
import express from "express";
// import { booksRoutes } from "./routes/books.routes"
import { errorHandler } from "./middlewares/errors.middleware";

const app = express();

app.use(express.json());
// app.use("/books", booksRoutes);
app.use(errorHandler);

export { app };
