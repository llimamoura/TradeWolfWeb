import { LoginForm } from "./components/LoginForm";
import { SocialLoginIcons } from "./components/SocialLoginIcons";
import TradeWolfLogo from "../../../assets/img/LogoBG.png";

export function LoginPage () {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="hidden md:flex bg-[#001838] text-white flex-col items-center justify-center w-160">
        <img
          src={TradeWolfLogo}
          alt="TradeWolfLogo"
          className="w-97.5 h-97.5 mb-3"
        />
        <h1 className="text-4xl font-bold">TradeWolf</h1>
      </div>

      <div className="flex flex-col justify-start items-start flex-1 -mr-20 mt-7 px-6 md:px-16">
        <div className="w-full flex flex-col mt-20">
          <LoginForm />
          <SocialLoginIcons />
        </div>
      </div>
    </div>
  );
};

