import { useLocation } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/ProfilePage";
import Setting from "../pages/SettingPage";
import TasksPage from "../pages/TaskPage";
import styles from "../css/MainContent.module.css";
import { useUIStore } from "../../state/useUIStore";
import Home from "../pages/HomePage";

export default function MainContent() {
  const location = useLocation();
  const { sidebarExpanded, mobileOpen } = useUIStore();

  const ComponentToRender = (() => {
    switch (location.pathname) {
      case "/": return Dashboard;
      case "/tareas": return TasksPage;
      case "/perfil": return Profile;
      case "/home": return Home;
      case "/configuracion": return Setting;
      default: return () => <div>Página no encontrada</div>;
    }
  })();

  return (
    <div
      className={`${styles.mainContent} ${sidebarExpanded ? styles.expanded : styles.collapsed
        } ${mobileOpen ? styles.drawerOpen : ""}`}
    >

      <ComponentToRender />
    </div>
  );
}
