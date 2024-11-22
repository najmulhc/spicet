import { AppDataSource } from "../db/db-connect";
import { UserFav } from "../entities/user-fav.entity";

export const userFavRepository = AppDataSource.getRepository(UserFav)