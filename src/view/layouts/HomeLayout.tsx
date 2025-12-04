import { Link, Outlet } from "react-router-dom";
import TradeWolfLogo from "../../assets/img/LogoBG.png";
import Logo from "../../assets/img/logo.png";
import { Separator } from "@/components/ui/separator";
import { LogOut, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { topNavItems } from "./constants";
import { sideNavItems } from "./constants";
import { bottomNavItems } from "./constants";

export function HomeLayout() {
  return (
    <div className="flex flex-col lg:flex-row h-dvh max-h-dvh bg-background px-4 overflow-hidden">
      <div className="lg:hidden flex items-center justify-between px-2 py-1 bg-background text-primary-foreground">
        <img src={Logo} alt="TradeWolf Blue logo" className="size-20" />
        <nav className="flex items-center space-between">
          {topNavItems.map(({ route, label, icon: Icon }) => (
            <Link key={label} to={route}>
              <Button key={label} aria-label={label} variant="ghost">
                <Icon className="size-6 text-primary" />
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      <div className="hidden lg:flex bg-gradient-to-r from-primary to-tertiary text-primary-foreground rounded-3xl items-center flex-col m-3 xl:m-8 w-26 lg:max-h-full xl:w-28 space-y-15 py-6">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="size-14 lg:size-23 xl:size-25 mb-5"
        />

        <Separator className="border mb-10 data-[orientation=horizontal]:w-10" />

        <nav className="flex flex-col items-center space-between gap-16">
          {sideNavItems.map(({ route, label, icon: Icon }) => (
            <Link key={label} to={route}>
              <Button
                key={label}
                aria-label={label}
                variant="link"
                className="text-background"
              >
                <Icon className="lg:size-7" />
              </Button>
            </Link>
          ))}
        </nav>

        <Button
          variant="link"
          className="rounded-full text-background"
          aria-label="Add-Asset"
        >
          <CirclePlus className="lg:size-10" />
        </Button>

        <Button
          variant="link"
          className="mt-auto rounded-full text-background"
          aria-label="Logout"
        >
          <LogOut className="lg:size-7" />
        </Button>
      </div>

      <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-background text-center justify-center rounded-t-3xl text-primary-foreground border-t z-50">
        <div className="flex items-center justify-around p-3">
          {bottomNavItems.map(({ route, label, icon: Icon }) => (
            <Link key={label} to={route}>
              <Button
                key={label}
                aria-label={label}
                variant="ghost"
                className="flex flex-col space-between h-auto p-2"
              >
                <Icon className="size-7 sm:size-10 text-primary" />
              </Button>
            </Link>
          ))}
        </div>
      </nav>

      <div className="flex-1 min-h-0 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}
