import { z } from "zod";

export const emailSchema = z
  .string({
    message: "No email is given, we need the email for the user."
  })
  .email({
    message:
      "Invalid email address given, please provide a valid email address."
  });

export const avatarSchema = z
  .string()
  .url()
  .refine((url: string) => /\.(jpeg|jpg|gif|png|webp|bmp|svg)$/i.test(url), {
    message:
      "Invalid avatar image link given, pelase provide a valid avatar image."
  });

export const userSchema = z.object({
  name: z.string({
    message: "No name is given, we need to have the name of the user."
  }),
  email: emailSchema,
  avatar: avatarSchema
});
