import { z } from "zod";

export const PasswordSchema = z
  .string()
  .min(8, { message: "Your password must be at least 8 characters long" })
  .max(64, { message: "Your password must be a maximum of 64 characters" })
  .regex(/[A-Z]/, {
    message: "Your password must contain at least one capital letter",
  })
  .regex(/[a-z]/, {
    message: "Your password must contain at least one minuscule letter",
  })
  .regex(/[0-9]/, {
    message: "Your password must contain at least one number",
  })
  .regex(/[!@#$%^&*()]/, {
    message: "Your password must contain at least one special character",
  });

export const ResetPasswordValidationSchema = z
  .object({
    password: PasswordSchema,
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type ResetPasswordData = z.infer<typeof ResetPasswordValidationSchema>;
