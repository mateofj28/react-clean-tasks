import { create } from "zustand";

export const useUIStore = create((set, get) => ({
  // --- Estado global ---
  sidebarExpanded: false,
  mobileOpen: false,

  // --- Acciones ---
  toggleSidebar: () => set({ sidebarExpanded: !get().sidebarExpanded }),
  openMobileDrawer: () => set({ mobileOpen: true }),
  closeMobileDrawer: () => set({ mobileOpen: false }),
}));
