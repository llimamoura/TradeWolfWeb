import { OTPInput } from "@/components/otp-input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { useVerifyCodeForm } from "../hooks/useVerifyCodeForm";

export function VerifyCodeComponent() {
  const { form, hasAnyError, onSubmit } = useVerifyCodeForm();

  return (
    <section className="w-full">
      <h1 className="flex justify-center text-4xl font-extrabold text-foreground leading-tight mb-6">
        Verify Code
      </h1>
      <p className="font-medium text-center text-sm text-muted-foreground mb-8">
        Enter the code that we have sent to your email your...@domain.com
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col"
        >
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <OTPInput
                    value={field.value}
                    onChange={field.onChange}
                    maxLength={4}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          {hasAnyError && (
            <p className="text-error text-sm text-center">
              Please, fill in all fields of the verification code
            </p>
          )}

          <div className="text-center">
            <a
              href="#"
              className="text-primary hover:text-primary font-bold underline underline-offset-2 transition-colors mt-10 text-sm"
            >
              Resend code
            </a>
          </div>

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
