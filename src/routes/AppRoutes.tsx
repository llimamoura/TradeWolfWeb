import { Route, Routes } from "react-router-dom";
import { IdentifyPage } from "@/view/pages/UserRegistration/Identify";
import { ProfilePage } from "@/view/pages/UserRegistration/Profile";
import { ConfirmResidencyPage } from "@/view/pages/UserRegistration/Residency";
import { ProofResidencyPage } from "@/view/pages/UserRegistration/Residency/ProofResidency";
import { LoginPage } from "../view/pages/login";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/create-user" element={<ConfirmResidencyPage />} />
      <Route
        path="/create-user/proof-residency"
        element={<ProofResidencyPage />}
      />
      <Route path="/create-user/profile" element={<ProfilePage />} />
      <Route path="/create-user/identify" element={<IdentifyPage />} />
    </Routes>
  );
}
