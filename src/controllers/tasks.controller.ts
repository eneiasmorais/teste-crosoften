import { Request, Response, NextFunction } from "express";
import { TaskService } from "../services/tasks.service";

const taskService = new TaskService();

class TaskController {
  async createTask(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;
    const { title, description, status } = req.body;

    try {
      const task = await taskService.createTask(
        userId,
        title,
        description,
        status
      );
      res.status(201).json(task);
    } catch (error) {
      next(error);
    }
  }

  async getAllTasks(req: Request, res: Response, next: NextFunction) {
    const { userId } = req.params;

    try {
      const tasks = await taskService.getAllTasks(userId);
      res.json(tasks);
    } catch (error) {
      next(error);
    }
  }

  async getTaskById(req: Request, res: Response, next: NextFunction) {
    const { taskId } = req.params;

    try {
      const task = await taskService.getTaskById(taskId);
      res.json(task);
    } catch (error) {
      next(error);
    }
  }

  async updateTask(req: Request, res: Response, next: NextFunction) {
    const { taskId } = req.params;
    const { title, description, status } = req.body;

    try {
      const updatedTask = await taskService.updateTask(
        taskId,
        title,
        description,
        status
      );
      res.json(updatedTask);
    } catch (error) {
      next(error);
    }
  }

  async deleteTask(req: Request, res: Response, next: NextFunction) {
    const { taskId } = req.params;

    try {
      const deletedTask = await taskService.deleteTask(taskId);
      res.json(deletedTask);
    } catch (error) {
      next(error);
    }
  }
}

export { TaskController };
