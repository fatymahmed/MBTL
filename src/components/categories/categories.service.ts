import { CategoriesDao } from "./categories.dao";
import { Category } from "./category.model";

export class CategoriesService {
  categoriesDao: CategoriesDao;
  constructor() {
    this.categoriesDao = new CategoriesDao();
  }

  create(category: typeof Category) {
    this.categoriesDao.create(category);
  }

  async list() {
    const categories = await this.categoriesDao.list();
    return categories;
  }

  async delete(id) {
    this.categoriesDao.delete(id);
  }
}
