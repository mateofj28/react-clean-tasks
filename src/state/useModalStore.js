import { create } from "zustand";

export const useModalStore = create((set) => ({
  isOpen: false,
  modalData: null, // { title, description, icon, headerColor, iconBg }

  openModal: (data) => set({ isOpen: true, modalData: data }),
  closeModal: () => set({ isOpen: false, modalData: null }),
}));
