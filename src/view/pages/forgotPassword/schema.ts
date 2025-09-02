import { z } from "zod";

export const EmailValidationSchema = z.object({
  email: z
    .email({ message: "Invalid email!" })
    .max(255, { message: "Very long email" }),
});

export type EmailFormData = z.infer<typeof EmailValidationSchema>;

export const CodeValidationSchema = z.object({
  code1: z.string().min(1, { message: "Required field" }),
  code2: z.string().min(1, { message: "Required field" }),
  code3: z.string().min(1, { message: "Required field" }),
  code4: z.string().min(1, { message: "Required field" }),
});

export type CodeFormData = z.infer<typeof CodeValidationSchema>;
