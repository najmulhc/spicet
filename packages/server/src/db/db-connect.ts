import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: 6543,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [],
  synchronize: true
});

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
