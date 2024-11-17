import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingredient {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  unitName!: string; // name of the unit
}
