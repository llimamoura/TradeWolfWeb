import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import {
  type ResetPasswordData,
  ResetPasswordValidationSchema,
} from "@/validations/auth";

export function useResetPasswordForm() {
  const navigate = useNavigate();

  const form = useForm<ResetPasswordData>({
    resolver: zodResolver(ResetPasswordValidationSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async () => {
    toast.success("Password has been reset.");
    navigate("/");
  };

  const onError = () => {
    toast.error("Please correct the highlighted fields.");
  };

  return {
    form,
    onSubmit,
    onError,
  };
}
