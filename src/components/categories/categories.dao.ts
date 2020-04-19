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

  async list() {
    try {
      const categories = await Category.find();
      return categories;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const category = await Category.findByIdAndRemove(id);
    } catch (error) {
      console.log(error);
    }
  }
}
