import { UsersDao } from "./users.dao";

export class UserService {
  usersDao: UsersDao;
  constructor() {
    this.usersDao = new UsersDao();
  }
  createUser() {
    return this.usersDao.createUser();
  }
}
