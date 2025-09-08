import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import google from "../../../../assets/icons/google.png";

export function SocialLoginIcons() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center my-7">
        <hr className="flex-grow border-border" />
        <span className="mx-3 text-muted-foreground text-sm">
          or continue with
        </span>
        <hr className="flex-grow border-border" />
      </div>

      <div className="flex gap-4 w-full justify-center">
        <Button
          type="button"
          aria-label="Sign in with Google"
          variant="outline"
        >
          <img src={google} alt="Google" className="size-6" />
          <p className="text-foreground">Sign in with Google</p>
        </Button>
      </div>

      <p className="block lg:hidden text-xs text-muted-foreground mb-6 mt-4 text-center">
        Don't have an account?{" "}
        <Link to="/create-user" className="text-primary hover:underline transition-colors">
          Sign up
        </Link>
      </p>
    </div>
  );
}
