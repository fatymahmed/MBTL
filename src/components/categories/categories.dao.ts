import { Category } from "./category.model";

export class CategoriesDao {
  create(category: typeof Category) {
    const newCategories = new Category(category);
    return newCategories.save();
  }

  findCategory(name: String) {
    const category = Category.findOne({ name: name });
    if (category) {
      return true;
    }
    return false;
  }
}
