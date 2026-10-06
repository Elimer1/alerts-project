import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
    unique: true,
  },

  role: {
    type: String,
    default: "arena_user",
    enum: ["arena_user", "general_user", "admin"],
  },

  assignedArena: {
    type: String,
    enum: ["North", "South", "Center"],
  },
});

export const User = mongoose.model("user", userSchema);
