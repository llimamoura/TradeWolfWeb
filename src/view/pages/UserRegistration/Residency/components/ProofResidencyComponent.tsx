import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import countriesData from "@/data/countries-flags.json";

const proofResidencySchema = z.object({
  nationality: z.string().min(1, "Please select a nationality"),
  verificationMethod: z.enum([
    "National-identity-card",
    "Passport",
    "Driver-license",
  ]),
});

type ProofResidencyForm = z.infer<typeof proofResidencySchema>;

export function ProofResidencyComponent() {
  const navigate = useNavigate();

  const form = useForm<ProofResidencyForm>({
    resolver: zodResolver(proofResidencySchema),
    defaultValues: {
      nationality: "",
      verificationMethod: "National-identity-card",
    },
  });

  const onSubmit = (data: ProofResidencyForm) => {
    console.log("Form data:", data);
    navigate("/create-user/identify");
  };

  return (
    <section className="w-full font-manrope mb-12 lg:mb-0 lg:justify-center">
      <h1 className="flex justify-center lg:mb-10 text-3xl lg:text-4xl lg:text-center text-center font-extrabold text-foreground leading-tight mb-5">
        Proof of Residency
      </h1>

      <p className="hidden lg:flex font-medium lg:text-center text-center text-sm text-muted-foreground mb-15">
        We are required to verify your identity before you can use the
        application. Your information will be encrypted and stored securely.
      </p>

      <p></p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative mb-8 w-full">
            <p className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10">
              Nacionality
            </p>

            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full font-manrope">
                        <SelectValue placeholder="Select a Nacionality" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Nationality</SelectLabel>
                          {countriesData.map((country) => (
                            <SelectItem
                              key={country.code}
                              value={country.code.toUpperCase()}
                            >
                              <div className="flex items-center gap-2">
                                <img
                                  src={country.flag}
                                  width="20"
                                  height="15"
                                  alt={`${country.country} flag`}
                                  aria-label={`${country.country} flag`}
                                />
                                {country.country} ({country.code.toUpperCase()})
                              </div>
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <p className="flex justify-start items-start text-primary font-manrope font-bold mb-2">
              Verification Method
            </p>
            <div className="p-5 bg-quartenary rounded-xl font-manrope">
              <FormField
                control={form.control}
                name="verificationMethod"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col lg:flex-row items-start justify-start lg:justify-center lg:items-center space-y-3 lg:space-y-0 lg:space-x-3"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="National-identity-card"
                            id="National-identity-card"
                            className="bg-highlighted"
                          />
                          <FormLabel>National identity card</FormLabel>
                        </div>

                        <Separator className="bg-highlighted border border-highlighted lg:hidden" />
                        <Separator
                          orientation="vertical"
                          className="!h-6 border border-highlighted hidden lg:flex"
                        />

                        <div className="flex items-center space-x-2 ">
                          <RadioGroupItem
                            value="Passport"
                            id="Passport"
                            className="bg-highlighted"
                          />
                          <FormLabel>Passport</FormLabel>
                        </div>

                        <Separator className="bg-highlighted border border-highlighted lg:hidden" />
                        <Separator
                          orientation="vertical"
                          className="!h-6 border border-highlighted hidden lg:flex"
                        />

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value="Driver-license"
                            id="Driver-license"
                            className="bg-highlighted"
                          />
                          <FormLabel>Driver license</FormLabel>
                        </div>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <Button type="submit">Continue</Button>
        </form>
      </Form>
    </section>
  );
}
