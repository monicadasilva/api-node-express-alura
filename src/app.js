import express from "express";
import db from "./config/dbConnect.js";
import books from "./models/Books.js";

db.on("error", console.log.bind(console, "Conection Error"));
db.once("open", () => console.log("Database successfully connected."));
const app = express();

app.use(express.json());

const bookIndex = (books, id) => books.findIndex((b) => b.id == id);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the world of Node!");
});

app.get("/books", (req, res) => {
  // books.find();
  books.find((err, books) => {
    res.status(200).json(books);
  });
});

app.post("/books", (req, res) => {
  books.push(req.body);
  res.status(201).send("Book added successfully!");
});

app.put("/books/:id", (req, res) => {
  const { id } = req.params;

  books.splice(bookIndex(books, id), 1, { id: Number(id), ...req.body });

  res.status(200).json(books);
});

app.delete("/books/:id", (req, res) => {
  const { id } = req.params;
  const newBooks = books.filter((book) => book.id != id);

  res.status(200).json(newBooks);
});

export default app;
