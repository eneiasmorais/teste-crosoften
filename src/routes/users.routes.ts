import { Router } from "express";
import usersController from "../controllers/users.controller";

const usersRoutes = Router();

usersRoutes.post("/signup", usersController.create());
usersRoutes.post("/login", usersController.login);

export { usersRoutes };
