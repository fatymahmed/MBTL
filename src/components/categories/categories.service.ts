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

  async index() {
    const categories = await this.categoriesDao.index();
    return categories;
  }

  async destroy(id) {
    this.categoriesDao.destroy(id);
  }
}
