import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { RecipeDetail } from "./recipe-detail.entity";
import { Ingredient } from "./ingredient.entity";

@Entity()
export class RecipeIngredent {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  count!: number;

  @ManyToOne(() => RecipeDetail, (recipeDetail) => recipeDetail.ingredients)
  recipe!: Relation<RecipeDetail>;

  @ManyToOne(() => Ingredient, (ingredient) => ingredient.recipes)
  ingredient!: Relation<Ingredient>;
}
