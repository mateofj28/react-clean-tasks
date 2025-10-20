import { useEffect } from "react";
import styles from "../css/Sidebar.module.css";
import { FaHome, FaTasks, FaUser, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useUIStore } from "../../state/useUIStore";

const menuItems = [
  { icon: <FaHome />, label: "Inicio", path: "/" },
  { icon: <FaTasks />, label: "Tareas", path: "/tareas" },
  { icon: <FaUser />, label: "Perfil", path: "/perfil" },
  { icon: <FaCog />, label: "Configuración", path: "/configuracion" },
];

export default function Sidebar() {
  const {
    sidebarExpanded,
    mobileOpen,
    isMobile,
    toggleSidebar,
    expandSidebar,
    collapseSidebar,
    openMobileDrawer,
    closeMobileDrawer,
    setIsMobile,
  } = useUIStore();

  const location = useLocation();

  // 🔥 Detecta si es móvil en tiempo real
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsMobile]);

  return (
    <>
      {/* Botón hamburguesa para móvil */}
      {isMobile && (
        <button
          className={styles.mobileButton}
          onClick={() => (mobileOpen ? closeMobileDrawer() : openMobileDrawer())}
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`
          ${styles.sidebar} 
          ${sidebarExpanded ? styles.expanded : ""} 
          ${mobileOpen ? styles.mobileOpen : ""}
        `}
        onMouseEnter={() => !isMobile && expandSidebar()}
        onMouseLeave={() => !isMobile && collapseSidebar()}
      >
        {menuItems.map((item, idx) => (
          <Link
            key={idx}
            to={item.path}
            className={`
              ${styles.menuItem} 
              ${location.pathname === item.path ? styles.active : ""}
            `}
          >
            <div className={styles.icon}>{item.icon}</div>

            {/* Tooltip cuando está colapsada */}
            {!sidebarExpanded && !isMobile && (
              <span className={styles.tooltip}>{item.label}</span>
            )}

            <span className={styles.label}>{item.label}</span>

            {/* Indicador activo */}
            {location.pathname === item.path && (
              <div className={styles.activeIndicator}></div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}
