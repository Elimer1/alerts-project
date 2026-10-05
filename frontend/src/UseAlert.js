import { create } from "zustand";

const useAlert = create((set) => ({
  alerts: [],
  addAlert: (alert) => set((state) => ({ alerts: [...state.alerts, alert] })),
}));

export default useAlert;
