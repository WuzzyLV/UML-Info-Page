import { create } from "zustand";

export const useTestStore = create((set, get) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
