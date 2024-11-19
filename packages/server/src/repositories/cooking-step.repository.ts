import { AppDataSource } from "../db/db-connect";
import { CookingStep } from "../entities/cooking-step.entity";

export const cookingStepRepository = AppDataSource.getRepository(CookingStep)