import { CategoriesDao } from "./categories.dao";
import { Category } from "./category.model";

export class CategoriesService {
  categoriesDao: CategoriesDao;
  constructor() {
    this.categoriesDao = new CategoriesDao();
  }
  create(category: typeof Category) {
    return this.categoriesDao.create(category);
  }
}
