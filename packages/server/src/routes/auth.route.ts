import { Router } from "express";
import { userSignIn } from "../controllers/auth.controller";
import validateSchema from "../middleware/validation.middleware";
import { userSchema } from "../schema/user.schema";

const authRouter = Router();

authRouter.post("/sign-in", validateSchema(userSchema), userSignIn);

export default authRouter;
