import { z } from "zod";

export const EmailValidationSchema = z.object({
  email: z
    .email({ message: "Invalid email!" })
    .max(255, { message: "Very long email" }),
});

export type EmailFormData = z.infer<typeof EmailValidationSchema>;

export const CodeValidationSchema = z.object({
  code: z.string().length(4, { message: "Code must be 4 digits" }),
});

export type CodeFormData = z.infer<typeof CodeValidationSchema>;
