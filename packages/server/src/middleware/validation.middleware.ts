import type { Response, Request, NextFunction } from "express";
import { z, ZodError, type ZodObject } from "zod";
import { ApiError } from "../utils/ApiError";

const validateSchema = (schema: ZodObject<any, any>) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.body) {
        res.status(400);
      }
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errors = error.errors.map(
          (issue: any) => `${issue.path.join(".")} is ${issue.message}`
        );

        res.status(400).json({
          message: errors, success: false
        });
      } else {
         res.status(500).json({
          message: 'internal server error', success: false
         })
      }
    }
  };
};

export default validateSchema;
