import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import { initConnection } from "./core/database";
import { UsersController } from "./components/helloworld/users.controller";
import { CategoriesController } from "./components/categories/categories.controller";

const start = async () => {
  try {
    const usersController = new UsersController();
    const categoriesController = new CategoriesController();
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    await initConnection();
    app.get("/hello", usersController.createUserHandler);
    app.listen(3000, () => {
      console.log("Express server running at port 3000");
    });

    // Create a Category
    app.post("/categories", categoriesController.create);

    // List all Categories
    app.get("/categories", categoriesController.index);

    // Delete a Category
    app.delete("/categories/:id", categoriesController.destroy);

    console.log("Hello TypeScript");
  } catch (error) {
    console.log(error);
  }
};
start();
