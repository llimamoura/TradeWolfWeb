import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { ChevronDown, Check } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useState } from "react";
import type { Coin, CoinResponse } from "@/entities/coin";

interface CoinSelectorProps {
  coinsData: CoinResponse;
  selectedCoin: string;
  onSelectedCoinChange: (coin: string) => void;
}

export function CoinSelector({
  coinsData,
  selectedCoin,
  onSelectedCoinChange,
}: CoinSelectorProps) {
  const [open, setOpen] = useState(false);

  const handleCoinChange = (value: string) => {
    onSelectedCoinChange(value === selectedCoin ? "" : value);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="coin's history"
          aria-expanded={open}
          className="w-25 h-8 md:w-25 md:h-8 lg:w-30 xl:w-25 xl:h-8 md:mr-4 lg:mr-4 xl:mr-0 sm:mr-0 mr-0 font-bold justify-between bg-primary text-border hover:no-underline sm:gap-3 gap-2"
        >
          {selectedCoin ? (
            <div className="flex items-center gap-2">
              <img
                src={
                  coinsData.result.find(
                    (coin: Coin) => coin.id === selectedCoin
                  )?.icon
                }
                className="size-4 rounded-full"
              />
              {
                coinsData.result.find((coin: Coin) => coin.id === selectedCoin)
                  ?.symbol
              }
            </div>
          ) : (
            "Coin..."
          )}
          <ChevronDown className="size-4 text-background opacity-50" />
        </Button>
      </PopoverTrigger>

      <div className="flex gap-2 sm:gap-3 ml-2 sm:ml-0">
        <Button
          className="size-6 bg-blue-gray rounded-xl font-bold text-background"
          variant="ghost"
        >
          1D
        </Button>
        <Button
          className="size-6 bg-blue-gray rounded-xl font-bold text-background"
          variant="ghost"
        >
          5D
        </Button>
        <Button
          className="size-6 bg-blue-gray rounded-xl font-bold text-background"
          variant="ghost"
        >
          1M
        </Button>
      </div>

      <PopoverContent className="w-fit text-start">
        <Command>
          <CommandInput
            placeholder="Search coins..."
            className="placeholder:font-extrabold"
          />
          <CommandList>
            <CommandEmpty>No coin found.</CommandEmpty>
            <CommandGroup>
              {coinsData.result.slice(0, 10).map((coin: Coin) => (
                <CommandItem
                  key={coin.id}
                  value={coin.id}
                  onSelect={handleCoinChange}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4 flex items-start text-start",
                      selectedCoin === coin.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex items-start text-start space-x-2 font-extrabold text-primary">
                    <img src={coin.icon} className="size-4 rounded-full" />
                    <span>{coin.symbol}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
