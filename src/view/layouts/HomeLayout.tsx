import { Outlet } from "react-router-dom";
import TradeWolfLogo from "../../assets/img/LogoBG.png";
import TradeWolfBlueLogo from "../../assets/img/TradeWolfBlueLogo.png";
import { Separator } from "@/components/ui/separator";
import {
  House,
  ChartLine,
  CirclePlus,
  LogOut,
  Search,
  Bell,
  CircleUser,
  Settings,
  Hourglass,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-home-layout">
      <div className="lg:hidden flex items-center justify-between px-4 py-2 bg-home-layout text-primary-foreground">
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

      <div className="hidden lg:flex bg-gradient-to-r from-primary to-tertiary text-primary-foreground rounded-2xl items-center flex-col m-3 xl:m-5 ml-6 xl:ml-15 w-20 xl:max-w-xl lg:w-28 min-h-6 py-6 space-y-5">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="size-14 lg:size-16 xl:size-25 mb-6"
        />

        <Separator className="border mb-13" />

        <Button
          variant="link"
          className="rounded-full mb-6 xl:mb-16 text-background"
        >
          <House className="size-6 lg:size-8 xl:size-10" />
        </Button>

        <Button
          variant="link"
          className="rounded-full mb-6 xl:mb-16 text-background"
        >
          <ChartLine className="size-6 lg:size-8 xl:size-10" />
        </Button>

        <Button
          variant="link"
          className="rounded-full mb-6 xl:mb-16 text-background"
        >
          <Hourglass className="size-6 lg:size-8 xl:size-10" />
        </Button>

        <Button
          variant="link"
          className="rounded-full mb-6 xl:mb-16 text-background"
        >
          <Settings className="size-6 lg:size-8 xl:size-10" />
        </Button>

        <Button
          variant="link"
          className="rounded-full mb-20 xl:mb-10 text-background"
        >
          <CirclePlus className="size-6 lg:size-8 xl:size-13 rounded-xl" />
        </Button>

        <Button variant="link" className="mt-auto rounded-full text-background">
          <LogOut className="size-6 lg:size-8 xl:size-10" />
        </Button>
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

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
