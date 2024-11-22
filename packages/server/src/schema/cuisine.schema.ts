import { object, string } from "zod";

export const cuisineShema = object({
  name: string({
    message:
      "No name of the cuisine is given, please give the name of the cuisine."
  }),
  icon: string({
    message:
      "No icon image of the cuisine is given, we need an icon for the cuisine."
  })
    .url()
    .refine((url: string) => /\.(png|bmp|svg|ico)$/i.test(url), {
      message: "Invalid icon given, please provide a valid icon."
    })
});
