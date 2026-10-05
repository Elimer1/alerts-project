import { createAlertRepo } from "../repos/alert.repo.js";

export const createAlertService = async (alert) => {
  return await createAlertRepo(alert);
};
