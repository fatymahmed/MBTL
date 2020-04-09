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

    app.post("/categories", categoriesController.create);
    console.log("Hello TypeScript");
  } catch (error) {
    console.log(error);
  }
};
start();
