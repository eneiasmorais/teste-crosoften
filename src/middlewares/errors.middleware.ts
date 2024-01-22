import { AppError } from "../errors/app.error";
import { Request, Response, NextFunction } from "express";
import "express-async-errors";

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
  console.error(err);

  return res.status(400).json({
    message: err.message,
  });
};
