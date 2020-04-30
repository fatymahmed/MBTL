import { Request, Response } from "express";
import { UserService } from "./users.service";

export class UsersController {
  usersService: UserService;
  constructor() {
    this.usersService = new UserService();
    this.createUser = this.createUser.bind(this);
  }
  async createUser(accessToken, refreshToken, profile, done) {
    try {
      await this.usersService.createUser(
        accessToken,
        refreshToken,
        profile,
        done
      );
    } catch (error) {
      console.log(error);
    }
  }
}
