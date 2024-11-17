import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  image: string | undefined;

  @Column()
  name!: string;
 

  @Column() 
  cookTime!: number
}
