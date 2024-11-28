import type { Request, Response } from "express";
import { ApiError } from "../utils/ApiError";
import { ingredientRepository } from "../repositories/ingredient.repository";
import { ApiResponse } from "../utils/ApiResponse";
import { Ingredient } from "../entities/ingredient.entity";

export const postIngredient = async (req: Request, res: Response) => {
  const ingredient = req.body;
  const createdIngredient = await ingredientRepository.createQueryBuilder().insert().into(Ingredient).values({
    ...ingredient
  }).execute();
  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { ingredient: createdIngredient },
        "Successfully stored the ingredient"
      )
    );
};

export const getIngredients = async (req: Request, res: Response) => {
  const ingredients = await ingredientRepository
    .createQueryBuilder()
    .getManyAndCount();

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

export const getOneIngredient = async (req: Request, res: Response) => {
  const { id } = req.params;
  console.log(id);
  const ingredient = await ingredientRepository
    .createQueryBuilder("ingredient")
    .where(  { id })
    .getOne();

    
  res.status(200).json(
    new ApiResponse(200, {
      ingredient
    })
  );
};

export const deleteIngredient = async (req: Request, res: Response) => {
  // need to write
  const { id } = req.params;
  const deleted = await ingredientRepository.createQueryBuilder().delete().where({id}).execute();

  res.status(204).json(
    new ApiResponse(204, {
      deleted
    }, 'successfully deleted')
  );
};

export const udpateIngredient = async (req: Request, res: Response) => {
  // need to write
};


// add ingredient to recipe 

export const addIngredientToRecipe = async (req:Request, res: Response ) => { 

  
}

// get all ingredients by recipe 

// remove ingredient  from recipe 

