import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { User } from "./user.entity";
import { Recipe } from "./recipe.entity";
import { CookingStep } from "./cooking-step.entity";
import { Comment } from "./comment.entity";
import { RecipeIngredent } from "./recipe-ingredient.entity";

@Entity()
export class RecipeDetail {
  @PrimaryGeneratedColumn("uuid")
  id!: string;
 

  @Column({
    default: 0
  })
  likes!: number;

  @ManyToOne(() => User, (user) => user.recipes)
  user!: Relation<User>;

  @OneToOne(() => Recipe)
  @JoinColumn({})
  recipe!: Relation<Recipe>;

  @OneToMany(() => CookingStep, (cookingStep) => cookingStep.recipe)
  steps!: Relation<CookingStep>[];

  @OneToMany(() => Comment, (comment) => comment.recipe)
  comments!: Relation<Comment>[];

  @OneToMany(
    () => RecipeIngredent,
    (recipeIngredient) => recipeIngredient.recipe
  )
  ingredients!: Relation<RecipeIngredent>[];
}
