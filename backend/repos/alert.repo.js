import { Alert } from "../schemas/alert.schema.js";

export const createAlertRepo = async (alert) => {
  return await Alert.create(alert);
};

export const getAlertsRepo = async () => {
  return await Alert.find();
};

export const getAlertByIdRepo = async (id) => {
  return await Alert.findById(id);
};
