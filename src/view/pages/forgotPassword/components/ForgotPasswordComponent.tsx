import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const EmailValidationSchema = z.object({
  email: z
    .string()
    .email({ message: "Invalid email!" })
    .min(1, { message: "The email field cannot be empty" })
    .max(255, { message: "Very long email" }),
});

type EmailFormData = z.infer<typeof EmailValidationSchema>;

export function ForgotPasswordForm() {
  const navigate = useNavigate();

  const form = useForm<EmailFormData>({
    resolver: zodResolver(EmailValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: EmailFormData) => {
    console.log("Sending email...", data.email);
    navigate("/forgot-password/verification");
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

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 flex flex-col lg:ml-0"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="sr-only">Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Email"
                    type="email"
                    className="h-15 mb-2"
                    {...field}
                  />
                </FormControl>
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
