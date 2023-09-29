import mongoose from "mongoose";

const authorsSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    nationality: { type: String },
  },
  { versionKey: false }
);

const authors = mongoose.model("authors", authorsSchema);

export default authors;
