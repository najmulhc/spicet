import {
  BeforeInsert,
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { RecipeDetail } from "./recipe-detail.entity";
import { UserFav } from "./user-fav.entity";

@Entity()
export class User {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column({
    type: "timestamp",
    default: () => "CURRENT_TIMESTAMP",
    onUpdate: "CURRENT_TIMESTAMP"
  })
  updatedAt!: string;

  @Column() // name of the user
  name!: string;

  @Column()
  createdAt!: Date; // when the user is created

  @Column()
  avatar!: string; // avatar image

  @OneToMany(() => RecipeDetail, (recipe) => recipe.user)
  recipes!: Relation<RecipeDetail>[];

  @OneToMany(() => UserFav, (userFav) => userFav.user)
  favourites!: Relation<UserFav>[];

  @BeforeInsert()
  setCreatedAt() {
    this.createdAt = new Date();
  }
}
