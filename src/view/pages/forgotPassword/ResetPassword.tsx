import { Toaster } from "@/components/ui/sonner";
import TradeWolfLogo from "../../../assets/img/LogoBG.png";
import { ResetPasswordComponent } from "./components/ResetPasswordComponent";

export function ResetPasswordPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <Toaster richColors position="top-center" />

      <div className="hidden lg:flex bg-primary bg-gradient-to-b from-primary to-tertiary text-primary-foreground flex-col items-center justify-center w-140">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="w-110 h-110 mb-3"
        />
        <h2 className="text-5xl font-bold">TradeWolf</h2>
      </div>

      <div className="h-screen flex flex-col justify-center items-center flex-1 px-6 md:px-16">
        <div className="w-full max-w-xl flex flex-col">
          <ResetPasswordComponent />
        </div>
      </div>
    </div>
  );
}
