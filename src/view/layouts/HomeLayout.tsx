import { Outlet } from "react-router-dom";
import TradeWolfLogo from "../../assets/img/LogoBG.png";
import Logo from "../../assets/img/logo.png";
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

const topNavItems = [
  {
    route: "/search",
    label: "Search",
    icon: Search,
  },
  {
    route: "/notifications",
    label: "Notifications",
    icon: Bell,
  },
  {
    route: "/user-profile",
    label: "User Profile",
    icon: CircleUser,
  },
];

const sideNavItems = [
  {
    route: "/home",
    label: "Home",
    icon: House,
  },
  {
    route: "/charts",
    label: "Charts",
    icon: ChartLine,
  },
  {
    route: "/historical",
    label: "Historical",
    icon: Hourglass,
  },
  {
    route: "/settings",
    label: "Settings",
    icon: Settings,
  },
  {
    route: "/add-assets",
    label: "Add Assets",
    icon: CirclePlus,
  },
];

const bottomNavItems = [
  {
    route: "/home",
    label: "Home",
    icon: House,
  },
  {
    route: "/charts",
    label: "Charts",
    icon: ChartLine,
  },
  {
    route: "/add-assets",
    label: "Add Assets",
    icon: CirclePlus,
  },
  {
    route: "/user-profile",
    label: "User Profile",
    icon: CircleUser,
  },
  {
    route: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export function HomeLayout() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-home-layout">
      <div className="lg:hidden flex items-center justify-between px-4 py-1 bg-home-layout text-primary-foreground">
        <img src={Logo} alt="TradeWolf Blue logo" className="size-20" />
        <nav className="flex items-center space-between">
          {topNavItems.map(({ label, icon: Icon }) => (
            <Button key={label} aria-label={label} variant="ghost">
              <Icon className="size-6 text-primary" />
            </Button>
          ))}
        </nav>
      </div>

      <div className="hidden lg:flex bg-gradient-to-r from-primary to-tertiary text-primary-foreground rounded-2xl items-center flex-col m-3 xl:m-5 ml-6 xl:ml-15 w-20 xl:max-w-xl lg:w-28 min-h-6 py-6 space-y-5">
        <img
          src={TradeWolfLogo}
          alt="TradeWolf logo"
          aria-label="TradeWolf logo"
          className="size-14 lg:size-23 xl:size-25 mb-6"
        />

        <Separator className="border mb-13 data-[orientation=horizontal]:w-15" />

        <nav className="flex flex-col items-center space-between gap-10">
          {sideNavItems.map(({ label, icon: Icon }) => (
            <Button
              key={label}
              aria-label={label}
              variant="link"
              className="text-background"
            >
              <Icon className="size-6 lg:size-12 xl:size-10" />
            </Button>
          ))}
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
          {bottomNavItems.map(({ label, icon: Icon }) => (
            <Button
              key={label}
              aria-label={label}
              variant="ghost"
              className="flex flex-col space-between h-auto p-2"
            >
              <Icon className="size-7 sm:size-10 text-primary" />
            </Button>
          ))}
        </div>
      </nav>

      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}
