import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // Maximum file size: 10MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const ProfileSchema = z.object({
  image: z
    .union([z.instanceof(File), z.null(), z.undefined()])
    .refine(
      (file) => file == null || file.size <= MAX_FILE_SIZE,
      "Max image size is 10MB."
    )
    .refine(
      (file) => file == null || ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
  fullName: z
    .string({ message: "Fill the field with your complete name" })
    .min(1, { message: "Your full name is required" }),
  cpf: z
    .string({ message: "Fill the field with your complete CPF" })
    .min(11, { message: "The CPF's must be at least 11 characters long" })
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "CPF must be in the format 000.000.000-00"
    ),
  email: z
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters" })
    .regex(/^\(?[1-9]{2}\)?[\s-]?9\d{4}-?\d{4}$/, "Invalid phone number"),
});

export type ProfileFormData = z.infer<typeof ProfileSchema>;
