import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";
import { User } from "../src/components/users/user.model";

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
    (accessToken, refreshToken, profile, done) => {
      // Check if user already exists in our db
      User.findOne({ googleId: profile.id }).then((currentUser) => {
        if (currentUser) {
          // already have the user
          console.log("user is", currentUser);
          done(null, currentUser);
        } else {
          new User({
            firstname: profile.name.givenName,
            lastname: profile.name.familyName,
            googleId: profile.id,
          })
            .save()
            .then((newUser) => {
              console.log("new User created", newUser);
              done(null, newUser);
            });
        }
      });
    }
  )
);
