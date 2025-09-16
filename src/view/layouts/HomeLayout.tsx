import { Outlet } from "react-router-dom";
import TradeWolfLogo from "../../assets/img/LogoBG.png";
import TradeWolfBlueLogo from "../../assets/img/TradeWolfBlueLogo.jpg";
import { Separator } from "@/components/ui/separator";
import { House } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Crown } from "lucide-react";
import { Wallet } from "lucide-react";
import { Plus } from "lucide-react";
import { LogOut } from "lucide-react";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";
import { CircleUser } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-background">
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

      <div className="hidden lg:flex bg-gradient-to-b from-primary to-tertiary text-primary-foreground rounded-2xl items-center flex-col m-3 ml-6 w-20 lg:w-24 min-h-6 py-6">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="size-14 lg:size-16 mb-6"
        />

        <Separator className="!w-12 border mb-6" />

        <Button variant="ghost" className="rounded-full mb-6">
          <House className="size-6 lg:size-8" />
        </Button>

        <Button variant="ghost" className="rounded-full mb-6">
          <ChartLine className="size-6 lg:size-8" />
        </Button>

        <Button variant="ghost" className="rounded-full mb-6">
          <Crown className="size-6 lg:size-8" />
        </Button>

        <Button variant="ghost" className="rounded-full mb-6">
          <Wallet className="size-6 lg:size-8" />
        </Button>

        <Button variant="ghost" className="rounded-full mb-20">
          <Plus className="size-6 lg:size-8 bg-[#416ca5c0] rounded-xl" />
        </Button>

        <Button variant="ghost" className="mt-auto rounded-full">
          <LogOut className="size-6 lg:size-8" />
        </Button>
      </div>

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>

      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-primary text-primary-foreground border-t">
        <div className="flex items-center justify-around p-5">
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <House className="size-5" />
          </Button>
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <ChartLine className="size-5" />
          </Button>
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <Crown className="size-5" />
          </Button>
          <Button variant="ghost" className="flex-col space-y-1 h-auto p-2">
            <Wallet className="size-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
