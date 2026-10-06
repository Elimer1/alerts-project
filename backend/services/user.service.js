import {
  createUserRepo,
  deleteUserRepo,
  getAllUsersRepo,
  getUserRepo,
} from "../repos/user.repo.js";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcrypt";

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

export const loginUserService = async (loginCreds) => {
  const { email: loginEmail, password: loginPswd } = loginCreds;
  const user = await getUserRepo({ email: loginEmail });
  if (!user) {
    const error = new Error("username or password is incorrect");
    error.status(401);
    throw error;
  }
  const { _id, username, role, password } = user;

  const loggedIn = await bcrypt.compare(loginPswd, password);

  if (loggedIn) {
    return jwt.sign({ id: _id, username, role }, process.env.JWT_SECRET);
  }
  const error = new Error("username or passowrd is incorrect");
  error.status(401);
  throw error;
};

export const getAllUsersService = async () => {
  return await getAllUsersRepo();
};

export const deleteUserService = async (id) => {
  const deleted = await deleteUserRepo(id);
  if (!deleted) {
    const error = new Error("user to be deleted not found");
    error.status = 404;
    throw error;
  }
  return;
};
