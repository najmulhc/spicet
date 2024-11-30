import type { Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { recipeDetailRepository } from "../repositories/recipe-detail.repository";
import { cookingTipRepository } from "../repositories/cooking-tip.repository";
import { cookingStepRepository } from "../repositories/cooking-step.repository";
import { CookingTip } from "../entities/cooking-tip.entity";

// add a cooking step

const createTip = async (tip: { title: string }) => {
  const insertedTip = await cookingTipRepository
    .createQueryBuilder("cookingTip")
    .insert()
    .into(CookingTip)
    .values({
      title: tip.title
    })
    .execute();

  const found = await cookingTipRepository
    .createQueryBuilder("cookingTip")
    .where("cookingTip.id = id", { id: insertedTip.raw[0].id })
    .getMany();
  return found.filter((item) => item.id === insertedTip.raw[0].id)[0];
};

export const addCookingStep = async (req: Request, res: Response) => {
  // if there is a tip
  const { step } = req.body;
  const { recipeDetailId } = req.params;
  let createdTip = null;

  if (step.tip) {
    createdTip = await createTip({
      title: step.tip.title
    });
  } else {
    createdTip = undefined;
  }

  // create the step
  const insertedStep = cookingStepRepository.create();
  insertedStep.title = step.title;
  insertedStep.description = step.description;
  insertedStep.recipe = req.body.recipe;
  if (step.img) {
    insertedStep.img = step.img;
  }
  if (createdTip) {
    insertedStep.tip = createdTip;
  }

  const savedStep = await cookingStepRepository.save(insertedStep);
  res
    .status(201)
    .json(
      new ApiResponse(
        201,
        { savedStep },
        "successfully got to the add cooking step part"
      )
    );
};

// delete a cooking step

export const deleteCookingStep = async (req: Request, res: Response) => {
  const { stepId } = req.params;
  const deleted = await cookingStepRepository
    .createQueryBuilder("cookingStep")
    .delete()
    .where("cookingStep.id = :id", { id: stepId })
    .execute();
  res
    .status(204)
    .json(
      new ApiResponse(
        204,
        {},
        "You will get all the steps of the recipe given."
      )
    );
};

// get all the cooking steps

export const getAllCookingStepsByRecipe = async (
  req: Request,
  res: Response
) => {
  const steps = await cookingStepRepository
    .createQueryBuilder("cookingStep")
    .where("cookingStep.recipe = :id", { id: req.params.recipeDetailId })
    .leftJoinAndSelect("cookingStep.tip", "cookingTip")
    .getMany();

  res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { steps },
        "You will get all the steps of the recipe given."
      )
    );
};
