import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="w-full">
      <h1 className="text-5xl md:text-6xl break-words font-extrabold text-gray-800 leading-tight mb-3">
        Sign in with password
      </h1>
      <p className="text-lg text-gray-500 mb-6">
        Don't have an account?{" "}
        <a className="text-blue-500 hover:text-blue-600 hover:underline transition-colors" href="#">
          Sign up
        </a>
      </p>

      <form className="space-y-3 flex flex-col md:ml-0" onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" className="h-12" />
        <Input type="password" placeholder="Password" className="h-12" />

        <div className="flex justify-end mt-2 mb-2">
          <a href="#">
            <Button variant="ghost"> Reset password </Button>
          </a>
        </div>

        <Button
          variant="outline"
          onClick={() =>
            toast.success("Login successfully!", {
              description: "We're carrying your credentials...",
              action: {
                label: "X",
                onClick: () => console.log("X"),
              },
            })
          }
          type="submit"
          className=" w-full max-w-4xl h-12 mt-2 bg-[#001838] md:text-xl cursor-pointer text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#000e21] hover:text-white transition "
        >
          SIGN IN
        </Button>
      </form>
      <div className="mt-6"></div>
    </section>
  );
}
