import { User } from "../schemas/user.schema.js";

export const createUserRepo = async (user) => {
  return await User.create(user);
};

export const getUserRepo = async (userData) => {
  return await User.findOne(userData);
};

export const getAllUsersRepo = async () => {
  return await User.find({});
};

export const deleteUserRepo = async (id) => {
  return await User.findByIdAndDelete(id);
};
