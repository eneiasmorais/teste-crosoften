// users.controller.js
const express = require("express");
const { usersService } = require("../services/users.service");
const { generateToken } = require("../utils/auth.utils");

const usersController = express.Router();

// Rota para criar uma conta (signup)
usersController.post(
  "/signup",
  async (
    req: { body: { name: string; email: string; password: string } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { user: any; token: any }): void; new (): any };
      };
    },
    next: (arg0: unknown) => void
  ) => {
    try {
      const { name, email, password } = req.body;

      const newUser = await usersService.createUser(name, email, password);

      const token = generateToken(newUser.id);

      res.status(201).json({ user: newUser, token });
    } catch (error) {
      next(error);
    }
  }
);

// Rota para realizar o login
usersController.post(
  "/login",
  async (
    req: { body: { email: any; password: any } },
    res: {
      status: (arg0: number) => {
        (): any;
        new (): any;
        json: { (arg0: { user: any; token: any }): void; new (): any };
      };
    },
    next: (arg0: unknown) => void
  ) => {
    try {
      const { email, password } = req.body;

      const user = await usersService.loginUser(email, password);

      const token = generateToken(user.id);

      res.status(200).json({ user, token });
    } catch (error) {
      next(error);
    }
  }
);

export default usersController;
