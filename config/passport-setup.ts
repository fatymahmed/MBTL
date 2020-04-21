import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
passport.use(
  new GoogleStrategy(
    {
      // options for the google strategy
      callbackURL: "/auth/google/redirect",
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    },
    () => {
      //passport callback function
    }
  )
);
