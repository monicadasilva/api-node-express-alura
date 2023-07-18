import express from "express";
import BooksController from "../controllers/booksController.js";

const router = express.Router();

router
  .get("/books", BooksController.booksList)
  .get("/books/find", BooksController.bookPublisher)
  .get("/books/:id", BooksController.bookById)
  .post("/books", BooksController.insertBook)
  .put("/books/:id", BooksController.updateBookById)
  .delete("/books/:id", BooksController.deleteBookById);

export default router;
