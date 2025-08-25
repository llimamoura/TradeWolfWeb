import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const LoginSchema = z.object({
  email: z.email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export function LoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Logging in with:", data.email, data.password);
  };

  return (
    <section className="w-full lg:mt-20 font-manrope">
      <h1 className="flex justify-center sm:text-5xl text-3xl font-extrabold text-foreground leading-tight lg:mb-6 mb-10">
        Let's log you in
      </h1>
      <p className="hidden font-medium lg:block text-center text-sm text-muted-foreground mb-8">
        Don't have an account?{" "}
        <a
          href="#"
          className="text-primary font-bold hover:text-primary hover:underline transition-colors"
        >
          Sign up
        </a>
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col lg:ml-0"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormLabel className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormLabel className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end mb-4 text-primary">
            <Link to="/forgot-password">
              <Button variant="link" type="button">
                Reset password
              </Button>
            </Link>
          </div>

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Sign in
          </Button>
        </form>
      </Form>
    </section>
  );
}