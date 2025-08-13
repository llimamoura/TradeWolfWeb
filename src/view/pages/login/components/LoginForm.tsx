import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"

export function LoginForm () {

  function handleSubmit (e) {
    e.preventDefault()
  }
  return (
    <section className="w-full">
      <h1 className="text-4xl break-words w-120 md:text-7xl font-extrabold text-gray-800 leading-tight mb-3">
        Sign in with <br /> password
      </h1>
      <p className="text-1xl text-gray-500 mb-6">
        Don't have an account?{" "}
        <a className="text-blue-400 hover:underline" href="#">
          Sign up
        </a>
      </p>

      <form className="space-y-2 flex flex-col" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email"
          className="w-150 h-15 rounded-xl border border-gray-300 px-4 py-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <Input
          type="password"
          placeholder="Password"
          className="w-150 h-15 mt-3 rounded-xl border border-gray-300 px-3 py-2 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />

        <div className="flex flex-col ml-120 mt-2 mb-2">
          <a href="#" className="text-sm text-center border-none rounded border text-[#001838] bg-gray-200 px-2 py-2 w-30">
            Reset password
          </a>
        </div>


        <Button
         variant="outline"
         onClick={() =>
           toast.success("Login successfully!", {
             description: "We're carrying your credentials...", 
             action: {
               label: "X",
               onClick: () =>  console.log("X"),
             },
           })
         }
          type="submit"
          className="w-150 h-15 gap-10 mt-2 bg-[#001838] md:text-xl cursor-pointer text-white py-3 rounded-xl text-sm font-semibold hover:bg-[#000e21] hover:text-white transition"
        >
          SIGN IN
        </Button>
      </form>
      <div className="mt-6"></div>
    </section>
  );
};

