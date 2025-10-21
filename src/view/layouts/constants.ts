import {
  House,
  ChartLine,
  CirclePlus,
  Search,
  Bell,
  CircleUser,
  Settings,
  Hourglass,
} from "lucide-react";

export const topNavItems = [
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

export const sideNavItems = [
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

export const bottomNavItems = [
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
