import books from "../models/Books.js";

class BooksController {
  static booksList = async (req, res, next) => {
    try {
      const booksList = await books
        .find()
        .populate("author")
        .populate("publisher", "name")
        .exec();
      res.status(200).json(booksList);
    } catch (err) {
      next(err);
    }
  };

  static bookById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const bookId = await books
        .findById(id)
        .populate("author", "name")
        .populate("publisher", "name")
        .exec();
      if (bookId == null) {
        res.status(404).send({ message: "Book id not found." });
      }
      res.status(200).send(bookId);
    } catch (err) {
      next(err);
    }
  };

  static bookPublisher = async (req, res, next) => {
    try {
      const publisher = req.query.publisher;
      await books.find({ publisher: publisher }, {});
      res.status(200).send(books);
    } catch (err) {
      next(err);
    }
  };

  static insertBook = async (req, res, next) => {
    try {
      let book = new books(req.body);

      await book.save();
      res.status(201).send(book.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static updateBookById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const bookUpdate = await books.findByIdAndUpdate(id, { $set: req.body });

      if (bookUpdate == null) {
        res.status(404).send({ message: "Book id not found." });
      }
      res.status(200).send({ message: "Book successfully updated." });
    } catch (err) {
      next(err);
    }
  };

  static deleteBookById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const bookDelete = await books.findByIdAndDelete(id);
      if (bookDelete == null) {
        res.status(404).send({ message: "Book id not found." });
      }
      res.status(200).send({ message: "Book successfully deleted." });
    } catch (err) {
      next(err);
    }
  };
}

export default BooksController;
