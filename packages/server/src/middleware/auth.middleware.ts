// this is the middleware  to test if the user has the edit access of the post.

import type { NextFunction, Request, Response } from "express";

const validatePoster = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export default validatePoster;
