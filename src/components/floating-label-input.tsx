import { FormLabel } from "@/components/ui/form";
import type { ReactNode } from "react";

interface FloatingLabelInputProps {
  label: string;
  children: ReactNode;
}

export const FloatingLabelInput = ({
  label,
  children,
}: FloatingLabelInputProps) => {
  return (
    <div className="relative">
      <FormLabel className="absolute -top-3 left-3 bg-background px-2 text-primary text-sm font-medium z-10">
        {label}
      </FormLabel>
      {children}
    </div>
  );
};

export const FloatingProfileLabelInput = ({
  label,
  children,
}: FloatingLabelInputProps) => {
  return (
    <div className="relative">
      <FormLabel className="absolute -top-3 left-3 bg-primary-light rounded-full px-2 text-background text-sm font-medium z-10">
        {label}
      </FormLabel>
      {children}
    </div>
  );
};
