import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { RecipeDetail } from "./recipe-detail.entity";

@Entity()
export class Comment {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  text!: string;

  @OneToMany(() => Comment, (comment) => comment.replyOf)
  replies!: Relation<Comment>[];

  @ManyToOne(() => Comment, (comment) => comment.replies)
  replyOf: Relation<Comment> | undefined;

  @ManyToOne(() => RecipeDetail, (recipe) => recipe.comments)
  recipe: Relation<RecipeDetail> | undefined;
}
