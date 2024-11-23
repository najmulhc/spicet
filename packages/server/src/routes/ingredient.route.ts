import { Router } from "express";
import validateSchema from "../middleware/validation.middleware";
import { ingredientSchema } from "../schema/ingredient.schema";
import {
  deleteIngredient,
  getIngredients,
  getOneIngredient,
  postIngredient
} from "../controllers/ingredient.controller";
import asyncHandler from "../utils/routeHandler";

const router = Router();

router
  .post(
    "/",
    asyncHandler(validateSchema(ingredientSchema)),
    asyncHandler(postIngredient)
  )
  .get("/", asyncHandler(getIngredients))
  .get("/:id", asyncHandler(getOneIngredient))
  .delete("/:id", asyncHandler(deleteIngredient));

export default router;
