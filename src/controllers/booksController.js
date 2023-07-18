import books from "../models/Books.js";

class BooksController {
  static booksList = (req, res) => {
    books
      .find()
      .populate("author")
      .populate("publisher", "name")
      .exec((err, books) => {
        res.status(200).json(books);
      });
  };

  static bookById = (req, res) => {
    const id = req.params.id;

    books
      .findById(id)
      .populate("author", "name")
      .populate("publisher", "name")
      .exec((err, books) => {
        if (err) {
          res
            .status(400)
            .send({ message: `Book id not found - ${err.message}` });
        } else {
          res.status(200).send(books);
        }
      });
  };

  static bookPublisher = (req, res) => {
    const publisher = req.query.publisher;

    books.find({ publisher: publisher }, {}, (err, books) => {
      if (err) {
        res
          .status(400)
          .send({ message: `Publisher id not found - ${err.message}` });
      } else {
        res.status(200).send(books);
      }
    });
  };

  static insertBook = (req, res) => {
    let book = new books(req.body);

    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Fail to insert book.` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBookById = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book successfully updated." });
      } else {
        res
          .status(500)
          .send({ message: `Book id not found  - ${err.message}` });
      }
    });
  };

  static deleteBookById = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Book successfully deleted." });
      } else {
        res
          .status(500)
          .send({ message: `Book id not found  - ${err.message}` });
      }
    });
  };
}

export default BooksController;
