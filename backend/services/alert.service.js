import { createAlertRepo, getAlertsRepo } from "../repos/alert.repo.js";

export const createAlertService = async (alert) => {
  return await createAlertRepo(alert);
};

export const getAlertService = async () => {
  return await getAlertsRepo();
};
