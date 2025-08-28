import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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

const ProfileSchema = z.object({
  fullName: z
    .string({ message: "Fill the field with your complete name" })
    .min(1, { message: "Your full name is requiered" }),
  cpf: z
    .string({ message: "Fill the field with yout complete CPF" })
    .min(11, { message: "The CPF's must be at least 11 characters long" })
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
      "CPF must be in the format 000.000.000-00"
    ),
  email: z
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  phoneNumber: z
    .string()
    .min(11, { message: "Phone number must be at least 11 characters" })
    .regex(/^\(?[1-9]{2}\)?[\s-]?9\d{4}-?\d{4}$/, "Invalid phone number"),
});

type ProfileFormData = z.infer<typeof ProfileSchema>;

export function ProfileComponent() {
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(ProfileSchema),
    defaultValues: {
      fullName: "",
      cpf: "",
      email: "",
      phoneNumber: "",
    },
  });

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 3) return numbers;
    if (numbers.length <= 6)
      return `${numbers.slice(0, 3)}.${numbers.slice(3)}`;
    if (numbers.length <= 9)
      return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(
        6
      )}`;
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(
      6,
      9
    )}-${numbers.slice(9)}`;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  const onSubmit = async (data: ProfileFormData) => {
    console.log(
      "Your Profile:",
      data.fullName,
      data.cpf,
      data.email,
      data.phoneNumber
    );
  };

  return (
    <section className="w-full font-manrope">
      <h1 className="flex justify-center sm:text-5xl text-3xl font-extrabold text-foreground leading-tight lg:mb-6 mb-10">
        Fill Your Profile
      </h1>
      <p className="hidden font-medium lg:block text-center text-sm text-muted-foreground mb-8">
        Don´t worry, you can always change it later
      </p>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 flex flex-col lg:ml-0"
        >
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormLabel
                    htmlFor="fullName"
                    className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10"
                  >
                    Full Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      id="fullName"
                      placeholder="Jonh Doe"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormLabel
                    htmlFor="cpf"
                    className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10"
                  >
                    CPF
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      id="cpf"
                      inputMode="numeric"
                      placeholder="000.000.000-00"
                      {...field}
                      onChange={(e) => {
                        field.onChange(formatCPF(e.target.value));
                      }}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormLabel
                    htmlFor="email"
                    className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10"
                  >
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      id="email"
                      placeholder="@domain.com"
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <div className="relative">
                  <FormLabel
                    htmlFor="phoneNumber"
                    className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10"
                  >
                    Phone Number
                  </FormLabel>
                  <FormControl>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="(00) 90000-0000"
                      {...field}
                      onChange={(e) => {
                        field.onChange(formatPhone(e.target.value));
                      }}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={form.formState.isSubmitting}>
            Submit
          </Button>
        </form>
      </Form>
    </section>
  );
}
