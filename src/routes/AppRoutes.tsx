import { Route, Routes } from "react-router-dom";
import { AuthLayout } from "@/view/layouts/AuthLayout";
import { ForgotPasswordPage } from "@/view/pages/forgotPassword";
import { ResetPasswordPage } from "@/view/pages/forgotPassword/ResetPassword";
import { VerifyCodePage } from "@/view/pages/forgotPassword/VerifyCode";
import { IdentifyPage } from "@/view/pages/signup/Identify";
import { ProfilePage } from "@/view/pages/signup/Profile";
import { ConfirmResidencyPage } from "@/view/pages/signup/Residency";
import { ProofResidencyPage } from "@/view/pages/signup/Residency/ProofResidency";
import { LoginPage } from "../view/pages/login";
import { ProfileLayout } from "@/view/layouts/ProfileLayout";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="forgot-password" element={<ForgotPasswordPage />} />
        <Route
          path="forgot-password/verification"
          element={<VerifyCodePage />}
        />
        <Route
          path="forgot-password/reset-password"
          element={<ResetPasswordPage />}
        />

        <Route path="/create-user" element={<ConfirmResidencyPage />} />
        <Route
          path="/create-user/proof-residency"
          element={<ProofResidencyPage />}
        />
        <Route path="/create-user/identify" element={<IdentifyPage />} />
      </Route>
      <Route path="/" element={<ProfileLayout />}>
        <Route path="/create-user/profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
}
