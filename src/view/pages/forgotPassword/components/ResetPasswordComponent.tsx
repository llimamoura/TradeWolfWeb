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
import { useResetPasswordForm } from "../hooks/useResetPasswordForm";

export function ResetPasswordComponent() {
  const { form, onSubmit, onError } = useResetPasswordForm();

  return (
    <section className="w-full">
      <h1 className="flex justify-center text-4xl font-extrabold text-foreground leading-tight mb-6">
        Create Password
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-9">
        Create your new password to login.
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-5 flex flex-col"
        >
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput label="Password">
                  <FormControl>
                    <Input type="password" className="mb-2" {...field} />
                  </FormControl>
                </FloatingLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput label="Repeat Password">
                  <FormControl>
                    <Input type="password" className="mb-4" {...field} />
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
