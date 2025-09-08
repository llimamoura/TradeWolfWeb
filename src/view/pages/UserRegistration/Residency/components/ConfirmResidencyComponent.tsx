import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function ConfirmResidencyComponent() {
  const navigate = useNavigate();

  const onSubmit = () => {
    navigate("/create-user/proof-residency");
  };

  return (
    <section className="w-full mb-12 lg:mb-0">
      <h1 className="flex justify-center lg:mb-10 text-3xl lg:text-4xl lg:text-center text-start font-extrabold text-foreground leading-tight mb-5">
        Let´s Verify Your Identity
      </h1>
      <p className="font-medium lg:text-center text-start text-sm text-muted-foreground mb-16 lg:mb-30">
        We are required to verify your identity before you can use the
        application. Your information will be encrypted and stored securely.
      </p>

      <Button type="submit" onClick={onSubmit}>
        Verify identity
      </Button>
    </section>
  );
}
