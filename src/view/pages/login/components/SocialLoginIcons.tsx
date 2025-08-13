import facebook from "../../../../assets/icons/facebook.png";
import google from "../../../../assets/icons/google.png";
import apple from "../../../../assets/icons/apple.png";

export function SocialLoginIcons () {
  return (
    <div className="flex flex-col">
      <div className="flex items-center w-150 my-6">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-3 text-gray-500 text-sm">or continue with</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex gap-8 justify-center mr-78">
        <button className="cursor-pointer pl-12 pr-12 pt-2 pb-2 border rounded bg-gray-100 hover:bg-gray-300 border-none transition">
          <img src={facebook} alt="Facebook" className="w-10 h-10" />
        </button>
        <button className="cursor-pointer pl-12 pr-12 pt-1 pb-1 border rounded bg-gray-100 hover:bg-gray-300 border-none transition">
          <img src={google} alt="Google" className="w-10 h-10" />
        </button>
        <button className="cursor-pointer pl-12 pr-12 pt-1 pb-1 border rounded bg-gray-100 hover:bg-gray-300 border-none transition">
          <img src={apple} alt="Apple" className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
};
