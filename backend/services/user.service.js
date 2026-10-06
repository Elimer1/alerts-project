import { createUserRepo, getUserRepo } from "../repos/user.repo.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const createUserService = async (user) => {
  const { password, email } = user;
  const isUser = await getUserRepo({ email });
  console.log(isUser);
  if (isUser) {
    const error = new Error("User with this email already exists");
    error.status = 409;
    throw error;
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  user.password = hashedPassword;
  const { _id, username, role } = await createUserRepo(user);
  return jwt.sign({ id: _id, username, role }, process.env.JWT_SECRET);
};

export const loginUser = async (loginCreds) => {
  const { email, password } = loginCreds;
  const user = getUserRepo();
};
