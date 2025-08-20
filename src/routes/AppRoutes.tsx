import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../view/pages/login";
import { ForgotPasswordPage } from "@/view/pages/forgotPassword";
import { VerifyCodePage } from "@/view/pages/forgotPassword/VerifyCode";
import { ResetPasswordPage } from "@/view/pages/forgotPassword/ResetPassword";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
      <Route path="/forgot-password/verification" element={<VerifyCodePage />} />
      <Route path="/forgot-password/reset-password" element={<ResetPasswordPage />} />
    </Routes>
  );
}
