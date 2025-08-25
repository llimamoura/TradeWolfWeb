import { Route, Routes } from "react-router-dom";
import { ConfirmResidencyPage } from "@/view/pages/UserRegistration/Residency";
import { ProofResidencyPage } from "@/view/pages/UserRegistration/Residency/ProofResidency";
import { LoginPage } from "../view/pages/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/create-user" element={<ConfirmResidencyPage />} />
      <Route path="/create-user/proof-residency" element={<ProofResidencyPage />} />
    </Routes>
  );
}
