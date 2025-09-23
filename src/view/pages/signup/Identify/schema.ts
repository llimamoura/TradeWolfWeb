import { z } from "zod";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // Maximum file size: 10MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

export const imageSchema = z.object({
  image: z
    .instanceof(File)
    .refine(
      (file) => file && file.size <= MAX_FILE_SIZE,
      "Max image size is 10MB."
    )
    .refine(
      (file) => file && ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

export type ImageFormData = z.infer<typeof imageSchema>;
