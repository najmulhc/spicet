import { AppDataSource } from "../db/db-connect";
import { User } from "../entities/user.entity";

export const userRepository = AppDataSource.getRepository(User);
