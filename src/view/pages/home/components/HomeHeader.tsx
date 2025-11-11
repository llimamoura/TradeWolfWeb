import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Bell, CircleUser } from "lucide-react";
import type { CoinResponse } from "@/entities/coin";
import { SearchBar } from "@/components/search-bar";

interface HomeHeaderProps {
  coinsData: CoinResponse;
  selectedCoin: string;
  onSelectedCoinChange: (coin: string) => any;
}

export function HomeHeader({
  coinsData,
  onSelectedCoinChange,
}: HomeHeaderProps) {
  return (
    <header className="flex flex-col lg:flex-row justify-between lg:items-center my-0 lg:my-4 xl:my-8">
      <div className="flex items-center space-x-3 lg:space-x-5">
        <Separator
          className="hidden lg:block mr-2 border-tertiary border-3 rounded-xl"
          orientation="vertical"
        />
        <h1 className="hidden lg:flex text-xl lg:text-3xl text-primary font-extrabold">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center space-x-3 lg:space-x-5">
        <SearchBar
          coinsData={coinsData}
          onSelectedCoinChange={onSelectedCoinChange}
        />
        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" aria-label="Notifications" role="button">
            <Bell className="size-6 lg:size-7 text-primary" />
          </Button>
          <Button variant="ghost" aria-label="User Profile" role="button">
            <CircleUser className="size-6 lg:size-7 text-primary" />
          </Button>
        </div>
      </div>
    </header>
  );
}
