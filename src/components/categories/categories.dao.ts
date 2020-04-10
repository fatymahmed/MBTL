import { Category } from "./category.model";

export class CategoriesDao {
  create(category: typeof Category) {
    const newCategories = new Category(category);
    newCategories.save(function (err) {
      if (err) {
        console.log("Category already exists");
      }
    });

    return newCategories;
  }

  async index() {
    const categories = await Category.find(function (err, cats) {
      if (err) {
        console.log(err);
      }
    });

    return categories;
  }
}
