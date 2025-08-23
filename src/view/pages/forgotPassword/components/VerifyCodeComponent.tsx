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
    <section className="w-full">
      <h1 className="flex justify-center text-4xl font-extrabold text-foreground leading-tight mb-6">
        Enter verification code
      </h1>
      <p className="hidden lg:block text-center text-sm text-muted-foreground mb-8">
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
            className={cn(
              "w-20 h-20 text-center md:text-3xl rounded-full text-3xl font-bold border-2 transition-colors",
              errors.code1
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary focus:ring-primary"
            )}
            {...register("code1")}
          />
          <Input
            type="text"
            maxLength={1}
            className={cn(
              "w-20 h-20 text-center md:text-3xl rounded-full text-3xl font-bold border-2 transition-colors",
              errors.code2
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary focus:ring-primary"
            )}
            {...register("code2")}
          />
          <Input
            type="text"
            maxLength={1}
            className={cn(
              "w-20 h-20 text-center md:text-3xl rounded-full text-3xl font-bold border-2 transition-colors",
              errors.code3
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary focus:ring-primary"
            )}
            {...register("code3")}
          />
          <Input
            type="text"
            maxLength={1}
            className={cn(
              "w-20 h-20 text-center md:text-3xl rounded-full text-3xl font-bold border-2 transition-colors",
              errors.code4
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-primary focus:ring-primary"
            )}
            {...register("code4")}
          />
        </div>

        {hasAnyError && (
          <p className="text-red-500 text-sm text-center">
            Please, fill in all fields of the verification code
          </p>
        )}

        <Button type="submit" className="mt-8" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>

        <div className="text-center">
          <a
            href="#"
            className="text-primary hover:text-primary hover:underline transition-colors text-sm"
          >
            Resend code
          </a>
        </div>
      </form>
    </section>
  );
}
