import { object, string } from "zod";
import { cookingTipSchema } from "./cookingTip.schema";
import { imageSchema } from "./recipe.schema";
import { uuidSchema } from "./shared.schema";

export const cookingStepSchema = object({
  title: string({
    message: "No title of the step is given, please give us a title."
  }),
  description: string({
    message: "Please provide a description of the step"
  }),
  img: imageSchema.optional(),
  tip: cookingTipSchema.optional(),
  recipe: uuidSchema("recipe")
});
