import { Router } from "express";
import { ZALert } from "../validation/alert.validation.js";
import { createAlertService } from "../services/alert.service.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const alert = ZALert.parse(req.body);
    const result = await createAlertService(alert);
    console.log(alert);
    res
      .status(201)
      .json({ success: true, message: "alert created successfully", result });
  } catch (error) {
    next(error);
  }
});

export default router;
