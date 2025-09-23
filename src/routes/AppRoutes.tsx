import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../view/pages/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
}
