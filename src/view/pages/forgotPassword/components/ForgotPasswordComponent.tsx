import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const EmailValidationSchema = z.object({
  email: z.email({error: "Invalid email!"})
  .nonempty({error: "The email field cannot be empty"})
  .max(255, {error: "Very long email"})
});

type EmailFormData = z.infer<typeof EmailValidationSchema>;

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm <EmailFormData> ({
    resolver: zodResolver(EmailValidationSchema)
  })

  const onSubmit = async (data: EmailFormData) => {
    console.log("Sending email...", data.email)
  }

  return (
    <section className="w-full lg:mt-45">
      <h1 className="text-4xl font-extrabold text-foreground leading-tight mb-6">
        Forgot your Password?
      </h1>
      <p className="hidden lg:block text-sm text-muted-foreground mb-8">
      No worries, you just need to type your email address and we will send the verification code.
      </p>

      <form className="space-y-5 flex flex-col lg:ml-0" onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email" 
        className="sr-only">
          Email
        </label>
        <Input 
        type="email" 
        placeholder="Email" 
        className="h-15 mb-7" 
        {...register("email")}/> 
        {errors.email &&(<span className="text-red-500">{errors.email.message}</span>)}

        <Button 
        type="submit" 
        disabled={isSubmitting}>
        {isSubmitting ? "Submiting..." : "Submit"}
        </Button>
      </form>
    </section>
  );
}
