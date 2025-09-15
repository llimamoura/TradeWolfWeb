import { Outlet } from "react-router-dom";
import TradeWolfLogo from "../../assets/img/LogoBG.png";
import { Separator } from "@/components/ui/separator";
import { House } from "lucide-react";
import { ChartLine } from "lucide-react";
import { Crown } from "lucide-react";
import { Wallet } from "lucide-react";
import { Plus } from "lucide-react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell } from "lucide-react";

export function HomeLayout() {
  return (
    <div className="flex h-185 mt-5 overflow-hidden">
      <div className="hidden lg:flex bg-primary space-y-9 bg-gradient-to-r from-primary to-tertiary text-primary-foreground rounded-2xl items-center flex-col ml-12 w-25">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="size-20 mt-3"
        />
        <Separator className="!w-12 border" />

        <Button variant="ghost" className="rounded-full">
          <House className="size-8" />
        </Button>

        <Button variant="ghost" className="rounded-full">
          <ChartLine className="size-8" />
        </Button>

        <Button variant="ghost" className="rounded-full">
          <Crown className="size-8" />
        </Button>

        <Button variant="ghost" className="rounded-full">
          <Wallet className="size-8" />
        </Button>

        <Button variant="ghost" className="rounded-full">
          <Plus className="size-8 bg-[#416ca5c0] rounded-xl" />
        </Button>

        <Button variant="ghost" className="mt-20 rounded-full">
          <LogOut className="size-8" />
        </Button>
      </div>
      <div className="">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
