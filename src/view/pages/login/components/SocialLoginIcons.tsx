import { Button } from "@/components/ui/button";
import apple from "../../../../assets/icons/apple.png";
import facebook from "../../../../assets/icons/facebook.png";
import google from "../../../../assets/icons/google.png";

export function SocialLoginIcons() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center my-6 mb-8">
        <hr className="flex-grow border-gray-300" />
        <span className="mx-3 text-gray-500 text-sm">or continue with</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <div className="flex gap-4 w-full justify-center">
        <Button
          type="button"
          className="bg-gray-100 hover:bg-gray-300 flex-1 h-fit"
        >
          <img src={facebook} alt="Facebook" className="size-8" />
        </Button>
        <Button
          type="button"
          className="bg-gray-100 hover:bg-gray-300 flex-1 h-fit"
        >
          <img src={google} alt="Google" className="size-8" />
        </Button>
        <Button
          type="button"
          className="bg-gray-100 hover:bg-gray-300 flex-1 h-fit"
        >
          <img src={apple} alt="Apple" className="size-8"/>
        </Button>
      </div>
    </div>
  );
}
