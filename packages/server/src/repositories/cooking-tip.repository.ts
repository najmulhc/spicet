import { AppDataSource } from "../db/db-connect";
import { CookingTip } from "../entities/cooking-tip.entity";

export const cookingTipRepository = AppDataSource.getRepository(CookingTip)