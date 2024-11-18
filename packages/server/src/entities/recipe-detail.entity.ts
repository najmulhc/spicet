import {
  Column,
  Entity,
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

@Entity()
export class RecipeDetail {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column({
    default: 0
  })
  likes!: number; // icon of the cuisine type

  @ManyToOne(() => User, (user) => user.recipes)
  user!: Relation<User>;

  @OneToOne(() => Recipe)
  recipe!: Recipe;

  @OneToMany(() => CookingStep, (cookingStep) => cookingStep.recipe)
  steps!: Relation<CookingStep>[];

  @OneToMany(() => Comment, (comment) => comment.recipe)
  comments!: Relation<Comment>[];
}
