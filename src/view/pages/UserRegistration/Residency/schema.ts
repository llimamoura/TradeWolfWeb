import { z } from "zod";

export const proofResidencySchema = z.object({
    nationality: z.string().min(1, "Please select a nationality"),
    verificationMethod: z.enum([
      "National-identity-card",
      "Passport",
      "Driver-license",
    ]),
  });
  
export type ProofResidencyForm = z.infer<typeof proofResidencySchema>;
