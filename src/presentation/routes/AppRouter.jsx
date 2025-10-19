import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskPage } from "../pages/TaskPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TaskPage />} />
      </Routes>
    </BrowserRouter>
  );
}
