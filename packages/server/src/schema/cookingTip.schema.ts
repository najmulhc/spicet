import { object, string } from "zod";

export const cookingTipSchema = object({
  title: string({
    message: "Please provide a title of the tip."
  }), 
});
