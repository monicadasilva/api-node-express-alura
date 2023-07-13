import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    id: { type: String },
    book: { type: String, required: true },
    author: { type: String, required: true },
    publisher: { type: String },
    pages: { type: String },
  },
  { collection: "books_list" }
);

const books = mongoose.model("books", booksSchema);

export default books;
