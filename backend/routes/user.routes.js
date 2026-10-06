import { Router } from "express";
import { ZUSer, ZUSerLogin } from "../validation/user.validation.js";
import { createUserService } from "../services/user.service.js";
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

router.post("/login", async (req, res) => {
  try {
    const loginCreds = ZUSerLogin.parse(req.body);
    const token = await loginUserService(loginCreds);
    res.status(201).json({ success: true, token });
  } catch (error) {
    next(error);
  }
});

export default router;
