import { User } from "../schemas/user.schema.js";

export const createUserRepo = async (user) => {
  return await User.create(user);
};

export const getUserRepo = async (userData) => {
  return await User.findOne(userData);
};
