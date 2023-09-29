import mongoose from "mongoose";

// eslint-disable-next-line no-unused-vars
const errHandler = (err, req, res, next) => {
  if (err instanceof mongoose.Error.CastError) {
    res.status(400).send({ message: "One or more inputs are incorrect." });
  }
  res.status(500).send({ message: `${err.message} - Server intern error.` });
};

export default errHandler;
