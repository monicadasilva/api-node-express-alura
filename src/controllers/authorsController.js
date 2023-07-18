import authors from "../models/Authors.js";

class AuthorsController {
  static authorsList = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static authorById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if (err) {
        res
          .status(400)
          .send({ message: `Author id not found - ${err.message}` });
      } else {
        res.status(200).send(authors);
      }
    });
  };

  static insertAuthor = (req, res) => {
    let author = new authors(req.body);

    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Fail to insert author.` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Author successfully updated." });
      } else {
        res
          .status(500)
          .send({ message: `Author id not found  - ${err.message}` });
      }
    });
  };

  static deleteAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Author successfully deleted." });
      } else {
        res
          .status(500)
          .send({ message: `Author id not found  - ${err.message}` });
      }
    });
  };
}

export default AuthorsController;
