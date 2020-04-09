import { Category } from "./category.model";

export class CategoriesDao {
  create(category: typeof Category) {
    const newCategories = new Category(category);
    return newCategories.save();
  }
}
