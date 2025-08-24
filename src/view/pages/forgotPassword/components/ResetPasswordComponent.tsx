import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const ResetPasswordValidationSchema = z.object({
    password: z.string()
      .min(8, { message: "Your password must be at least 8 characters long" })
      .max(64, { message: "Your password must be a maximum of 64 characters" })
      .regex(/[A-Z]/, {
        message: "Your password must contain at least one capital letter",
      })
      .regex(/[a-z]/, {
        message: "Your password must contain at least one minuscule letter",
      })
      .regex(/[0-9]/, {
        message: "Your password must contain at least one number",
      })
      .regex(/[!@#$%^&*()]/, {
        message: "Your password must contain at least one special character",
      }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type ResetPasswordData = z.infer<typeof ResetPasswordValidationSchema>;

export function ResetPasswordComponent() {
  const form = useForm<ResetPasswordData>({
    resolver: zodResolver(ResetPasswordValidationSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: ResetPasswordData) => {
    console.log("Sending password...", data.password);
    toast.success("Password has been reset.");
  };

  const onError = () => {
    toast.error("Please correct the highlighted fields.");
  };

  return (
    <section className="w-full font-manrope lg:mb-0 lg:justify-center">
      <h1 className="flex justify-center text-4xl font-extrabold text-foreground leading-tight mb-6">
        Create Password
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-9">
        Create your new password to login.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-5 flex flex-col lg:ml-0"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormLabel className="absolute -top-3 left-3 bg-white px-2 text-primary text-sm font-medium z-10">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" className="h-15 mb-2" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormLabel className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10">
                    Repeat Password
                  </FormLabel>
                  <FormControl>
                    <Input type="password" className="h-15 mb-4" {...field} />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
