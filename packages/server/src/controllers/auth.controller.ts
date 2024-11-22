import type { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { userRepository } from "../repositories/user.repository";
import { ApiError } from "../utils/ApiError";

const userSignIn = async (req: Request, res: Response): Promise<void> => {
  const { name, email, avatar } = req.body;

  try {
    const existedUser = await userRepository.findOne({
      where: {
        email
      },
      relations: {
        recipes: true,
        favourites: true
      }
    });
    if (existedUser) {
      res.status(200).json(
        new ApiResponse(
          200,
          {
            user: existedUser
          },
          "we have already a user in this email"
        )
      );
    }

    // we will create a new user if there is no user found
    const newUser = await userRepository.create({
      name,
      email,
      avatar
    });
    const savedUser = await userRepository.save(newUser);
    res.status(200).json(
      new ApiResponse(
        200,
        {
          user: savedUser
        },
        "successfully fetched the data."
      )
    );
  } catch (error: any) {
    throw new ApiError(500, error);
  }
};

export { userSignIn };
