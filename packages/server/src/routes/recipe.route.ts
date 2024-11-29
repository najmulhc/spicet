import { Router } from "express";
import asyncHandler from "../utils/routeHandler";
import {
  editRecipeDetail,
  getRecipes,
  postRecipe
} from "../controllers/recipe.controller";
import validatePoster from "../middleware/auth.middleware";
import validateSchema from "../middleware/validation.middleware";
import { recipeSchema } from "../schema/recipe.schema";
import { object } from "zod";
import postAuthMiddleware from "../middleware/post-auth.middleware";
import { recipeIngredientSchema } from "../schema/ingredient.schema";
import {
  addIngredientToRecipe,
  deleteIngredientFromRecipe,
  getIngredientsByRecipe
} from "../controllers/ingredient.controller";

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
  .get("/", asyncHandler(getRecipes))
  .patch(
    "/:recipeDetailId",
    asyncHandler(validatePoster),
    asyncHandler(postAuthMiddleware),
    asyncHandler(editRecipeDetail)
  )
  .post(
    "/:recipeDetailId/ingredients",
    asyncHandler(validatePoster),
    asyncHandler(postAuthMiddleware),
    validateSchema(recipeIngredientSchema),
    asyncHandler(addIngredientToRecipe)
  )
  .get("/:recipeDetailId/ingredients", asyncHandler(getIngredientsByRecipe))
  .delete(
    "/:recipeDetailId/ingredient/:recipeIngredientId",
    asyncHandler(validatePoster),
    asyncHandler(postAuthMiddleware),
    asyncHandler(deleteIngredientFromRecipe)
  );

export default recipeRouter;
