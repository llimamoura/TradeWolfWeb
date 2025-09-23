import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { type CodeFormData, CodeValidationSchema } from "../schema";

export function useVerifyCodeForm() {
  const navigate = useNavigate();

  const form = useForm<CodeFormData>({
    resolver: zodResolver(CodeValidationSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = async () => {
    navigate("/forgot-password/reset-password");
  };

  const hasAnyError = Object.values(form.formState.errors).length > 0;

  return {
    form,
    hasAnyError,
    onSubmit,
  };
}
