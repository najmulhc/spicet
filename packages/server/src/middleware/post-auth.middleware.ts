// this will give the edit access of the user to his post (only the poster can edit the post)

import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { recipeDetailRepository } from "../repositories/recipe-detail.repository";

const postAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user_id = req.body.user.id;
  if (!user_id) {
    throw new ApiError(401, "You are not a valid user");
  }
  console.log(req.body.user);
  const { recipeDetailId } = req.params;
  const recipe = await recipeDetailRepository
    .createQueryBuilder("recipeDetail")
    .where("recipeDetail.id = :id", { id: recipeDetailId })
    .leftJoinAndSelect("recipeDetail.user", "user")
    .getOne();

  if (recipe?.user.id == user_id) {
    req.body.recipe = recipe;
    next();
  } else {
    throw new ApiError(401, "Sorry! You do not have access to edit this post");
  }
};

export default postAuthMiddleware;
