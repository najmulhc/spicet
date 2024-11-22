import { string } from "zod";

export const uuidSchema = (name: string) => {
  return string({
    message: `No id for ${name} is given, please provide a valid ${name} id.`
  }).uuid(`The given id of ${name} is not valid, please provide a valid one.`);
};
