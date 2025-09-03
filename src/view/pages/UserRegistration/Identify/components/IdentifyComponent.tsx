import { ChevronDown, PackagePlus } from "lucide-react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];

const formSchema = z.object({
  image: z
    .any()
    .refine(
      (file) => file && file.size <= MAX_FILE_SIZE,
      "Max image size is 10MB."
    )
    .refine(
      (file) => file && ACCEPTED_IMAGE_TYPES.includes(file.type),
      "Only .jpg, .jpeg, .png and .webp formats are supported."
    ),
});

type FormData = z.infer<typeof formSchema>;

export function IdentifyComponent() {
  const navigate = useNavigate();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      image: undefined,
    },
  });

  const handleImageChange = (file: File | null) => {
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      form.setValue("image", file);
    } else {
      setImagePreview(null);
      form.setValue("image", undefined);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleTryAgain = () => {
    setImagePreview(null);
    form.setValue("image", undefined);
    form.clearErrors("image");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const onSubmit = (data: FormData) => {
    console.log("Form data:", data);
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

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col lg:ml-0"
        >
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="text-background">
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
                  <FormControl>
                    <Input
                      ref={fileInputRef}
                      id="fileUpload"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        handleImageChange(file);
                        field.onChange(file);
                      }}
                      className="hidden"
                    />
                  </FormControl>
                </div>
                <FormMessage />
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
                  Sign in
                </Button>
              </>
            ) : (
              <Button
                type="submit"
                className="bg-gradient-to-r from-[#898989] to-[#3f4e61] opacity-50"
                disabled
              >
                Sign in
              </Button>
            )}
          </div>
        </form>
      </Form>
    </section>
  );
}
