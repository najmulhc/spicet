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

        throw new ApiError(400 , errors.join(" "));
      } else {
        throw new ApiError(500, "Internal server error!");
      }
    }
  };
};

export default validateSchema;
