import type { FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function LoginForm() {
  function handleSubmit(e: FormEvent) {
    e.preventDefault();
  }

  return (
    <section className="w-full mt-20">
      <h1 className="text-4xl font-extrabold text-foreground leading-tight mb-10">
        Let's log you in
      </h1>
      <p className="hidden lg:block text-sm text-muted-foreground mb-6">
        Don't have an account?{" "}
        <a
          className="text-primary hover:text-primary hover:underline transition-colors"
          href="#"
        >
          Sign up
        </a>
      </p>

      <form className="space-y-4 flex flex-col lg:ml-0" onSubmit={handleSubmit}>
        <label htmlFor="email" className="sr-only">Email</label>
        <Input type="email" placeholder="Email" className="h-12" />

        <label htmlFor="password" className="sr-only" >Password</label>
        <Input type="password" placeholder="Password" className="h-12" />

        <div className="justify-end mt-2 mb-2 hidden lg:flex text-primary">
          <a href="#">
            <Button
              variant="link"
            >
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
