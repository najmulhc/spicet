import { AppDataSource } from "../db/db-connect";
import { RecipeDetail } from "../entities/recipe-detail.entity";

export const recipeDetailRepository = AppDataSource.getRepository(RecipeDetail);
