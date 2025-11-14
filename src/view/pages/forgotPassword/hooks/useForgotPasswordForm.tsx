import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { type EmailFormData, EmailValidationSchema } from "../schema";

export function useForgotPasswordForm() {
  const navigate = useNavigate();

  const form = useForm<EmailFormData>({
    resolver: zodResolver(EmailValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async () => {
    navigate("/forgot-password/verification");
  };

  return {
    form,
    onSubmit,
  };
}
