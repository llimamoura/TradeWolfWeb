import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import google from "../../../../assets/icons/google.png";
import type { FormEvent } from "react";

export function LoginForm() {
  function handleSubmit(e: FormEvent) {

    e.preventDefault();

  }
  return (
    <section className="w-full mt-20 ">
      <h1 className="text-5xl hidden md:block md:text-4xl font-extrabold text-gray-800 leading-tight mb-3">
        Sign in with password
      </h1>
      <h1 className="text-4xl block md:hidden font-extrabold text-black leading-tight mb-3">
        Let's you in
      </h1>
      <p className="hidden md:block text-lg text-gray-500 mb-6">
        Don't have an account?{" "}
        <a className="text-blue-500 hover:text-blue-600 hover:underline transition-colors" href="#">
          Sign up
        </a>
      </p>

      <p className="block md:hidden relative top-70 ml-14 text-lg text-gray-500 mb-6">
        Don't have an account?{" "}
        <a className="text-blue-500 hover:text-blue-600 hover:underline transition-colors" href="#">
          Sign up
        </a>
      </p>

      <form className="space-y-4 flex flex-col md:ml-0" onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" className="h-12 hidden md:block" />
        <Input type="password" placeholder="Password" className="h-12 hidden md:block" />

        <div className="justify-end mt-2 mb-2 hidden md:flex">
          <a href="#">
            <Button variant="ghost"> Reset password </Button>
          </a>
        </div>

        <Button
          variant="outline"
          type="submit"
          onClick={handleSubmit}
          className="text-center hidden md:flex w-full max-w-4xl h-12 mt-2 bg-[#001838] md:text-xl cursor-pointer text-white py-3 rounded-b-md text-3xl font-semibold hover:bg-[#000e21] hover:text-white transition "
        >
          Sign in
        </Button>

        <Button
          type="button"
          className="flex md:hidden bg-gray-100 hover:bg-gray-300 flex-1 h-fit p-2 gap-3" 
        >
          <img src={google} alt="Google" className="size-8" />
          <p className="text-black">Sign in with Google</p>
        </Button>
      </form>
      <div className="mt-6"></div>
    </section>
  );
}
