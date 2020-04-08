import { Request, Response } from "express";
import { UserService } from "./users.service";

export class UsersController {
  usersService: UserService;
  constructor() {
    this.usersService = new UserService();
    this.createUserHandler = this.createUserHandler.bind(this);
  }
  async createUserHandler(request: Request, response: Response) {
    try {
      await this.usersService.createUser();
      response.send({ foo: "bar" });
    } catch (error) {
      console.log(error);
    }
  }
}
