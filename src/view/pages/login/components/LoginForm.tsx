import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="w-full mt-20 ">
      <h1 className="text-5xl hidden md:block md:text-4xl font-extrabold text-gray-800 leading-tight mb-3">
        Sign in with password
      </h1>
      <h1 className="text-4xl block  md:hidden font-extrabold text-black leading-tight mb-14">
        Let's log you in
      </h1>
      <p className="hidden md:block text-lg text-gray-500 mb-6">
        Don't have an account?{" "}
        <a
          className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
          href="#"
        >
          Sign up
        </a>
      </p>

      <form className="space-y-4 flex flex-col md:ml-0" onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" className="h-12" />
        <Input type="password" placeholder="Password" className="h-12" />

        <div className="justify-end mt-2 mb-2 hidden md:flex">
          <a href="#">
            <Button variant="ghost">Reset password</Button>
          </a>
        </div>

        <Button
          variant="outline"
          type="submit"
          onClick={handleSubmit}
          className="text-center w-full max-w-4xl h-12 mt-2 bg-[var(--primary-blue)] cursor-pointer text-white py-3 rounded-b-md text-sm md:text-xl font-semibold hover:bg-[var(--primary-blue-hover)] hover:text-white transition "
        >
          Sign in
        </Button>
      </form>
    </section>
  );
}
