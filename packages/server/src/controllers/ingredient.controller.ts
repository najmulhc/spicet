import type { Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { ingredientRepository } from "../repositories/ingredient.repository";
import { ApiResponse } from "../utils/ApiResponse";

export const postIngredient = async (req: Request, res: Response) => {
  const ingredient = req.body;
  const createdIngredient = await ingredientRepository.create({
    ...ingredient
  });
  const savedIngredient = await ingredientRepository.save(createdIngredient);
  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { ingredient: savedIngredient },
        "Successfully stored the ingredient"
      )
    );
};

export const getIngredients = async (req: Request, res: Response) => {
  const ingredients = await ingredientRepository.find({
    relations: {
      recipes: true
    }
  });
  res.status(200).json(
    new ApiResponse(
      200,
      {
        ingredients
      },
      "Successfully fetched all the ingredients"
    )
  );
};


export const deleteIngredient = async (req: Request, res:Response) => {
     // need to write
}

export const udpateIngredient = async (req:Request, res: Response) => {} 
