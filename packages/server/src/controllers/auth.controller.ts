import type { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { userRepository } from "../repositories/user.repository";
import { ApiError } from "../utils/ApiError";
import type { StringLike } from "bun";

const userSignIn = async (req: Request, res: Response) => {
  const { name, email, avatar } = req.body;

 try {
     const existedUser = await userRepository.findOne({
       where: {
         email
       },
       relations: {
         recipes: true,
         favourites: true
       },
    //    select: {
    //      email: true,
    //      avatar: true
    //    }
     });
     if (existedUser) {
       return res.status(200).json(
         new ApiResponse(
           200,
           {
             user: existedUser
           },
           "we have already a user in this email", 
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
 } catch (error) {
   console.log(error);
   res.json({
    message: "we must have a problem"
   })
 }
};

export { userSignIn };
