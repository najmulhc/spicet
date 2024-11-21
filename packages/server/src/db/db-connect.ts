import { DataSource } from "typeorm";
import { CookingStep } from "../entities/cooking-step.entity";
import { CookingTip } from "../entities/cooking-tip.entity";
import { Cuisine } from "../entities/cuisine.entity";
import { Ingredient } from "../entities/ingredient.entity";
import { Recipe } from "../entities/recipe.entity";
import { User } from "../entities/user.entity";
import { RecipeDetail } from "../entities/recipe-detail.entity";
import { Comment } from "../entities/comment.entity";
import { RecipeIngredent } from "../entities/recipe-ingredient.entity";
import { UserFav } from "../entities/user-fav.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 6543,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    CookingStep,
    CookingTip,
    Cuisine,
    Ingredient,
    Recipe,
    User,
    RecipeDetail,
    Comment,
    RecipeIngredent, UserFav
  ],
  synchronize: true
});

// this function will connect the server with the database
const dbConnect = async () => {
  try {
    await AppDataSource.initialize();
    console.log("the app is connected with the database");
  } catch (error) {
    console.log("There was an error to connect with the database!");
    console.log(error);
    process.exit();
  }
};

export default dbConnect;
