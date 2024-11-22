import type { NextFunction, Request, Response } from "express";

type RouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void> | void;

const asyncHandler =
  (fn: RouteHandler) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error: any) {
      res.status(error.status ? (error.status as number) : 400).json({
        success: false,
        message: error.message
      });
    }
  };

export default asyncHandler;
