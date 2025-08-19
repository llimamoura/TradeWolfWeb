import TradeWolfLogo from "../../../assets/img/LogoBG.png";
import { LoginForm } from "./components/LoginForm";
import { SocialLoginIcons } from "./components/SocialLoginIcons";

export function LoginPage() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden lg:flex bg-primary text-primary-foreground flex-col items-center justify-center w-140">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="w-96 h-96 mb-3"
        />
        <h2 className="text-4xl font-bold">TradeWolf</h2>
      </div>

      <div className="flex flex-col justify-start items-center lg:items-start flex-1 -mr-5 mt-7 px-6 pr-13 md:px-16 lg:ml-0">
        <div className="w-full max-w-xl flex flex-col mt-20">
          <LoginForm />
          <SocialLoginIcons />
        </div>
      </div>
    </div>
  );
}
