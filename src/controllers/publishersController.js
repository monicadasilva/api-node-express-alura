import publishers from "../models/Publishers.js";

class PublishersController {
  static publishersList = async (req, res, next) => {
    try {
      await publishers.find();
      res.status(200).json(publishers);
    } catch (err) {
      next(err);
    }
  };

  static publisherById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const publisherID = await publishers.findById(id);
      if (publisherID == null) {
        res.status(404).send({ message: "Publisher id not found." });
      }
      res.status(200).send(publisherID);
    } catch (err) {
      next(err);
    }
  };

  static insertPublisher = async (req, res, next) => {
    try {
      let publisher = new publishers(req.body);

      await publisher.save();
      res.status(201).send(publisher.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static updatePublisherById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const publisherID = await publishers.findByIdAndUpdate(id, {
        $set: req.body,
      });
      if (publisherID == null) {
        res.status(404).send({ message: "Publisher id not found." });
      }
      res.status(200).send({ message: "Publisher successfully updated." });
    } catch (err) {
      next(err);
    }
  };

  static deletePublisherById = async (req, res, next) => {
    try {
      const id = req.params.id;

      const publisherID = await publishers.findByIdAndDelete(id);
      if (publisherID == null) {
        res.status(404).send({ message: "Publisher id not found." });
      }
      res.status(200).send({ message: "Publisher successfully deleted." });
    } catch (err) {
      next(err);
    }
  };
}

export default PublishersController;
