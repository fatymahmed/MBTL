import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      unique: true,
    },
  },
  {
    timestamps: true,
    collection: "categories",
  }
);

export const Category = mongoose.model("Category", CategorySchema);
