import { z } from "zod";

export const IdentityVerificationMethod = {
  ID_CARD: "id_card",
  PASSPORT: "passport",
  DRIVER_LICENSE: "driver_license",
} as const;

export const proofResidencySchema = z.object({
  nationality: z.string().min(1, "Please select a nationality"),
  verificationMethod: z.enum(IdentityVerificationMethod),
});

export type ProofResidencyForm = z.infer<typeof proofResidencySchema>;