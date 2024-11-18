import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { CookingTip } from "./cooking-tip.entity";
import { RecipeDetail } from "./recipe-detail.entity";

@Entity()
export class CookingStep {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column({
    default: undefined
  })
  img: string | undefined;
 
  @ManyToOne(() => RecipeDetail, (recipeDetail) => recipeDetail.steps)
  recipe!: Relation<RecipeDetail> 
}
