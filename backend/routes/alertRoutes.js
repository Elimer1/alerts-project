import { Router } from "express";
import { ZALert } from "../validation/alert.validation.js";
import {
  createAlertService,
  getAlertService,
} from "../services/alert.service.js";

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

router.get("/", async (req, res, next) => {
  try {
    const alerts = await getAlertService();
    res.status(200).json({ succes: true, data: alerts });
  } catch (error) {
    next(error);
  }
});

export default router;
