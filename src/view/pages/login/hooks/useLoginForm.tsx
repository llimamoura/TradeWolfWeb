import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type LoginFormData, LoginSchema } from "../schema";

export function useLoginForm() {
  const form = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    console.log("Logging in with:", data.email, data.password);
  };

  return {
    form,
    onSubmit,
  };
}
