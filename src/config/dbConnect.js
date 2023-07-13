import mongoose from "mongoose";

mongoose
  .connect("mongodb://monica:m123@localhost:27017/books")
  .then(() => {
    console.log("Database connected!");
  })
  .catch((err) => {
    console.log("Error connecting to Database", err);
  });

let db = mongoose.connection;

export default db;
