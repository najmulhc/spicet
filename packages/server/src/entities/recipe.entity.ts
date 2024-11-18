import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { RecipeDetail } from "./recipe-detail.entity";
import { Cuisine } from "./cuisine.entity";

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    default: false
  })
  isFeatured!: boolean;

  @Column()
  image: string | undefined;

  @Column()
  name!: string;

  @OneToOne(() => RecipeDetail)
  @JoinColumn()
  details!: Relation<RecipeDetail>;

  @Column()
  cookTime!: number;

  @ManyToOne(() => Cuisine, (cuisine) => cuisine.recipes)
  cuisine!: Relation<Cuisine>;

  // @Column({
  //   array: true
  // })
  // tags!: string[];
}
