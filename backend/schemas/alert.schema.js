import mongoose from "mongoose";

const alertSchema = new mongoose.schema({
  displayName: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High", "Critical"],
  },
  arena: {
    type: String,
    enum: ["North", "South", "Center"],
  },
  status: {
    type: String,
    enum: ["Active", "Handled"],
  },
  lon: Number,
  lat: Number,
});

const Alert = mongoose.model("alert", alertSchema);
