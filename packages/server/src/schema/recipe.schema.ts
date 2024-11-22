import { number, object, string } from "zod";

// he wants to create a new recipe!

export const recipeNameSchem = string({
  message: "No name of the recipe is given, please provide a name."
})
  .min(5, {
    message:
      "Incorrect type of name given, please make sure the name is at least 5 characters long."
  })
  .max(32, {
    message: "The name is too big!"
  });
export const imageSchema = string()
  .url()
  .refine((url: string) => /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url), {
    message: "Invalid  image link given, pelase provide a valid image."
  });

export const recipeSchema = object({
  name: recipeNameSchem,
  image: imageSchema,
  cooktime: number({
    message:
      "No cooking time is given, please give the time we need to cook the dish."
  })
});
