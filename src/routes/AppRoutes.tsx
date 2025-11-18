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
import { HomeLayout } from "@/view/layouts/HomeLayout";
import { HomePage } from "@/view/pages/home";
import { ComingSoonPage } from "@/view/pages/comingSoon";
import { CoinDetailsPage } from "@/view/pages/coinDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ComingSoonPage />} />

      <Route path="/login" element={<AuthLayout />}>
        <Route index element={<LoginPage />} />
      </Route>

      <Route path="/forgot-password" element={<AuthLayout />}>
        <Route index element={<ForgotPasswordPage />} />
        <Route path="verification" element={<VerifyCodePage />} />
        <Route path="reset-password" element={<ResetPasswordPage />} />
      </Route>

      <Route path="/sign-up" element={<AuthLayout />}>
        <Route index element={<ConfirmResidencyPage />} />
        <Route path="proof-residency" element={<ProofResidencyPage />} />
        <Route path="identify" element={<IdentifyPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>

      <Route path="home" element={<HomeLayout />}>
        <Route index element={<HomePage />} />
        <Route path="coin-details" element={<CoinDetailsPage />}/>
      </Route>
    </Routes>
  );
}
