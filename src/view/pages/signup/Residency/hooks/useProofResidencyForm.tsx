import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  type ProofResidencyForm,
  proofResidencySchema,
  IdentityVerificationMethod,
} from "../schema";

export function useProofResidencyForm() {
  const navigate = useNavigate();

  const form = useForm<ProofResidencyForm>({
    resolver: zodResolver(proofResidencySchema),
    defaultValues: {
      nationality: "",
      verificationMethod: IdentityVerificationMethod.ID_CARD,
    },
  });

  const onSubmit = () => {
    const selectedMethod = form.getValues("verificationMethod");
    navigate("/sign-up/identify", {
      state: { verificationMethod: selectedMethod },
    });
  };

  return {
    form,
    onSubmit,
  };
}
