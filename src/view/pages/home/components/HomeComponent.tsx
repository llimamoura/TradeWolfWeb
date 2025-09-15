import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";
import { CircleUser } from "lucide-react";
import { SearchInput } from "@/components/search-input";

export function HomeComponent() {
  return (
    <div className="flex justify-center items-center space-x-5 my-8">
      <Separator
        className="ml-10 !mr-2 border-tertiary border-2 rounded-xl"
        orientation="vertical"
      />
      <h1 className="text-3xl text-primary font-extrabold">Dashboard</h1>
      <SearchInput
        className="ml-100 w-100 h-fit bg-background border-tertiary"
        placeholder="Search"
      />
      <Bell className="mx-5 size-7 text-primary" />
      <CircleUser className="mx-5 size-7 text-primary" />
    </div>
  );
}
