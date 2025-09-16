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
import { Button } from "@/components/ui/button";

export function HomeComponent() {
  return (
    <div className="p-4 lg:p-6">
      <div className="flex flex-col lg:flex-row justify-between lg:justify-between lg:items-center space-y-4 lg:space-y-0 my-0 lg:my-8">
        <div className="flex items-center space-x-3 lg:space-x-5">
          <Separator
            className="hidden lg:block ml-0 lg:ml-10 !mr-2 border-tertiary border-2 rounded-xl h-8"
            orientation="vertical"
          />
          <h1 className="hidden lg:flex text-xl lg:text-3xl text-primary font-extrabold">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-5">
          <SearchInput
            className="hidden lg:flex w-80 h-10 bg-background border-tertiary"
            placeholder="Search"
          />
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost">
              <Bell className="size-6 lg:size-7 text-primary hover:text-primary" />
            </Button>
            <Button variant="ghost">
              <CircleUser className="size-6 lg:size-7 text-primary hover:text-primary" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 place-items-stretch">
          <Card className="bg-card h-auto min-h-50 w-full">
            <CardHeader className="p-4 lg:p-6">
              <CardTitle className="font-extrabold text-xl lg:text-2xl mb-4">
                My Balance
              </CardTitle>
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-2 sm:space-y-0">
                <CardDescription className="text-3xl lg:text-4xl text-primary font-bold">
                  $25,901.41
                </CardDescription>
                <CardContent className="p-2 px-3 bg-green-500 text-background rounded-lg text-sm font-semibold">
                  +810%
                </CardContent>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-card h-auto min-h-50 w-full">
            <CardHeader className="p-4 lg:p-6">
              <CardTitle className="text-xl lg:text-2xl font-bold mb-2">
                Mock
              </CardTitle>
              <CardDescription className="text-2xl lg:text-3xl text-primary font-semibold">
                $25,901.41
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card h-auto min-h-98 w-full">
            <CardHeader className="p-4 lg:p-6">
              <CardTitle className="text-xl lg:text-2xl font-bold mb-2">
                Mock
              </CardTitle>
              <CardDescription className="text-2xl lg:text-3xl text-primary font-semibold">
                $25,901.41
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="bg-card h-auto min-h-98 w-full">
            <CardHeader className="p-4 lg:p-6">
              <CardTitle className="text-xl lg:text-2xl font-bold mb-2">
                Mock
              </CardTitle>
              <CardDescription className="text-2xl lg:text-3xl text-primary font-semibold">
                $25,901.41
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
