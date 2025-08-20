import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const ResetPasswordValidationSchema = z.object({
  password: z.string()
    .min(8, {error: "Your password must be at least 8 characters long"})
    .max(64, {error: "Your password must be a maximum of 64 characters"})
    .regex(/[A-Z]/, "Your password must contain at least one capital letter")
    .regex(/[a-z]/, "Your password must contain at least one minuscule letter")
    .regex(/[0-9]/, "Your password must contain at least one number")
    .regex(/[!@#$%^&*()]/, "Your password must contain at least one special character"),

  confirmPassword: z.string()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type ResetPasswordData = z.infer<typeof ResetPasswordValidationSchema>

export function ResetPasswordComponent() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm <ResetPasswordData>({
    resolver: zodResolver(ResetPasswordValidationSchema)
  })

  const onSubmit = async (data: ResetPasswordData) => {
    console.log("Sending password... ", data.password)
  }

  return (
    <section className="w-full lg:mt-45">
      <h1 className="text-4xl font-extrabold text-foreground leading-tight mb-5">
        Create Password
      </h1>
      <p className="hidden lg:block text-sm text-muted-foreground mb-8">
      Create your new password to login.
      </p>

      <form className="space-y-5 flex flex-col lg:ml-0" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="password" className="sr-only">Password</label>
        <Input 
        type="password" 
        placeholder="Password" 
        className="h-15 mb-7" 
        {...register("password")} /> 
        {errors.password && 
        (<span className="text-red-500">{errors.password.message}</span>)}

        <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
        <Input 
        type="password" 
        placeholder="Repeat Password" 
        className="h-15 mb-7" 
        {...register("confirmPassword")} /> 
        {errors.confirmPassword && 
        (<span className="text-red-500">{errors.confirmPassword.message}</span>)}

        <Button type="submit" disabled = {isSubmitting}>
        {isSubmitting ? "Submiting..." : "Submit"}
        </Button>
      </form>
    </section>
  );
}
