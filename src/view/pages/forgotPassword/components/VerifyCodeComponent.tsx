import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const CodeValidationSchema = z.object({
  code1: z.string().min(1, { message: "Campo obrigatório" }),
  code2: z.string().min(1, { message: "Campo obrigatório" }),
  code3: z.string().min(1, { message: "Campo obrigatório" }),
  code4: z.string().min(1, { message: "Campo obrigatório" }),
});

type CodeFormData = z.infer<typeof CodeValidationSchema>;

export function VerifyCodeComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CodeFormData>({
    resolver: zodResolver(CodeValidationSchema),
  });

  const onSubmit = async (data: CodeFormData) => {
    const fullCode = data.code1 + data.code2 + data.code3 + data.code4;
    console.log("Código completo:", fullCode);
  };

  const hasAnyError =
    errors.code1 || errors.code2 || errors.code3 || errors.code4;

  return (
    <section className="w-full font-manrope lg:mb-0 lg:justify-center">
      <h1 className="flex justify-center text-4xl lg:text-center text-center font-extrabold text-foreground leading-tight mb-6">
        Verify Code
      </h1>
      <p className="font-medium text-center text-sm text-muted-foreground mb-8">
        Enter code that we have sent to your email your...@domain.com
      </p>

      <form
        className="space-y-6 flex flex-col lg:ml-0"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex gap-4 justify-center">
          <Input
            type="text"
            maxLength={1}
            placeholder="-"
            className={cn(
              "w-15 h-15 lg:w-20 lg:h-20 bg-border text-center md:text-3xl rounded-full text-3xl font-bold border-2 transition-colors",
              errors.code1
                ? "border-error focus:border-error focus:ring-error"
                : "border-border focus:border-primary focus:ring-primary"
            )}
            {...register("code1")}
          />
          <Input
            type="text"
            maxLength={1}
            placeholder="-"
            className={cn(
              "w-15 h-15 lg:w-20 lg:h-20 bg-border text-center md:text-3xl rounded-full text-3xl font-bold border-2 transition-colors",
              errors.code2
                ? "border-error focus:border-error focus:ring-error"
                : "border-border focus:border-primary focus:ring-primary"
            )}
            {...register("code2")}
          />
          <Input
            type="text"
            maxLength={1}
            placeholder="-"
            className={cn(
              "w-15 h-15 lg:w-20 lg:h-20 bg-border text-center md:text-3xl rounded-full text-3xl font-bold border-2 transition-colors",
              errors.code3
                ? "border-error focus:border-error focus:ring-error"
                : "border-border focus:border-primary focus:ring-primary"
            )}
            {...register("code3")}
          />
          <Input
            type="text"
            maxLength={1}
            placeholder="-"
            className={cn(
              "w-15 h-15 lg:w-20 lg:h-20 bg-border text-center md:text-3xl rounded-full text-3xl font-bold border-2 transition-colors",
              errors.code4
                ? "border-error focus:border-error focus:ring-error"
                : "border-border focus:border-primary focus:ring-primary"
            )}
            {...register("code4")}
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

        <Button type="submit" className="mt-1" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </form>
    </section>
  );
}
