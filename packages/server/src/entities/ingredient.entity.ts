import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { RecipeIngredent } from "./recipe-ingredient.entity";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  unitName!: string; // name of the unit

  @OneToMany(
    () => RecipeIngredent,
    (recipeIngredient) => recipeIngredient.ingredient
  )
  recipes!: Relation<RecipeIngredent>[];
}
