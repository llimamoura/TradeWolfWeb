import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FloatingLabelInput } from "@/components/floating-label-input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { type LoginFormData, LoginSchema } from "../schema";

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
    <section className="w-full lg:mt-20">
      <h1 className="flex justify-center sm:text-5xl text-3xl font-extrabold text-foreground leading-tight lg:mb-6 mb-10">
        Let's log you in
      </h1>
      <p className="hidden font-medium lg:block text-center text-sm text-muted-foreground mb-8">
        Don't have an account?{" "}
        <Link
          to="/create-user"
          className="text-primary font-bold hover:text-primary hover:underline transition-colors"
        >
          Sign up
        </Link>
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
                <FloatingLabelInput label="Email">
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FloatingLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput label="Password">
                  <FormControl>
                    <Input type="password" {...field} />
                  </FormControl>
                </FloatingLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex justify-end mb-4 text-primary">
            <Link to="/forgot-password">
              <Button variant="secondary" type="button">
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
