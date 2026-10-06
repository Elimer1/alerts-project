import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useUserStore = create()(
  persist(
    (set, get) => ({
      role: "",
      setRole: (newRole) => set({ role: newRole }),
      token: "",
      setToken: (newToken) => set({ token: newToken }),
    }),
    {
      name: "auth-storage",
    },
  ),
);
