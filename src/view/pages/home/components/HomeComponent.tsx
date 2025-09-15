import { Separator } from "@/components/ui/separator";
import { Bell } from "lucide-react";
import { CircleUser } from "lucide-react";
import { SearchInput } from "@/components/search-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function HomeComponent() {
  return (
    <div>
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

      <div className="max-w-200 max-h-100 mx-auto grid grid-cols-2 gap-x-65 gap-y-7 place-items-center ml-30">
        <Card className="bg-card h-55 w-110">
          <CardHeader>
            <CardTitle className="font-extrabold my-4 text-2xl">
              My Balance
            </CardTitle>
            <div className="flex items-center justify-between">
              <CardDescription className="my-5 text-4xl text-primary">
                $25,901.41
              </CardDescription>
              <CardContent className="mr-38 px-1 bg-green-500 rounded">810%</CardContent>
            </div>
          </CardHeader>
        </Card>

        <Card className="bg-card h-55 w-145">
          <CardHeader>
            <CardTitle>My Balance</CardTitle>
            <CardDescription>$ 25,901.41</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-card h-90 w-108">
          <CardHeader>
            <CardTitle>My Balance</CardTitle>
            <CardDescription>$ 25,901.41</CardDescription>
          </CardHeader>
        </Card>

        <Card className="bg-card h-90 w-140">
          <CardHeader>
            <CardTitle>My Balance</CardTitle>
            <CardDescription>$ 25,901.41</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
