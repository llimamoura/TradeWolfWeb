import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
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
import { type EmailFormData, EmailValidationSchema } from "../schema";

export function ForgotPasswordForm() {
  const navigate = useNavigate();

  const form = useForm<EmailFormData>({
    resolver: zodResolver(EmailValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: EmailFormData) => {
    console.log("Sending email...", data.email);
    navigate("/forgot-password/verification");
  };

  return (
    <section className="w-full">
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
          className="space-y-5 flex flex-col"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput label="Email">
                  <FormControl>
                    <Input type="email" className="mb-2" {...field} />
                  </FormControl>
                </FloatingLabelInput>
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
