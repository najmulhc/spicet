import type { Request, Response } from "express"; 
import { ingredientRepository } from "../repositories/ingredient.repository";
import { ApiResponse } from "../utils/ApiResponse";
import { Ingredient } from "../entities/ingredient.entity";
import { recipeIngredientRepository } from "../repositories/recipe-ingredient.repository";

export const postIngredient = async (req: Request, res: Response) => {
  const ingredient = req.body;
  const createdIngredient = await ingredientRepository
    .createQueryBuilder()
    .insert()
    .into(Ingredient)
    .values({
      ...ingredient
    })
    .execute();

  const ingredients = await ingredientRepository.find();
  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { ingredients: ingredients },
        "Successfully stored the ingredient"
      )
    );
};

export const getIngredients = async (req: Request, res: Response) => {
  const ingredients = await ingredientRepository
    .createQueryBuilder("ingredient")
    .getMany();

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
    .where({ id })
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
  const deleted = await ingredientRepository
    .createQueryBuilder()
    .delete()
    .where({ id })
    .execute();

  res.status(204).json(
    new ApiResponse(
      204,
      {
        deleted
      },
      "successfully deleted"
    )
  );
};

export const udpateIngredient = async (req: Request, res: Response) => {
  // need to write
};

// add ingredient to recipe

export const addIngredientToRecipe = async (req: Request, res: Response) => {
  const newRecipeIngredient = await recipeIngredientRepository.create();

  const { recipe, ingredient, count } = req.body;

  const foundIngredient = await ingredientRepository.find({
    where: {
      id: ingredient
    }
  });

  newRecipeIngredient.recipe = recipe;
  newRecipeIngredient.ingredient = foundIngredient[0];
  newRecipeIngredient.count = count;

  const savedRecipeIngredient =
    await recipeIngredientRepository.save(newRecipeIngredient);

  res.status(201).json(
    new ApiResponse(
      201,
      {
        savedRecipeIngredient
      },
      "we will add the ingredient soon"
    )
  );
};

// get all ingredients by recipe

export const getIngredientsByRecipe = async (req: Request, res: Response) => {
  const { recipeDetailId } = req.params;
  const ingredientsList = await recipeIngredientRepository
    .createQueryBuilder("recipeIngredients")
    .leftJoinAndSelect("recipeIngredients.recipe", "recipe")
    .where("recipe.id  = :id", { id: recipeDetailId })
    .addSelect([])
    .leftJoinAndSelect("recipeIngredients.ingredient", "ingredient")
    .addSelect(["ingredient.name", "ingredient.unitName"])
    .getMany();
  res.status(200).json(
    new ApiResponse(200, {
      ingredients: ingredientsList
    })
  );
};

// remove ingredient  from recipe

export const deleteIngredientFromRecipe = async (
  req: Request,
  res: Response
) => {
  const { recipeIngredientId } = req.params;

  const deleted = await recipeIngredientRepository
    .createQueryBuilder("recipeIngredient")
    .delete()
    .where({ id: recipeIngredientId }).execute();

  res.status(204).json(new ApiResponse(204, {deleted}, "Successfully deleted"));
};
