import { zodResolver } from "@hookform/resolvers/zod";
import { PencilLine, UserRound } from "lucide-react";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  type ProfileFormData,
  ProfileSchema,
  ACCEPTED_IMAGE_TYPES,
} from "../schema";
import { toast } from "sonner";
import { formatCPF } from "@/utils/format-cpf";
import { formatPhone } from "@/utils/format-phone";
import { FloatingLabelInput } from "@/components/floating-label-input";

export function ProfileComponent() {
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

  return (
    <section className="w-full">
      <h1 className="flex justify-center sm:text-5xl text-3xl font-extrabold text-foreground leading-tight lg:mb-6 mb-10">
        Fill Your Profile
      </h1>
      <p className="hidden font-medium lg:block text-center text-sm text-muted-foreground mb-8">
        Don't worry, you can always change it later
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
                <div className="flex flex-col items-center justify-center w-full mb-8">
                  <FormLabel
                    htmlFor="fileUpload"
                    className="grid size-24 rounded-full bg-primary cursor-pointer"
                  >
                    {imagePreview ? (
                      <img
                        src={imagePreview}
                        alt="Preview"
                        className="w-full h-full object-cover object-center rounded-full overflow-hidden"
                      />
                    ) : (
                      <>
                        <UserRound className="text-background size-14 justify-self-center mt-4 self-center overflow" />
                        <PencilLine className="bg-border-light justify-self-end self-end size-6 mr-1 border-2 border-background  rounded-full p-1 text-background" />
                      </>
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
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput label="Full Name">
                  <FormControl>
                    <Input type="fullName" {...field} />
                  </FormControl>
                </FloatingLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput label="CPF">
                  <FormControl>
                    <Input
                      type="text"
                      id="cpf"
                      inputMode="numeric"
                      {...field}
                      onChange={(e) => {
                        field.onChange(formatCPF(e.target.value));
                      }}
                    />
                  </FormControl>
                </FloatingLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput label="Email">
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                </FloatingLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FloatingLabelInput label="Phone Number">
                  <FormControl>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      {...field}
                      onChange={(e) => {
                        field.onChange(formatPhone(e.target.value));
                      }}
                    />
                  </FormControl>
                </FloatingLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className={`${
              isFormValid
                ? "bg-primary hover:bg-primary"
                : "bg-gradient-to-r from-muted-secondary to-border-light"
            }`}
            disabled={!isFormValid}
          >
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
