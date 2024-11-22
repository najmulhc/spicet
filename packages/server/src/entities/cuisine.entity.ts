import {
  Column,
  Entity, 
  OneToMany,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { Recipe } from "./recipe.entity";

@Entity()
export class Cuisine {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  icon!: string; // icon of the cuisine type

  @OneToMany(() => Recipe, (recipe) => recipe.cuisine)
  recipes!: Relation<Recipe>[];
}
