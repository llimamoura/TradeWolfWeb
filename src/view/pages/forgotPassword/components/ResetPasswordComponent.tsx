import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const ResetPasswordValidationSchema = z
  .object({
    password: z
      .string()
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordData>({
    resolver: zodResolver(ResetPasswordValidationSchema),
  });

  const onSubmit = async (data: ResetPasswordData) => {
    console.log("Sending password... ", data.password);
    toast.success("Password has been reset.");
  };

  const onError = () => {
    toast.error("Please correct the highlighted fields.");
  };

  return (
    <section className="w-full">
      <h1 className="flex justify-center text-4xl font-extrabold text-foreground leading-tight mb-6">
        Create Password
      </h1>
      <p className="hidden lg:block text-center text-sm text-muted-foreground mb-8">
        Create your new password to login.
      </p>

      <form
        className="space-y-5 flex flex-col lg:ml-0"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <label htmlFor="password" className="sr-only">
          Password
        </label>
        <Input
          type="password"
          placeholder="Password"
          className={cn(
            "h-15 mb-7 transition-colors",
            errors.password
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "focus:border-primary focus:ring-primary"
          )}
          {...register("password")}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">
            {errors.password.message}
          </span>
        )}

        <label htmlFor="confirmPassword" className="sr-only">
          Confirm Password
        </label>
        <Input
          type="password"
          placeholder="Repeat Password"
          className={cn(
            "h-15 mb-7 transition-colors",
            errors.confirmPassword
              ? "border-red-500 focus:border-red-500 focus:ring-red-500"
              : "focus:border-primary focus:ring-primary"
          )}
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="text-red-500 text-sm">
            {errors.confirmPassword.message}
          </span>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </section>
  );
}
