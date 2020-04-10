import { Request, Response } from "express";
import { CategoriesService } from "./categories.service";

export class CategoriesController {
  categoriesService: CategoriesService;
  constructor() {
    this.categoriesService = new CategoriesService();
    this.create = this.create.bind(this);
    this.index = this.index.bind(this);
  }
  async create(request: Request, response: Response) {
    try {
      await this.categoriesService.create(request.body);
      response.send({ ok: true });
    } catch (error) {
      console.log(error);
    }
  }

  async index(request: Request, response: Response) {
    try {
      const categories = await this.categoriesService.index();
      response.send({ ok: true, categories });
    } catch (error) {
      console.log(error);
    }
  }
}
