import { z } from "zod";

export enum IdentityVerificationMethod {
  ID_CARD = "id_card",
  PASSPORT = "passport",
  DRIVER_LICENSE = "driver_license",
}

export const proofResidencySchema = z.object({
  nationality: z.string().min(1, "Please select a nationality"),
  verificationMethod: z.enum(IdentityVerificationMethod),
});

export type ProofResidencyForm = z.infer<typeof proofResidencySchema>;
