import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CookingTip {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

 
}
