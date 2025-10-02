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
      <div className="lg:hidden flex items-center justify-between px-4 py-1 bg-home-layout text-primary-foreground">
        <img
          src={TradeWolfBlueLogo}
          alt="TradeWolf Blue logo"
          className="size-20"
        />
        <nav className="flex items-center space-x-3">
          <Button variant="ghost" aria-label="Search">
            <Search className="size-6 text-primary" />
          </Button>
          <Button variant="ghost" aria-label="Notifications">
            <Bell className="size-6 text-primary" />
          </Button>
          <Button variant="ghost" aria-label="User Profile">
            <CircleUser className="size-6 text-primary" />
          </Button>
        </nav>
      </div>

      <div className="hidden lg:flex bg-gradient-to-r from-primary to-tertiary text-primary-foreground rounded-2xl items-center flex-col m-3 xl:m-5 ml-6 xl:ml-15 w-20 xl:max-w-xl lg:w-28 min-h-6 py-6 space-y-5">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="size-14 lg:size-23 xl:size-25 mb-6"
        />

        <Separator className="border mb-13" />

        <nav className="flex flex-col items-center space-y-5">
          <Button
            variant="link"
            className="rounded-full mb-6 lg:mb-16 xl:mb-16 text-background"
            aria-label="Dashboard"
          >
            <House className="size-6 lg:size-12 xl:size-10" />
          </Button>

          <Button
            variant="link"
            className="rounded-full mb-6 lg:mb-16 xl:mb-16 text-background"
            aria-label="Charts"
          >
            <ChartLine className="size-6 lg:size-12 xl:size-10" />
          </Button>

          <Button
            variant="link"
            className="rounded-full mb-6 lg:mb-16 xl:mb-16 text-background"
            aria-label="History"
          >
            <Hourglass className="size-6 lg:size-12 xl:size-10" />
          </Button>

          <Button
            variant="link"
            className="rounded-full mb-6 lg:mb-16 xl:mb-16 text-background"
            aria-label="Settings"
          >
            <Settings className="size-6 lg:size-12 xl:size-10" />
          </Button>

          <Button
            variant="link"
            className="rounded-full mb-20 lg:mb-16 xl:mb-10 text-background"
            aria-label="Add Asset"
          >
            <CirclePlus className="size-6 lg:size-15 xl:size-13 rounded-xl" />
          </Button>
        </nav>

        <Button
          variant="link"
          className="mt-auto rounded-full text-background"
          aria-label="Logout"
        >
          <LogOut className="size-6 lg:size-12 xl:size-10" />
        </Button>
      </div>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background text-center justify-center rounded-t-3xl text-primary-foreground border-t z-50">
        <div className="flex items-center justify-around p-3">
          <Button
            variant="ghost"
            className="flex flex-col space-y-1 h-auto p-2"
            aria-label="Dashboard"
          >
            <House className="size-7 sm:size-10 text-primary" />
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col space-y-1 h-auto p-2"
            aria-label="Charts"
          >
            <ChartLine className="size-7 sm:size-10 text-primary" />
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col space-y-1 h-auto p-2"
            aria-label="Add Asset"
          >
            <CirclePlus className="size-12 sm:size-15 rounded-full text-primary" />
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col space-y-1 h-auto p-2"
            aria-label="User Profile"
          >
            <CircleUser className="size-7 sm:size-10 text-primary" />
          </Button>
          <Button
            variant="ghost"
            className="flex flex-col space-y-1 h-auto p-2"
            aria-label="Settings"
          >
            <Settings className="size-7 sm:size-10 text-primary" />
          </Button>
        </div>
      </nav>

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
