import { AppDataSource } from "../db/db-connect";
import { RecipeIngredent } from "../entities/recipe-ingredient.entity";

export const recipeIngredientRepository =
  AppDataSource.getRepository(RecipeIngredent);
