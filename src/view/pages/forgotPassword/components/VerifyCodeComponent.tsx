import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import type { KeyboardEvent } from "react";

const CodeValidationSchema = z.object({
  code1: z.string().min(1, { message: "Campo obrigatório" }),
  code2: z.string().min(1, { message: "Campo obrigatório" }),
  code3: z.string().min(1, { message: "Campo obrigatório" }),
  code4: z.string().min(1, { message: "Campo obrigatório" }),
});

type CodeFormData = z.infer<typeof CodeValidationSchema>;

export function VerifyCodeComponent() {
  const navigate = useNavigate();

  const InputRefs = {
    code1: useRef<HTMLInputElement>(null),
    code2: useRef<HTMLInputElement>(null),
    code3: useRef<HTMLInputElement>(null),
    code4: useRef<HTMLInputElement>(null),
  };

  const form = useForm<CodeFormData>({
    resolver: zodResolver(CodeValidationSchema),
    defaultValues: {
      code1: "",
      code2: "",
      code3: "",
      code4: "",
    },
  });

  const codeFields = ["code1", "code2", "code3", "code4"] as const;

  const handleInputChange = (
    codeFieldNumber: keyof CodeFormData,
    value: string
  ) => {
    const number = value.replace(/\D/g, "");
    form.setValue(codeFieldNumber, number);

    if (number) {
      const currentIndex = codeFields.indexOf(codeFieldNumber);
      const nextField = codeFields[currentIndex + 1];
      if (nextField) {
        InputRefs[nextField].current?.focus();
      }
    }
  };

  const handleKeyDown = (
    codeFieldNumber: keyof CodeFormData,
    e: KeyboardEvent
  ) => {
    const currentValue = form.getValues(codeFieldNumber);
    const currentIndex = codeFields.indexOf(codeFieldNumber);

    if (e.key === "Backspace" && !currentValue) {
      e.preventDefault();
      const prevField = codeFields[currentIndex - 1];
      if (prevField) {
        form.setValue(prevField, "");
        InputRefs[prevField].current?.focus();
      }
    }
  };

  const onSubmit = async (data: CodeFormData) => {
    const fullCode = data.code1 + data.code2 + data.code3 + data.code4;
    console.log("Código completo:", fullCode);
    navigate("/forgot-password/reset-password");
  };

  const hasAnyError = Object.values(form.formState.errors).length > 0;

  return (
    <section className="w-full font-manrope lg:mb-0 lg:justify-center">
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
          <div className="flex gap-4 justify-center">
            <FormField
              control={form.control}
              name="code1"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      ref={InputRefs.code1}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      placeholder="-"
                      className="w-15 h-15 lg:w-20 lg:h-20 bg-border text-center lg:text-3xl text-3xl font-bold rounded-full"
                      onChange={(e) =>
                        handleInputChange("code1", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown("code1", e)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code2"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      ref={InputRefs.code2}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      placeholder="-"
                      className="w-15 h-15 lg:w-20 lg:h-20 bg-border text-center lg:text-3xl text-3xl font-bold rounded-full"
                      onChange={(e) =>
                        handleInputChange("code2", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown("code2", e)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code3"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      ref={InputRefs.code3}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      placeholder="-"
                      className="w-15 h-15 lg:w-20 lg:h-20 bg-border text-center lg:text-3xl text-3xl font-bold rounded-full"
                      onChange={(e) =>
                        handleInputChange("code3", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown("code3", e)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code4"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      {...field}
                      ref={InputRefs.code4}
                      type="text"
                      inputMode="numeric"
                      maxLength={1}
                      placeholder="-"
                      className="w-15 h-15 lg:w-20 lg:h-20 bg-border text-center lg:text-3xl text-3xl font-bold rounded-full"
                      onChange={(e) =>
                        handleInputChange("code4", e.target.value)
                      }
                      onKeyDown={(e) => handleKeyDown("code4", e)}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>

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
