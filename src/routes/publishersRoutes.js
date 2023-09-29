import express from "express";
import PublishersController from "../controllers/publishersController.js";

const router = express.Router();

router
  .get("/publishers", PublishersController.publishersList)
  .get("/publishers/:id", PublishersController.publisherById)
  .post("/publishers", PublishersController.insertPublisher)
  .put("/publishers/:id", PublishersController.updatePublisherById)
  .delete("/publishers/:id", PublishersController.deletePublisherById);

export default router;
