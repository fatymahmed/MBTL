import * as dotenv from "dotenv";
dotenv.config();
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";
import passport from "passport";
import { initConnection } from "./core/database";
import { UsersController } from "./components/helloworld/users.controller";
import { CategoriesController } from "./components/categories/categories.controller";
import authRoutes from "../routes/auth-routes";
import profileRoutes from "../routes/profile-routes";
const passportSetup = require("../config/passport-setup");

const start = async () => {
  try {
    const usersController = new UsersController();
    const categoriesController = new CategoriesController();
    const app = express();

    // set up view engine
    app.set("view engine", "ejs");

    app.use(
      cookieSession({
        maxAge: 24 * 60 * 60 * 1000,
        keys: [process.env.COOKIE_KEY],
      })
    );

    // Initialize Passport
    app.use(passport.initialize());
    app.use(passport.session());

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    await initConnection();

    // Set up routes
    app.use("/auth", authRoutes);
    app.use("/profile", profileRoutes);

    // Create Home route
    app.get("/", (req, res) => {
      res.render("home");
    });

    app.get("/hello", usersController.createUserHandler);
    app.listen(3000, () => {
      console.log("Express server running at port 3000");
    });

    // Create a Category
    app.post("/categories", categoriesController.create);

    // List all Categories
    app.get("/categories", categoriesController.list);

    // Delete a Category
    app.delete("/categories/:id", categoriesController.delete);

    console.log("Hello TypeScript");
  } catch (error) {
    console.log(error);
  }
};
start();
