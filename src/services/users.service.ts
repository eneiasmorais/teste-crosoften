// userService.ts
import { PrismaClient, User } from "@prisma/client";
import { AppError } from "../errors/app.error";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

class UserService {
  async createUser(
    name: string,
    email: string,
    password: string
  ): Promise<User> {
    try {
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password,
        },
      });

      return user;
    } catch (error) {
      throw new AppError("Failed to create user", 500);
    }
  }

  async loginUser(email: string, password: string): Promise<string> {
    try {
      const user = await prisma.user.findUnique({
        where: {
          email,
        },
      });

      if (!user || user.password !== password) {
        throw new AppError("Invalid credentials", 401);
      }

      const token = jwt.sign(
        { userId: user.id, userEmail: user.email },
        "SECRETJWT",
        { expiresIn: "1h" }
      );

      return token;
    } catch (error) {
      throw new AppError("Failed to login user", 500);
    }
  }
}

const usersService = new UserService();

export { usersService };
