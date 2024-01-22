import { Prisma, PrismaClient, TaskStatus } from "@prisma/client";
import { AppError } from "../errors/app.error";

const prisma = new PrismaClient();

class TaskService {
  async createTask(
    userId: string,
    title: string,
    description: string,
    status: TaskStatus
  ) {
    try {
      const task = await prisma.task.create({
        data: {
          title,
          description,
          status,
          userId,
        } as Prisma.TaskUncheckedCreateInput,
      });

      return task;
    } catch (error) {
      throw new AppError("Failed to create task", 500);
    }
  }

  async getAllTasks(userId: string) {
    try {
      const tasks = await prisma.task.findMany({
        where: {
          userId,
        },
      });

      return tasks;
    } catch (error) {
      throw new AppError("Failed to retrieve tasks", 500);
    }
  }

  async getTaskById(taskId: string) {
    try {
      const task = await prisma.task.findUnique({
        where: {
          id: taskId,
        },
      });

      if (!task) {
        throw new AppError("Task not found", 404);
      }

      return task;
    } catch (error) {
      throw new AppError("Failed to retrieve task", 500);
    }
  }

  async updateTask(
    taskId: string,
    title: string,
    description: string,
    status: TaskStatus
  ) {
    try {
      const updatedTask = await prisma.task.update({
        where: {
          id: taskId,
        },
        data: {
          title,
          description,
          status,
        },
      });

      return updatedTask;
    } catch (error) {
      throw new AppError("Failed to update task", 500);
    }
  }

  async deleteTask(taskId: string) {
    try {
      const deletedTask = await prisma.task.delete({
        where: {
          id: taskId,
        },
      });

      return deletedTask;
    } catch (error) {
      throw new AppError("Failed to delete task", 500);
    }
  }
}

export { TaskService };
