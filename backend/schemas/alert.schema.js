import mongoose from "mongoose";

const alertSchema = new mongoose.Schema({
  displayName: {
    type: String,
  },

  description: {
    type: String,
    required: true,
  },

  priority: {
    type: String,
    enum: [, "Medium", "High", "Critical"],
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

export const Alert = mongoose.model("alert", alertSchema);
