import { Entity, ManyToOne, PrimaryGeneratedColumn, type Relation } from "typeorm";
import { User } from "./user.entity";
import { Recipe } from "./recipe.entity";

@Entity()
export class UserFav{
    @PrimaryGeneratedColumn("uuid")
    id!: string

    @ManyToOne(() => User, user => user.favourites)
    user!: Relation<User>  

    @ManyToOne(() => Recipe,recipe =>  recipe.favs)
    recipe!: Relation<Recipe>  
}