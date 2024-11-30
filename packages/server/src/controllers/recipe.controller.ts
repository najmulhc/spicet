import type { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { recipeRepository } from "../repositories/recipe.repository"; 
import { recipeDetailRepository } from "../repositories/recipe-detail.repository";

export const postRecipe = async (req: Request, res: Response) => {
  const { recipe } = req.body;
  let insertedRecipe = await recipeRepository.create();
  insertedRecipe = { ...recipe };
  const savedRecipe = await recipeRepository.save(insertedRecipe);

  // get the user
  const { user } = req.body;

 
// make the recipe
  const detailedRecipe = await recipeDetailRepository.create();
  detailedRecipe.user = user;
  detailedRecipe.recipe = savedRecipe;

  const savedDetail = await recipeDetailRepository.save(detailedRecipe);

  const responseDetail = await recipeDetailRepository
    .createQueryBuilder("recipeDetail")
    .where("recipeDetail.id = :id", { id: savedDetail.id })
    .leftJoinAndSelect("recipeDetail.ingredients", "ingredient")
    .leftJoinAndSelect("recipeDetail.steps", "cookingSteps")
    .leftJoinAndSelect("recipeDetail.recipe", "recipe")
    .getMany();

  res.json(
    new ApiResponse(201, {
      recipe: responseDetail
    })
  );
};

export const getRecipes = async (req: Request, res: Response) => {
  // it will return all the recipes that are published
  const recipes = await recipeRepository
    .createQueryBuilder("recipe")
    .where("recipe.isPublished")
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

// add step to recipe
 

export const editRecipeDetail = async (req: Request, res: Response) => {
  const recipeDetail = await recipeDetailRepository
    .createQueryBuilder("recipeDetail")
    .leftJoinAndSelect("recipeDetail.ingredients", "ingredient")
    .leftJoinAndSelect("recipeDetail.steps", "cookingSteps")
    .leftJoin("recipeDetail.recipe", "recipe")
    .addSelect([
      "recipe.cookTime",
      "recipe.name",
      "recipe.image",
      "recipe.isPublished"
    ])
    .where("recipeDetail.id = :id", { id: req.body.recipe.id })
    .getOne();

  res.status(200).json(
    new ApiResponse(200, {
      recipe: recipeDetail
    })
  );
};

// publish toggler the user must be the poster
export const publishToggler = (req: Request, res: Response) => {
  const {steps, ingredients} = req.body.recipe;

  
};
