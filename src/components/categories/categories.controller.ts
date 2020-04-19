import { Request, Response } from "express";
import { CategoriesService } from "./categories.service";

export class CategoriesController {
  categoriesService: CategoriesService;
  constructor() {
    this.categoriesService = new CategoriesService();
    this.create = this.create.bind(this);
    this.list = this.list.bind(this);
    this.delete = this.delete.bind(this);
  }
  async create(request: Request, response: Response) {
    try {
      await this.categoriesService.create(request.body);
      response.send({ ok: true });
    } catch (error) {
      console.log(error);
    }
  }

  async list(request: Request, response: Response) {
    try {
      const categories = await this.categoriesService.list();
      response.send({ ok: true, categories });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(request: Request, response: Response) {
    try {
      this.categoriesService.delete(request.params.id);
      response.send({ ok: true });
    } catch (error) {
      console.log(error);
    }
  }
}
