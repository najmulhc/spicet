import { number, object, string } from "zod";
import { uuidSchema } from "./shared.schema";

export const ingredientSchema = object({
  name: string({
    message:
      "No name of the ingredient is given, please provide name of the ingredient."
  }),
  unitName: string({
    message: "Please provide a singular name of the unit."
  })
});

export const recipeIngredientSchema = object({
  recipe: uuidSchema("recipe"),
  ingredient: uuidSchema("ingredient"),
  count: number({
    message:
      "No unit value of the ingredient is given, please write the amount in the given unit."
  })
});
