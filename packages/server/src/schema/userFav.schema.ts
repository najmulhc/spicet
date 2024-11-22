import { object } from "zod";
import { emailSchema } from "./user.schema";
import { uuidSchema } from "./shared.schema";

export const userFavSchema = object({
  user: emailSchema,
  recipe: uuidSchema("recipe")
});
