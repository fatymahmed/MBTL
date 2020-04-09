import { Category } from "./category.model";

export class CategoriesDao {
  create(category: typeof Category) {
    const newCategories = new Category(category);
    return newCategories.save();
  }

  findCategory(name: String) {
    Category.find({ name: name })
      .then(function (category) {
        console.log("cat is: ", category);
        if (category.length > 0) {
          console.log("record found is", category);
          return true;
        }
      })
      .catch(function (err) {
        console.log("err is", err);
      });
    return false;
  }
}
