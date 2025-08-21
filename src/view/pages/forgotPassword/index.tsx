import TradeWolfLogo from "../../../assets/img/LogoBG.png";
import { ForgotPasswordForm } from "./components/ForgotPasswordComponent";

export function ForgotPasswordPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div
        className="
          hidden lg:flex flex-col items-center justify-center w-140
          bg-gradient-to-b from-primary to-[#004EB5]
          text-primary-foreground"
      >
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="w-96 h-96 mb-3"
        />
        <h2 className="text-4xl font-bold">TradeWolf</h2>
      </div>

      <div className="flex flex-col justify-center items-center flex-1 px-6 md:px-16">
        <div className="w-full max-w-xl flex flex-col">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
}
