import mongoose from "mongoose";

const TestSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { timestamps: true }
);

export default mongoose.models.Test ||
  mongoose.model("Test", TestSchema);