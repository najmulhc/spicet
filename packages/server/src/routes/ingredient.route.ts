import { Router } from "express";
import validateSchema from "../middleware/validation.middleware";
import { ingredientSchema } from "../schema/ingredient.schema";
import { getIngredients, postIngredient } from "../controllers/ingredient.controller";
import asyncHandler from "../utils/routeHandler";

const router = Router();

router.post(
  "/",
  asyncHandler(validateSchema(ingredientSchema)),
  asyncHandler(postIngredient)
).get("/" , asyncHandler(getIngredients));

export default router;
