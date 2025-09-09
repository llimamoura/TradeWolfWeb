import { ChevronDown, PackagePlus } from "lucide-react";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import {
  type ImageFormData,
  imageSchema,
  ACCEPTED_IMAGE_TYPES,
} from "../schema";

export function IdentifyComponent() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

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

  return (
    <section className="w-full justify-center">
      <h1 className="flex justify-center lg:mb-10 text-3xl lg:text-4xl lg:text-center text-start font-extrabold text-foreground leading-tight mb-5">
        Photo ID Card
      </h1>
      <p className="font-medium text-center text-sm text-muted-foreground lg:mb-8">
        Please point the camera at the ID card
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="text-background">
                <div className="flex flex-col items-center justify-center w-full mb-8 lg:mt-0 mt-20">
                  <FormLabel
                    htmlFor="fileUpload"
                    className="flex flex-col items-center justify-center w-full h-50 border-2 border-dashed border-quartenary rounded-lg bg-primary-foreground hover:bg-secondary transition lg:mb-0 mb-16"
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
                          className="my-5 w-80 flex items-center justify-start gap-25 lg:gap-21"
                          onClick={handleButtonClick}
                        >
                          <PackagePlus className="size-fit" />
                          Add file
                          <ChevronDown className="ml-auto size-fit" />
                        </Button>
                        <p className="text-sm text-primary font-semibold">
                          Max file size: 10MB
                        </p>
                      </div>
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input
                      ref={fileInputRef}
                      id="fileUpload"
                      type="file"
                      accept={ACCEPTED_IMAGE_TYPES.join(",")}
                      onChange={(e) => handleImageChange(e, field.onChange)}
                      className="hidden"
                    />
                  </FormControl>
                </div>
                <FormMessage className="text-center" />
              </FormItem>
            )}
          />

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
                <Button type="submit" className="w-40 lg:w-70">
                  Submit
                </Button>
              </>
            ) : (
              <Button
                type="submit"
                className="bg-gradient-to-r from-muted-secondary to-border-light"
                disabled
              >
                Submit
              </Button>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
}
