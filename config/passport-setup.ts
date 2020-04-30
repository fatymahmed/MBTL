import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { User } from "../src/components/users/user.model";
import { UsersController } from "../src/components/users/users.controller";

const usersController = new UsersController();

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      // options for the google strategy
      callbackURL: "/auth/google/redirect",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },

    usersController.createUser
  )
);
