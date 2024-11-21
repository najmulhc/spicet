import type { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { userRepository } from "../repositories/user.repository";

const userSignIn = async (req: Request, res: Response) => {
  const {name, email, avatar} = req.body;
  const newUser = await userRepository.create({
    name,email, avatar
  }) 
  const savedUser = await userRepository.save(newUser)
  res.status(200).json(
    new ApiResponse(
      200,
      {
        user: savedUser
      },
      "successfully fetched the data."
    )
  );
};

export { userSignIn };
