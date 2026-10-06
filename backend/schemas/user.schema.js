import mongoose from "mongoose";

const userSchema = new mongoose.schema({
  username: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    enum: ["arena_user", "general_user", "admin"],
  },

  assignedArena: {
    type: String,
    enum: ["North", "South", "Center"],
  },
});

export const User = mongoose.model("user", userSchema);
