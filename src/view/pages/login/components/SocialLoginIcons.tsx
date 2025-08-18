import { Button } from "@/components/ui/button";
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
          className="hidden md:flex bg-gray-100 hover:bg-gray-300 flex-1 h-fit p-2 gap-3" 
        >
          <img src={google} alt="Google" className="size-8" />
          <p className="text-black">Sign in with Google</p>
        </Button>

        <Button
          variant="outline"
          type="submit"
          className="flex md:hidden w-full max-w-4xl h-12 mt-2 bg-[#001838] md:text-xl cursor-pointer text-white py-3 rounded-b-md text-sm font-semibold hover:bg-[#000e21] hover:text-white transition "
        >
          Sign in
        </Button>
      </div>
    </div>
  );
}
