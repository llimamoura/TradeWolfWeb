import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type LoginFormData, LoginSchema } from "../schema";
import { useNavigate } from "react-router-dom";

export function useLoginForm() {
    const navigate = useNavigate()
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async () => {
    navigate("/home")
  };

  return {
    form,
    onSubmit,
  };
}
