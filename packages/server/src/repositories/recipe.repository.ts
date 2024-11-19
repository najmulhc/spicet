import { AppDataSource } from "../db/db-connect"; 
import { Recipe } from "../entities/recipe.entity";

export const recipeRepository = AppDataSource.getRepository(Recipe)