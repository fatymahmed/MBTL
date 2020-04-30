import { UsersDao } from "./users.dao";
import { User } from "./user.model";

export class UserService {
  usersDao: UsersDao;
  constructor() {
    this.usersDao = new UsersDao();
  }
  createUser(accessToken, refreshToken, profile, done) {
    // Check if user already exists in our db
    User.findOne({ googleId: profile.id }).then((currentUser) => {
      if (currentUser) {
        // already have the user
        console.log("user is", currentUser);
        done(null, currentUser);
      } else {
        const newUser = this.usersDao.createUser(profile);
        console.log("new User created", newUser);
        done(null, newUser);
      }
    });
  }
}
