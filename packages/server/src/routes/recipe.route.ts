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
import { cookingStepSchema } from "../schema/cookingStep.schema";
import {
  addCookingStep,
  getAllCookingStepsByRecipe
} from "../controllers/cooking-step.controller";

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
  )
  .post(
    "/:recipeDetailId/step",
    asyncHandler(validatePoster),
    asyncHandler(postAuthMiddleware),
    validateSchema(
      object({
        step: cookingStepSchema
      })
    ),
    asyncHandler(addCookingStep)
  )
  .get("/:recipeDetailId/step", asyncHandler(getAllCookingStepsByRecipe));

export default recipeRouter;
