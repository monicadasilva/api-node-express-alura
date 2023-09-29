import express from "express";
import books from "./booksRoutes.js";
import authors from "./authorsRoutes.js";
import publishers from "./publishersRoutes.js";

const routes = (app) => {
  app.route("/").get((req, res) => {
    res.status(200).send("Node course.");
  });

  app.use(express.json(), books, authors, publishers);
};

export default routes;
