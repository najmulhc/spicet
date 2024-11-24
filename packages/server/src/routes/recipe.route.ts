import { Router } from "express";
import asyncHandler from "../utils/routeHandler";
import { getRecipes, postRecipe } from "../controllers/recipe.controller";
import validatePoster from "../middleware/auth.middleware";
import validateSchema from "../middleware/validation.middleware";
import { recipeSchema } from "../schema/recipe.schema";
import { object } from "zod";

const recipeRouter = Router();

recipeRouter
  .post(
    "/",
    asyncHandler(validatePoster),
    validateSchema(
      object({
        recipe: recipeSchema
      })
    ),
    asyncHandler(postRecipe)
  )
  .get("/", asyncHandler(getRecipes));

export default recipeRouter;
