import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
    },
    lastname: {
      type: String,
    },
    googleId: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "users",
  }
);

export const User = mongoose.model("User", UserSchema);
