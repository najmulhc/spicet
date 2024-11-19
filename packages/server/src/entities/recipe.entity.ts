import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  type Relation
} from "typeorm";
import { RecipeDetail } from "./recipe-detail.entity";
import { Cuisine } from "./cuisine.entity";
import { UserFav } from "./user-fav.entity";

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

  @OneToMany(() => UserFav, (userfav) => userfav.recipe)
  favs!: Relation<UserFav>[];

  // @Column({
  //   array: true
  // })
  // tags!: string[];
}
