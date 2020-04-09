import { Request, Response } from "express";
import { CategoriesService } from "./categories.service";

export class CategoriesController {
  categoriesService: CategoriesService;
  constructor() {
    this.categoriesService = new CategoriesService();
    this.create = this.create.bind(this);
  }
  async create(request: Request, response: Response) {
    try {
      await this.categoriesService.create(request.body);
      response.send({ ok: true });
    } catch (error) {
      console.log(error);
    }
  }
}
