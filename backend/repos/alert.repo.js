import { Alert } from "../schemas/alert.schema.js";

export const createAlertRepo = async (alert) => {
  return await Alert.create(alert);
};
