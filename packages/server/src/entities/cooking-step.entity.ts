import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}
