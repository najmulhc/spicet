// this is the middleware  to test if the user has the edit access of the post.

import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { userRepository } from "../repositories/user.repository";

const validatePoster = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { email } = req.body;

  if (!email) {
    throw new ApiError(401, "Not a user");
  }

  // finding the user from the db
  const foundUser = await userRepository
    .createQueryBuilder("user")
    .where("user.email = :email", {
      email
    })
    .getOneOrFail();
  if (foundUser) {
    next();
  } else {
    throw new ApiError(401, "You do not have any account registered");
  }
};

export default validatePoster;
