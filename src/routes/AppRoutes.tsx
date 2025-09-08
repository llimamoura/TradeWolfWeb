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

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="forgot-password">
          <Route index element={<ForgotPasswordPage />} />
          <Route path="verification" element={<VerifyCodePage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
        </Route>

        <Route path="sign-up">
          <Route index element={<ConfirmResidencyPage />} />
          <Route path="proof-residency" element={<ProofResidencyPage />} />
          <Route path="identify" element={<IdentifyPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
