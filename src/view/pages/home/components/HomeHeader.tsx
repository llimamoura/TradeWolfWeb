import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Bell, CircleUser } from "lucide-react";
import { getCoins } from "@/services/currencies/list-currencies";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export function HomeHeader() {
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function useCoins() {
    return useQuery({
      queryKey: ["coins"],
      queryFn: getCoins,
    });
  }
  const { data: coinsData } = useCoins();

  const filteredCoins = coinsData.result.filter(
    (coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <header className="flex flex-col lg:flex-row justify-between lg:items-center space-y-4 lg:space-y-0 my-0 lg:my-8">
      <div className="flex items-center space-x-3 lg:space-x-5">
        <Separator
          className="hidden lg:block mr-2 border-tertiary border-2 rounded-xl"
          orientation="vertical"
        />
        <h1 className="hidden lg:flex text-xl lg:text-3xl text-primary font-extrabold">
          Dashboard
        </h1>
      </div>

      <div className="flex items-center space-x-3 lg:space-x-5">
        <div className="relative hidden lg:flex w-80 lg:w-100 xl:w-120 bg-background border-tertiary rounded-lg">
          <Command className="w-full text-primary border border-primary rounded-xl">
            <CommandInput
              placeholder="Search coins..."
              value={searchTerm}
              onValueChange={(value) => {
                setSearchTerm(value);
                setIsDropdownOpen(!!value);
              }}
              className="placeholder:text-extrabold"
            />
            {isDropdownOpen && (
              <CommandList className="absolute top-full left-0 w-full max-h-40 mt-1 overflow-y-auto z-50 bg-card border border-border rounded-lg shadow-lg">
                <CommandEmpty>No coins found.</CommandEmpty>
                <CommandGroup>
                  {filteredCoins.slice().map((coin: any) => (
                    <CommandItem
                      key={coin.id}
                      value={coin.id}
                      className="flex items-center justify-between p-2"
                      onSelect={() => {
                        setSearchTerm(`${coin.symbol}`);
                        setSelectedCoin(coin.id);
                        setIsDropdownOpen(false);
                      }}
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={coin.icon}
                          alt={coin.name}
                          className="size-5 rounded-full"
                        />
                        <span className="font-bold text-sm">
                          {coin.name} ({coin.symbol})
                        </span>
                      </div>
                      <span className="font-bold text-sm">
                        ${coin.price?.toFixed(2)}
                      </span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            )}
          </Command>
        </div>

        <div className="hidden lg:flex items-center space-x-3">
          <Button variant="ghost" aria-label="Notifications">
            <Bell className="size-6 lg:size-7 text-primary" />
          </Button>
          <Button variant="ghost" aria-label="User Profile">
            <CircleUser className="size-6 lg:size-7 text-primary" />
          </Button>
        </div>
      </div>
    </header>
  );
}
