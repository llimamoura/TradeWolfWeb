import { zodResolver } from "@hookform/resolvers/zod";
import { PencilLine, UserRound } from "lucide-react";
import type { ChangeEvent } from "react";
import { useRef, useState } from "react";
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
import { type ProfileFormData, ProfileSchema } from "../schema";
import { toast } from "sonner";
import { FormatCPF } from "@/utils/FormatCPF";
import { FormatPhone } from "@/utils/FormatPhone";
import { FloatingProfileLabelInput } from "@/components/floating-label-input";

export function ProfileComponent() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<ProfileFormData>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      image: "",
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

  const onSubmit = async (data: ProfileFormData) => {
    console.log(
      "Your Profile:",
      data.image,
      data.fullName,
      data.cpf,
      data.email,
      data.phoneNumber
    );
    toast.success("Your Profile has been created with success.");
  };

  const isFormValid = form.formState.isValid;

  return (
    <section className="w-full">
      <h1 className="flex justify-center sm:text-5xl text-3xl font-extrabold text-background leading-tight lg:mb-6 mb-10">
        Fill Your Profile
      </h1>
      <p className="hidden font-medium lg:block text-center text-sm text-background mb-8">
        Don´t worry, you can always change it later
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
                        <PencilLine className="justify-self-end self-end size-6 mr-1 border-2 border-background rounded-full p-1 text-background" />
                      </>
                    )}
                  </FormLabel>
                  <FormControl>
                    <Input
                      ref={fileInputRef}
                      id="fileUpload"
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleImageChange(e, field.onChange)}
                      className="hidden"
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FloatingProfileLabelInput label="Full Name">
                  <FormControl>
                    <Input
                      type="fullName"
                      className="border-background"
                      {...field}
                    />
                  </FormControl>
                </FloatingProfileLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FloatingProfileLabelInput label="CPF">
                  <FormControl>
                    <Input
                      type="text"
                      id="cpf"
                      inputMode="numeric"
                      className="border-background"
                      {...field}
                      onChange={(e) => {
                        field.onChange(FormatCPF(e.target.value));
                      }}
                    />
                  </FormControl>
                </FloatingProfileLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FloatingProfileLabelInput label="Email">
                  <FormControl>
                    <Input
                      type="email"
                      className="border-background"
                      {...field}
                    />
                  </FormControl>
                </FloatingProfileLabelInput>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FloatingProfileLabelInput label="Phone Number">
                  <FormControl>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      className="border-background"
                      {...field}
                      onChange={(e) => {
                        field.onChange(FormatPhone(e.target.value));
                      }}
                    />
                  </FormControl>
                </FloatingProfileLabelInput>
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
