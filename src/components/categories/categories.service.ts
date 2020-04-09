import { CategoriesDao } from "./categories.dao";
import { Category } from "./category.model";

export class CategoriesService {
  categoriesDao: CategoriesDao;
  constructor() {
    this.categoriesDao = new CategoriesDao();
  }

  create(category: typeof Category) {
    if (this.categoriesDao.findCategory(category.name)) {
      console.log("Category already exists");
    }
    return this.categoriesDao.create(category);
  }
}
