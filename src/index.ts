import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import { initConnection } from "./core/database";
import { UsersController } from "./components/helloworld/users.controller";

const start = async () => {
  try {
    const usersController = new UsersController();
    const app = express();
    await initConnection();
    app.get("/hello", usersController.createUserHandler);
    app.listen(3000, () => {
      console.log("Express server running at port 3000");
    });
    console.log("Hello TypeScript");
  } catch (error) {
    console.log(error);
  }
};
start();
