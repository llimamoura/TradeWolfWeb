import { Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import countriesData from "@/data/countries-flags.json";
import { cn } from "@/lib/utils";
import { IdentityVerificationMethod } from "../schema";
import { useProofResidencyForm } from "../hooks/useProofResidencyForm";
import { useState } from "react";

export function ProofResidencyComponent() {
  const [openNationality, setOpenNationality] = useState<boolean>(false);
  const { form, onSubmit } = useProofResidencyForm();

  return (
    <section className="w-full mb-12 lg:mb-0">
      <h1 className="flex justify-center lg:mb-10 text-3xl lg:text-4xl text-center font-extrabold text-foreground leading-tight mb-5">
        Proof of Residency
      </h1>

      <p className="hidden lg:flex font-medium text-center text-sm text-muted-foreground mb-15">
        We are required to verify your identity before you can use the
        application. Your information will be encrypted and stored securely.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="relative mb-8 w-full">
            <p className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10">
              Nationality
            </p>

            <FormField
              control={form.control}
              name="nationality"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-4">
                  <Popover
                    open={openNationality}
                    onOpenChange={setOpenNationality}
                  >
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-full justify-between",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            <div className="flex items-center gap-2">
                              <img
                                src={
                                  countriesData.find(
                                    (c) =>
                                      c.code.toUpperCase() ===
                                      field.value.toUpperCase()
                                  )?.flag
                                }
                                alt="flag"
                                width="20"
                                height="15"
                              />
                              {
                                countriesData.find(
                                  (c) =>
                                    c.code.toUpperCase() ===
                                    field.value.toUpperCase()
                                )?.country
                              }{" "}
                              ({field.value})
                            </div>
                          ) : (
                            "Select a Nationality"
                          )}
                          <ChevronsUpDown className="opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full lg:w-145 p-0">
                      <Command>
                        <CommandInput
                          placeholder="Search nationality..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No nationality found.</CommandEmpty>
                          <CommandGroup>
                            {countriesData.map((country) => (
                              <CommandItem
                                key={country.code}
                                value={country.country}
                                onSelect={() => {
                                  form.setValue(
                                    "nationality",
                                    country.code.toUpperCase(),
                                    { shouldValidate: true }
                                  );
                                  setOpenNationality(false);
                                }}
                              >
                                <div className="flex items-center gap-2">
                                  <img
                                    src={country.flag}
                                    width="20"
                                    height="15"
                                    alt={`${country.country} flag`}
                                    aria-label={`${country.country} flag`}
                                  />
                                  {country.country} (
                                  {country.code.toUpperCase()})
                                </div>
                                <Check
                                  className={cn(
                                    "ml-auto",
                                    country.code.toUpperCase() === field.value
                                      ? "opacity-100"
                                      : "opacity-0"
                                  )}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div>
            <p className="flex justify-start items-start text-primary font-bold mb-2">
              Verification Method
            </p>
            <div className="p-5 bg-quartenary rounded-xl">
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
                            value={IdentityVerificationMethod.ID_CARD}
                            id="National-identity-card"
                            className="bg-highlighted"
                          />
                          <FormLabel>National identity card</FormLabel>
                        </div>

                        <Separator className="bg-highlighted border border-highlighted lg:hidden" />
                        <Separator
                          orientation="vertical"
                          className="border border-highlighted hidden lg:flex"
                        />

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={IdentityVerificationMethod.PASSPORT}
                            id="Passport"
                            className="bg-highlighted"
                          />
                          <FormLabel>Passport</FormLabel>
                        </div>

                        <Separator className="bg-highlighted border border-highlighted lg:hidden" />
                        <Separator
                          orientation="vertical"
                          className="border border-highlighted hidden lg:flex"
                        />

                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            value={IdentityVerificationMethod.DRIVER_LICENSE}
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
