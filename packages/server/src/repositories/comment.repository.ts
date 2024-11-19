import { AppDataSource } from "../db/db-connect";

export const commentRepository = AppDataSource.getRepository(Comment)