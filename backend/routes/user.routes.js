import { Router } from "express";
import { ZUSer, ZUSerLogin } from "../validation/user.validation.js";
import {
  createUserService,
  deleteUserService,
  getAllUsersService,
  loginUserService,
} from "../services/user.service.js";
import authUser from "../middleware/authUser.js";

const router = Router();

router.post("/register", authUser, async (req, res, next) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({ message: "Not authorized to add users" });
  }
  try {
    const user = ZUSer.parse(req.body);
    const token = await createUserService(user);
    res
      .status(201)
      .json({ success: true, message: "user created successfully", token });
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const loginCreds = ZUSerLogin.parse(req.body);
    const token = await loginUserService(loginCreds);
    res.status(200).json({ success: true, token });
  } catch (error) {
    next(error);
  }
});

router.get("/me", authUser, (req, res) => {
  res.status(200).json({ user: req.user });
});

router.get("/users", authUser, async (req, res, next) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({ message: "Not authorized to delete users" });
  }
  try {
    const users = await getAllUsersService();
    res.status(200).json({ succes: true, users });
  } catch (error) {
    next(error);
  }
});

router.delete("/users/:id", authUser, async (req, res, next) => {
  const role = req.user.role;
  if (role !== "admin") {
    return res.status(403).json({ message: "Not authorized to delete users" });
  }
  try {
    const id = String(req.params.id);
    await deleteUserService(id);
    res
      .status(200)
      .json({ succes: true, message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
});

export default router;
