import { UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfileHeader() {
  return (
    <header className="flex flex-col p-8 py-15">
      <h1 className="bg-linear-to-b from-primary to-tertiary from-50% to-80% bg-clip-text text-transparent text-4xl font-extrabold mb-10">
        Profile
      </h1>

      <div className="flex items-center gap-4 font-bold">
        <UserRound className="text-background bg-primary size-36 rounded-full" />
        <div className="flex flex-col">
          <h2 className="text-blue-muted font-bold text-4xl">Name</h2>
          <p className="text-muted-foreground">...@gmail.com</p>
        </div>
        
        <div className="ml-auto px-10">
          <Button
            variant="link"
            className="w-fit h-8 bg-surface-muted text-background font-bold rounded-3xl"
          >
            Edit
          </Button>
        </div>
      </div>
    </header>
  );
}
