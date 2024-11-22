import { AppDataSource } from "../db/db-connect";
import { Ingredient } from "../entities/ingredient.entity";

export const ingredientRepository = AppDataSource.getRepository(Ingredient)