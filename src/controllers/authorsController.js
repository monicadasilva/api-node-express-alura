import authors from "../models/Authors.js";

class AuthorsController {
  static authorsList = async (req, res, next) => {
    try {
      const authorsList = await authors.find();
      if (authorsList !== null) {
        res.status(200).json(authorsList);
      }
    } catch (err) {
      next(err);
    }
  };

  static authorById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const authorById = await authors.findById(id);
      if (authorById == null) {
        res.status(404).send({ message: "Author id not found." });
      }
      res.status(200).send(authorById);
    } catch (err) {
      next(err);
    }
  };

  static insertAuthor = async (req, res, next) => {
    try {
      let author = new authors(req.body);

      const insertAuthor = await author.save();
      if (insertAuthor == null) {
        res.status(404).send({ message: "Fail to insert author." });
      }
      res.status(201).send(author.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static updateAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;
      const authorUpdate = await authors.findByIdAndUpdate(id, {
        $set: req.body,
      });
      if (authorUpdate == null) {
        res.status(404).send({ message: "Author id not found." });
      }
      res.status(200).send({ message: "Author successfully updated." });
    } catch (err) {
      next(err);
    }
  };

  static deleteAuthorById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const deleteAuthor = await authors.findByIdAndDelete(id);
      if (deleteAuthor == null) {
        res.status(404).send({ message: "Author id not found." });
      }
      res.status(200).send({ message: "Author successfully deleted." });
    } catch (err) {
      next(err);
    }
  };
}

export default AuthorsController;
