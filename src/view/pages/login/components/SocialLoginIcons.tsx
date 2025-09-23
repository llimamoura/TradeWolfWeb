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
          className=" bg-gray-100 hover:bg-gray-300 border border-gray-500 flex-1 h-fit p-3 gap-3"
        >
          <img src={google} alt="Google" className="size-6" />
          <p className="text-black">Sign in with Google</p>
        </Button>
      </div>

      <p className="block lg:hidden text-xs text-gray-500 mb-6 mt-4 text-center">
        Don't have an account?{" "}
        <a
          className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
          href="#"
        >
          Sign up
        </a>
      </p>
    </div>
  );
}
