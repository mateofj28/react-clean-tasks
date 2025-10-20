import { BrowserRouter } from "react-router-dom";
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Sidebar />
      <MainContent />
    </BrowserRouter>
  );
}
