import {
  Column,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { CookingStep } from "./cooking-step.entity";

@Entity()
export class CookingTip {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  title!: string;

  @OneToOne(() => CookingStep)
  step!: Relation<CookingStep>;
}
