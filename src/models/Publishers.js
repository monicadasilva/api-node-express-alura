import mongoose from "mongoose";

const publishersSchema = new mongoose.Schema(
  {
    id: { type: String },
    name: { type: String, required: true },
    country: { type: String },
    state: { type: String },
    city: { type: String },
  },
  { versionKey: false }
);

const publishers = mongoose.model("publishers", publishersSchema);

export default publishers;
