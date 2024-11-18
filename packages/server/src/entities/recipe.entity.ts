import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { RecipeDetail } from "./recipe-detail.entity";

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  image: string | undefined;

  @Column()
  name!: string;
 

  @OneToOne(() => RecipeDetail)
  @JoinColumn()
  details!: RecipeDetail

  @Column() 
  cookTime!: number
}
