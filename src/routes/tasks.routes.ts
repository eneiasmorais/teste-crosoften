import { Router } from "express";
import TaskController from "../controllers/tasks.controller";

const tasksRoutes = Router();

tasksRoutes.post("/:userId/create", TaskController.createTask);
tasksRoutes.get("/:userId", TaskController.getAllTasks);
tasksRoutes.get("/:taskId", TaskController.getTaskById);
tasksRoutes.put("/:taskId/update", TaskController.updateTask);
tasksRoutes.delete("/:taskId/delete", TaskController.deleteTask);

export { tasksRoutes };
