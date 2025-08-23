import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="w-full lg:mt-20 font-manrope">
      <h1 className="flex justify-center sm:text-5xl text-3xl font-extrabold text-foreground leading-tight lg:mb-6 mb-10">
        Let's log you in
      </h1>
      <p className="hidden font-medium lg:block text-center text-sm text-muted-foreground mb-8">
        Don't have an account?{" "}
        <a
          className="text-primary font-bold hover:text-primary hover:underline transition-colors"
          href="#"
        >
          Sign up
        </a>
      </p>

      <form className="space-y-6 flex flex-col lg:ml-0" onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input type="email" placeholder="Email" />

        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <Input type="password" placeholder="Password" />

        <div className="flex justify-end mb-4 text-primary ">
          <a href="#">
            <Button variant="link" className="">
              Reset password
            </Button>
          </a>
        </div>

        <Button type="submit" onClick={handleSubmit}>
          Sign in
        </Button>
      </form>
    </section>
  );
}
