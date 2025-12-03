import { Button } from "@/components/ui/button";

export function ContactInfo() {
  return (
    <main className="flex flex-col sm:px-8 px-4">
      <h1 className="font-bold bg-linear-to-b from-primary to-tertiary from-50% to-80% bg-clip-text text-transparent text-3xl">
        Contact Info
      </h1>

      <div className="flex items-center gap-4 py-5">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-blue-muted font-bold text-2xl">Name</h2>
          <p className="text-muted-foreground font-bold">Name</p>
        </div>

        <div className="ml-auto xl:px-10 px-0">
          <Button
            variant="link"
            className="w-fit h-8 bg-surface-muted text-background font-bold rounded-3xl"
          >
            Edit
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 py-10">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-blue-muted font-bold text-2xl ">Email</h2>
          <p className="text-muted-foreground font-bold">...@gmail.com</p>
        </div>

        <div className="ml-auto xl:px-10 px-0">
          <Button
            variant="link"
            className="w-fit h-8 bg-surface-muted text-background font-bold rounded-3xl"
          >
            Edit
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 py-10">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-blue-muted font-bold text-2xl">CPF</h2>
          <p className="text-muted-foreground font-bold">000.000.000-00</p>
        </div>

        <div className="ml-auto xl:px-10 px-0">
          <Button
            variant="link"
            className="w-fit h-8 bg-surface-muted text-background font-bold rounded-3xl"
          >
            Edit
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4 py-10">
        <div className="flex flex-col gap-y-1">
          <h2 className="text-blue-muted font-bold text-2xl">Phone Number</h2>
          <p className="text-muted-foreground font-bold">+0 000 000 0000</p>
        </div>

        <div className="ml-auto xl:px-10 px-0">
          <Button
            variant="link"
            className="w-fit h-8 bg-surface-muted text-background font-bold rounded-3xl"
          >
            Edit
          </Button>
        </div>
      </div>
    </main>
  );
}
