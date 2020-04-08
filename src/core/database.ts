import mongoose, { Mongoose } from "mongoose";

// Use native promises
mongoose.Promise = global.Promise;

const mongoUrl = "mongodb://localhost:27017/mbtl?authSource=admin";
const mongoUsername = "root";
const mongoPassword = "rootpassword";

export const initConnection = async (): Promise<Mongoose> => {
  return mongoose.connect(mongoUrl, {
    socketTimeoutMS: 10000,
    useNewUrlParser: true,
    user: process.env.MONGO_USERNAME,
    pass: process.env.MONGO_PASSWORD,
  });
};
