import { zodResolver } from "@hookform/resolvers/zod";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  type ProfileFormData,
  ProfileSchema,
  ACCEPTED_IMAGE_TYPES,
} from "../schema";
import { toast } from "sonner";

export function useProfileForm() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      image: undefined,
      fullName: "",
      cpf: "",
      email: "",
      phoneNumber: "",
    },
  });

  const handleImageChange = (
    e: ChangeEvent<HTMLInputElement>,
    onChange: (file: File | null) => void
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!ACCEPTED_IMAGE_TYPES.includes(file.type)) {
        form.setError("image", {
          type: "custom",
          message: "Only .JPG, .JPEG, .PNG and .WebP formats are supported.",
        });
        return;
      }
      form.clearErrors("image");

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      onChange(file);
    } else {
      onChange(null);
    }
  };

  const onSubmit = async () => {
    toast.success("Your Profile has been created successfully.");
    navigate("/");
  };

  const isFormValid = form.formState.isValid;

  return {
    form,
    fileInputRef,
    imagePreview,
    isFormValid,
    handleImageChange,
    onSubmit,
  };
}
