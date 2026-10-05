import {
  createAlertRepo,
  getAlertByIdRepo,
  getAlertsRepo,
} from "../repos/alert.repo.js";

export const createAlertService = async (alert) => {
  return await createAlertRepo(alert);
};

export const getAlertService = async () => {
  return await getAlertsRepo();
};

export const getAlertByIdService = async (id) => {
  const alert = await getAlertByIdRepo(id);
  console.log(alert);
  if (!alert) {
    const error = new Error("Alert not found");
    error.status = 404;
    throw error;
  }
  return alert;
};
