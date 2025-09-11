import { PencilLine, UserRound } from "lucide-react";
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
import { ACCEPTED_IMAGE_TYPES } from "../schema";
import { formatCPF } from "@/utils/format-cpf";
import { formatPhone } from "@/utils/format-phone";
import { FloatingLabelInput } from "@/components/floating-label-input";
import { useProfileForm } from "../hooks/useProfileForm";

export function ProfileComponent() {
  const {
    form,
    fileInputRef,
    imagePreview,
    isFormValid,
    handleImageChange,
    onSubmit,
  } = useProfileForm();

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
