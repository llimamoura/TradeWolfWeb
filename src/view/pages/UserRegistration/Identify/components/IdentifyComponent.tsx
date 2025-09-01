import { ChevronDown, PackagePlus } from "lucide-react";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function IdentifyComponent() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isValidFile, setIsValidFile] = useState(false);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const maxSize = 10 * 1024 * 1024;
      
      if (file.size > maxSize) {
        setImagePreview(null);
        setIsValidFile(false);
        if (fileInputRef.current) {
          fileInputRef.current.value = "";
        }
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        setIsValidFile(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleTryAgain = () => {
    setImagePreview(null);
    setIsValidFile(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = () => {
    navigate("/create-user/profile");
  };

  return (
    <section className="w-full font-manrope lg:mb-0 lg:justify-center">
      <h1 className="flex justify-center lg:mb-10 text-3xl lg:text-4xl lg:text-center text-start font-extrabold text-foreground leading-tight mb-5">
        Photo ID Card
      </h1>
      <p className="font-medium text-center text-sm text-muted-foreground lg:mb-8">
        Please point the camera at the ID card
      </p>

      <div className="flex flex-col items-center justify-center w-full mb-8 lg:mt-0 mt-20">
        <Label
          htmlFor="fileUpload"
          className="flex flex-col items-center justify-center w-full h-50 border-2 border-dashed border-gray-300 rounded-lg bg-primary-foreground hover:bg-secondary transition lg:mb-0 mb-16"
        >
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Preview"
              className="object-contain h-full w-full p-2 rounded"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-center px-4">
              <Button
                type="button"
                className="mb-5 mt-5 w-80 flex items-center justify-start gap-25 lg:gap-21"
                onClick={handleButtonClick}
              >
                <PackagePlus className="!w-fit !h-fit" />
                Add file
                <ChevronDown className="ml-auto !w-fit !h-fit" />
              </Button>
              <p className="text-sm text-primary font-semibold">
                Max file size: 10MB
              </p>
            </div>
          )}
        </Label>
        <Input
          ref={fileInputRef}
          id="fileUpload"
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="hidden"
        />
      </div>

      <div className="flex gap-5 lg:gap-10 mt-10 items-center justify-center">
        {imagePreview ? (
          <>
            <Button
              type="button"
              variant="outline"
              onClick={handleTryAgain}
              className="w-40 lg:w-70 text-primary border border-primary mt-auto font-bold"
            >
              Try Again
            </Button>
            <Button 
              type="submit" 
              onClick={onSubmit} 
              className="w-40 lg:w-70"
              disabled={!isValidFile}
            >
              Sign in
            </Button>
          </>
        ) : (
          <Button 
            type="submit" 
            onClick={onSubmit}
            disabled={!isValidFile}
            className="bg-gradient-to-r from-[#898989] to-[#3f4e61] opacity-50"
          >
            Sign in
          </Button>
        )}
      </div>
    </section>
  );
}
