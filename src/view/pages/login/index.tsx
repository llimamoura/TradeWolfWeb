import LoginForm from "./components/LoginForm";
import SocialLoginIcons from "./components/SocialLoginIcons";
import TradeWolfLogo from "../../../assets/img/Logo-removebg.png"
import React from "react";

const LoginPage: React.FC = () => {
    return(
        <div className="flex h-screen">
            <div className = "bg-[#001838] text-white flex flex-col items-center justify-center w-135">
                <img src={TradeWolfLogo} alt="TradeWolfLogo" className="w-97.5 h-97.5 mb-3" />
                <h1 className="relative bottom-10 text-5xl font-bold">TradeWolf</h1>
            </div>
            <div className="bg-gray-50 flex flex-col justify-center items-center flex-1">
                <LoginForm />
                <SocialLoginIcons />
            </div>
        </div>
    )
}

export default LoginPage;