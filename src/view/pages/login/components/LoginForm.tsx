import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="w-full mt-20 ">
      <h1 className="text-5xl hidden lg:block lg:text-3xl font-extrabold text-gray-900 leading-tight mb-3">
        Sign in with password
      </h1>
      <h1 className="text-4xl block lg:hidden  font-extrabold text-gray-900 leading-tight mb-14">
        Let's log you in
      </h1>
      <p className="hidden lg:block text-sm text-gray-500 mb-6">
        Don't have an account?{" "}
        <a
          className="text-blue-500 hover:text-blue-600 hover:underline transition-colors"
          href="#"
        >
          Sign up
        </a>
      </p>

      <form className="space-y-4 flex flex-col lg:ml-0" onSubmit={handleSubmit}>
        <Input type="email" placeholder="Email" className="h-12" />
        <Input type="password" placeholder="Password" className="h-12" />

        <div className="justify-end mt-2 mb-2 hidden lg:flex text-blue-950">
          <a href="#">
            <Button
              variant="ghost"
              className="bg-gray-200 hover:bg-gray-300 hover:text-blue-950"
            >
              Reset password
            </Button>
          </a>
        </div>

        <Button
          variant="outline"
          type="submit"
          onClick={handleSubmit}
          className="text-center w-full max-w-4xl h-12 mt-2 bg-[var(--primary-blue)] cursor-pointer text-white py-3 rounded-b-md text-sm lg:text-xl font-semibold hover:bg-[var(--primary-blue-hover)] hover:text-white transition "
        >
          Sign in
        </Button>
      </form>
    </section>
  );
}
