import {
  createAlertRepo,
  deleteAlertRepo,
  getAlertByIdRepo,
  getAlertsRepo,
  updateAlertRepo,
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

export const deleteAlertService = async (id) => {
  const result = await deleteAlertRepo(id);
  if (!result.deletedCount) {
    const error = new Error("task to be deleted not found");
    error.status = 404;
    throw error;
  }
  return result;
};

export const updateAlertService = async (id, data) => {
  const result = await updateAlertRepo(id, data);
  if (!result) {
    const error = new Error("Task was not found");
    error.status = 404;
    throw error;
  }
  return result;
};
