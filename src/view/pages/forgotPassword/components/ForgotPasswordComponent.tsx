import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const EmailValidationSchema = z.object({
  email: z
    .email({ message: "Invalid email!" })
    .min(1, { message: "The email field cannot be empty" })
    .max(255, { message: "Very long email" }),
});

type EmailFormData = z.infer<typeof EmailValidationSchema>;

export function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(EmailValidationSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    console.log("Sending email...", data.email);
  };

  return (
    <section className="w-full font-manrope lg:mb-0 lg:justify-center">
      <h1 className="flex justify-center lg:mb-6 text-3xl lg:text-4xl lg:text-center text-center font-extrabold text-foreground leading-tight mb-8">
        Forgot your Password?
      </h1>
      <p className="font-medium text-center text-sm text-muted-foreground mb-8">
        No worries, you just need to type your email address and we will send
        the verification code.
      </p>

      <form
        className="space-y-5 flex flex-col lg:ml-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <Input
          type="email"
          placeholder="Email"
          className="h-15 mb-7"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-error">{errors.email.message}</span>
        )}

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </section>
  );
}
