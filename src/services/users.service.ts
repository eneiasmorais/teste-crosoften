import { prisma } from "../database/prisma.service";
import { redis } from "../database/redis.service";
import { IUsersRequest } from "../interfaces/users.interface";
// import { BooksJobs } from "../jobs/books.jobs";

class UsersService {
  async create({ name, email, password }: IUsersRequest) {
    const newUser = await prisma.users.create({
      data: {
        name,
        email,
        password,
      },
    });
    return newUser;
  }
}

const usersService = new UsersService();

export { usersService };
