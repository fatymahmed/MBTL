import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { User } from "../src/components/helloworld/user.model";

passport.use(
  new GoogleStrategy(
    {
      // options for the google strategy
      callbackURL: "/auth/google/redirect",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    (accessToken, refreshToken, profile, done) => {
      //passport callback function
      console.log("call back function fired");
      console.log(profile);
      new User({
        firstname: profile.name.givenName,
        lastname: profile.name.familyName,
        googleId: profile.id,
      })
        .save()
        .then((newUser) => {
          console.log("new User created", newUser);
        });
    }
  )
);
