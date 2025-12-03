import { UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProfileHeader() {
  return (
    <header className="flex flex-col sm:p-8 p-4 lg:py-15 py-10">
      <h1 className="bg-linear-to-b from-primary to-tertiary from-50% to-80% bg-clip-text text-transparent text-4xl font-extrabold sm:mb-10 mb-5">
        Profile
      </h1>

      <div className="flex items-center gap-4 font-bold">
        <UserRound className="text-background bg-primary size-20 lg:size-36 rounded-full" />
        <div className="flex flex-col">
          <h2 className="text-blue-muted font-bold text-2xl sm:text-4xl">Name</h2>
          <p className="text-muted-foreground text-sm sm:text-base">...@gmail.com</p>
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
    </header>
  );
}
