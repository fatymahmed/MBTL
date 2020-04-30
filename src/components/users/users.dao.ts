import { User } from "./user.model";

export class UsersDao {
  async createUser(profile) {
    const user = await new User({
      firstname: profile.name.givenName,
      lastname: profile.name.familyName,
      googleId: profile.id,
    });
    user.save();
    return user;
  }
}
