import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function IdentifyComponent() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const onSubmit = () => {
    navigate("/create-user/profile");
  };

  return (
    <section className="w-full font-manrope mb-12 lg:mb-0 lg:justify-center">
      <h1 className="flex justify-center lg:mb-10 text-3xl lg:text-4xl lg:text-center text-start font-extrabold text-foreground leading-tight mb-5">
        Photo ID Card
      </h1>
      <p className="font-medium lg:text-center text-start text-sm text-muted-foreground mb-8">
        Please point the camera at the ID card or upload a photo
      </p>

      <div className="flex flex-col items-center justify-center w-full mb-8">
        <label
          htmlFor="fileUpload"
          className="flex flex-col items-center justify-center w-full max-w-md h-60 border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition"
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="object-contain h-full w-full p-2 rounded"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center px-4">
              <Button type="button" onClick={handleButtonClick}>
                Click here
              </Button>
              <p className="text-sm text-muted-foreground">
                Click to upload or drag and drop an image
              </p>
            </div>
          )}
        </label>
        <Input
          ref={fileInputRef}
          id="fileUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <Button type="submit" onClick={onSubmit}>
        Continue
      </Button>
    </section>
  );
}
