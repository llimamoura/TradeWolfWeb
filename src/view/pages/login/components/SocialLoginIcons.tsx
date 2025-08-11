import React from "react";
import facebook from "../../../../assets/icons/facebook.png";
import google from "../../../../assets/icons/google.png";
import apple from "../../../../assets/icons/apple.png";
import Email from "../../../../assets/icons/email.png"
const SocialLoginIcons: React.FC = () => {
    return(
        <div className="flex flex-col items-center mt-6">
            <span className="text-sm text-black-300 mb-3">or continue with</span>
            <div className="flex gap-3">
                <button className="cursor-pointer pl-9 pr-9 pt-2 pb-2 border rounded bg-gray-300 hover:bg-gray-100 border-none">
                    <img src={facebook} alt="Facebook" className="w-6 h-6" />
                </button>
                <button className="cursor-pointer pl-9 pr-9 pt-2 pb-2 border rounded bg-gray-300 hover:bg-gray-100 border-none">
                    <img src={google} alt="Google" className="w-6 h-6" />
                </button>
                <button className="cursor-pointer pl-9 pr-9 pt-2 pb-2 border rounded bg-gray-300 hover:bg-gray-100 border-none">
                    <img src={apple} alt="Apple" className="w-6 h-6" />
                </button>
                <button className="cursor-pointer pl-9 pr-9 pt-2 pb-2 border rounded bg-gray-300 hover:bg-gray-100 border-none">
                    <img src={Email} alt="Email" className="w-6 h-6" />
                </button>
            </div>
            

        </div>
    )
}

export default SocialLoginIcons;