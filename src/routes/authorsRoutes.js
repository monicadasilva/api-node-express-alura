import express from "express";
import AuthorsController from "../controllers/authorsController.js";

const router = express.Router();

router
  .get("/authors", AuthorsController.authorsList)
  .get("/authors/:id", AuthorsController.authorById)
  .post("/authors", AuthorsController.insertAuthor)
  .put("/authors/:id", AuthorsController.updateAuthorById)
  .delete("/authors/:id", AuthorsController.deleteAuthorById);

export default router;
