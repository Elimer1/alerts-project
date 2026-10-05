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

export const deleteAlertRepo = async (_id) => {
  return await Alert.deleteOne({ _id });
};

export const updateAlertRepo = async (id, data) => {
  return await Alert.findByIdAndUpdate(id, data, { new: true });
};
