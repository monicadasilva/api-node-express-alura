import publishers from "../models/Publishers.js";

class PublishersController {
  static publishersList = (req, res) => {
    publishers.find((err, publishers) => {
      res.status(200).json(publishers);
    });
  };

  static publisherById = (req, res) => {
    const id = req.params.id;

    publishers.findById(id, (err, publishers) => {
      if (err) {
        res
          .status(400)
          .send({ message: `Publisher id not found - ${err.message}` });
      } else {
        res.status(200).send(publishers);
      }
    });
  };

  static insertPublisher = (req, res) => {
    let publisher = new publishers(req.body);

    publisher.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - Fail to insert publisher.` });
      } else {
        res.status(201).send(publisher.toJSON());
      }
    });
  };

  static updatePublisherById = (req, res) => {
    const id = req.params.id;

    publishers.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Publisher successfully updated." });
      } else {
        res
          .status(500)
          .send({ message: `Publisher id not found  - ${err.message}` });
      }
    });
  };

  static deletePublisherById = (req, res) => {
    const id = req.params.id;

    publishers.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Publisher successfully deleted." });
      } else {
        res
          .status(500)
          .send({ message: `Publisher id not found  - ${err.message}` });
      }
    });
  };
}

export default PublishersController;
