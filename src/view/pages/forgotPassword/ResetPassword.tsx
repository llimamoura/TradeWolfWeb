import { Toaster } from "@/components/ui/sonner";
import { ResetPasswordComponent } from "./components/ResetPasswordComponent";

export function ResetPasswordPage() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <ResetPasswordComponent />
    </>
  );
}
