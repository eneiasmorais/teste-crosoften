import { AppError } from "../errors/app.error";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }

  return res.status(400).json({
    message: err.message,
  });
};
