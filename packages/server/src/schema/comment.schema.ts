import { object, string } from "zod";
import { uuidSchema } from "./shared.schema";

export const commentSchema = object({
  title: string({
    message: "please provide the comment"
  }),
  replyOf: uuidSchema("reply").optional(),
  recipe: uuidSchema("recipe").optional()
});
