import { Router } from "express";
import { userSignIn } from "../controllers/auth.controller";

const authRouter = Router();

authRouter.post("/sign-in", userSignIn);


export default authRouter;