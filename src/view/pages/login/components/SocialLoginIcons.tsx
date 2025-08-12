import React from "react";
import facebook from "../../../../assets/icons/facebook.png";
import google from "../../../../assets/icons/google.png";
import apple from "../../../../assets/icons/apple.png";
import Email from "../../../../assets/icons/email.png";

const SocialLoginIcons: React.FC = () => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center w-150 my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-3 text-gray-500 text-sm">or continue with</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex gap-5 ml-0">
        <button className="cursor-pointer pl-12 pr-12 pt-3 pb-4 border rounded bg-gray-100 hover:bg-gray-300 border-none">
          <img src={facebook} alt="Facebook" className="w-10 h-10" />
        </button>
        <button className="cursor-pointer pl-12 pr-12 pt-3 pb-4 border rounded bg-gray-100 hover:bg-gray-300 border-none">
          <img src={google} alt="Google" className="w-10 h-10" />
        </button>
        <button className="cursor-pointer pl-12 pr-12 pt-3 pb-4 border rounded bg-gray-100 hover:bg-gray-300 border-none">
          <img src={apple} alt="Apple" className="w-10 h-10" />
        </button>
        <button className="cursor-pointer pl-12 pr-12 pt-3 pb-4 border rounded bg-gray-100 hover:bg-gray-300 border-none">
          <img src={Email} alt="Email" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};

export default SocialLoginIcons;
