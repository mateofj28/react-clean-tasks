import { create } from "zustand";

export const useUIStore = create((set, get) => ({
  // --- Estado global ---
  sidebarExpanded: false,
  mobileOpen: false,
  isMobile: window.innerWidth <= 768,

  // --- Acciones ---
  toggleSidebar: () => set({ sidebarExpanded: !get().sidebarExpanded }),
  expandSidebar: () => set({ sidebarExpanded: true }),
  collapseSidebar: () => set({ sidebarExpanded: false }),

  openMobileDrawer: () => set({ mobileOpen: true }),
  closeMobileDrawer: () => set({ mobileOpen: false }),

  setIsMobile: (value) => set({ isMobile: value }),
}));

// 🔥 Detecta automáticamente si el dispositivo es móvil
window.addEventListener("resize", () => {
  const isMobile = window.innerWidth <= 768;
  const { setIsMobile } = useUIStore.getState();
  setIsMobile(isMobile);
});
