import { Outlet } from "react-router-dom";
import TradeWolfLogo from "../../assets/img/LogoBG.png";
import TradeWolfBlueLogo from "../../assets/img/TradeWolfBlueLogo.jpg";
import { Separator } from "@/components/ui/separator";
import { House, ChartLine, CirclePlus, LogOut, Search, Bell, CircleUser, Settings, Hourglass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-home-layout">
      <div className="lg:hidden flex items-center justify-between px-4 py-2 bg-background text-primary-foreground">
        <img
          src={TradeWolfBlueLogo}
          alt="TradeWolf Blue logo"
          className="size-20"
        />
        <div className="flex items-center space-x-3">
          <Button variant="ghost">
            <Search className="size-6 text-primary" />
          </Button>
          <Button variant="ghost">
            <Bell className="size-6 text-primary" />
          </Button>
          <Button variant="ghost">
            <CircleUser className="size-6 text-primary" />
          </Button>
        </div>
      </div>

      <div className="hidden lg:flex bg-gradient-to-b from-primary to-tertiary text-primary-foreground rounded-2xl items-center flex-col m-3 xl:m-5 ml-6 xl:ml-15 w-20 xl:max-w-xl lg:w-28 min-h-6 py-6">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="size-14 lg:size-16 xl:size-25 mb-6"
        />

        <Separator className="border mb-10" />

        <Button variant="ghost" className="rounded-full mb-6 xl:mb-15">
          <House className="size-6 lg:size-8 xl:size-10" />
        </Button>

        <Button variant="ghost" className="rounded-full mb-6 xl:mb-15">
          <ChartLine className="size-6 lg:size-8 xl:size-10" />
        </Button>

        <Button variant="ghost" className="rounded-full mb-6 xl:mb-15">
          <Hourglass className="size-6 lg:size-8 xl:size-10" />
        </Button>

        <Button variant="ghost" className="rounded-full mb-6 xl:mb-15">
          <Settings className="size-6 lg:size-8 xl:size-10" />
        </Button>

        <Button variant="ghost" className="rounded-full mb-20 xl:mb-15">
          <CirclePlus className="size-6 lg:size-8 xl:size-10 rounded-xl" />
        </Button>

        <Button variant="ghost" className="mt-auto rounded-full">
          <LogOut className="size-6 lg:size-8 xl:size-10" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background text-center justify-center rounded-t-3xl text-primary-foreground border-t">
        <div className="flex items-center justify-around p-3">
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <House className="size-7 sm:size-10 text-primary" />
          </Button>
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <ChartLine className="size-7 sm:size-10 text-primary" />
          </Button>
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <CirclePlus className="size-12 sm:size-15 rounded-full text-primary" />
          </Button>
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <CircleUser className="size-7 sm:size-10 text-primary" />
          </Button>
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <Settings className="size-7 sm:size-10 text-primary" />
          </Button>
        </div>
      </div>
    </div>
  );
}
