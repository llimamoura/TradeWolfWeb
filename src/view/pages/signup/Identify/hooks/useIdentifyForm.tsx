import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  type ImageFormData,
  imageSchema,
  ACCEPTED_IMAGE_TYPES,
} from "../schema";
import { IdentityVerificationMethod } from "../../Residency/schema";

type LocationState = {
  verificationMethod?: IdentityVerificationMethod;
};

export function useIdentifyForm() {
  const navigate = useNavigate();
  const location = useLocation();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const verificationMethod = (location.state as LocationState)
    ?.verificationMethod;
  const identifyTitleMap: Record<IdentityVerificationMethod, string> = {
    [IdentityVerificationMethod.ID_CARD]: "National identity card",
    [IdentityVerificationMethod.PASSPORT]: "Passport",
    [IdentityVerificationMethod.DRIVER_LICENSE]: "Driver License",
  };

  const identifyTitleText =
    identifyTitleMap[verificationMethod as IdentityVerificationMethod];

  const form = useForm<ImageFormData>({
    resolver: zodResolver(imageSchema),
    defaultValues: {
      image: undefined,
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

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleTryAgain = () => {
    setImagePreview(null);
    form.resetField("image");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = () => {
    navigate("/sign-up/profile");
  };

  return {
    form,
    fileInputRef,
    imagePreview,
    identifyTitleText,
    handleImageChange,
    handleButtonClick,
    handleTryAgain,
    onSubmit,
  };
}
