import mongoose from "mongoose";

const booksSchema = new mongoose.Schema(
  {
    id: { type: String },
    book: { type: String, required: true },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "authors",
      required: true,
    },
    publisher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "publishers",
      required: true,
    },
    pages: { type: String },
  },
  { collection: "books_list", versionKey: false }
);

const books = mongoose.model("books", booksSchema);

export default books;
