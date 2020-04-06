import { User } from "./user.model";

export class UsersDao {
  createUser() {
    const newUser = new User({ firstname: "John", lastname: "Smith" });
    return newUser.save();
  }
}
