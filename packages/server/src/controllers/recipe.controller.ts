import type { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { recipeRepository } from "../repositories/recipe.repository";
import { Recipe } from "../entities/recipe.entity";

export const postRecipe = async (req: Request, res: Response) => {
  const { recipe } = req.body;
  const insertedRecipe = await recipeRepository
    .createQueryBuilder()
    .insert()
    .into(Recipe)
    .values([recipe])
    .execute();
  res.json(
    new ApiResponse(200, {
      recipe: insertedRecipe
    })
  );
};

export const getRecipes = async (req: Request, res: Response) => {
  const recipes = await recipeRepository
    .createQueryBuilder("recipe")
    .where({})
    .getMany();
  res.status(200).json(
    new ApiResponse(
      200,
      {
        recipes
      },
      "successfully fetched recipes"
    )
  );
};
