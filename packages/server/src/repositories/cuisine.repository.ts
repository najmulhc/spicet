import { AppDataSource } from "../db/db-connect";
import { Cuisine } from "../entities/cuisine.entity";

export const cuisineRepository = AppDataSource.getRepository(Cuisine)