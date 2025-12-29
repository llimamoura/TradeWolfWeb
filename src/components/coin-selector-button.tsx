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

interface CoinSelectorButtonProps {
  coinsData: CoinResponse;
  selectedCoin: string;
  onSelectedCoinChange: (coin: string) => void;
}

export function CoinSelectorButton({
  coinsData,
  selectedCoin,
  onSelectedCoinChange,
}: CoinSelectorButtonProps) {
  const [open, setOpen] = useState(false);

  const selectedCoinData =
    coinsData.result.find((coin: Coin) => coin.id === selectedCoin) ||
    coinsData.result[0];

  const handleCoinChange = (value: string) => {
    if (value !== selectedCoin) {
      onSelectedCoinChange(value);
    }
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="button"
          aria-expanded={open}
          aria-label="Coin selector"
          className="flex justify-between items-center sm:w-70 w-40 h-10 gap-2 px-4 py-2 text-background font-extrabold bg-linear-to-r from-primary to-tertiary from-20% to-50% rounded-2xl"
        >
          <div className="flex items-center gap-2">
            <img
              src={selectedCoinData.icon}
              alt={selectedCoinData.name}
              className="size-4 rounded-full"
            />
            {selectedCoinData.name}
          </div>
          <ChevronDown className="size-4" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="sm:w-70 w-45 text-start">
        <Command>
          <CommandInput placeholder="Search coins..." />
          <CommandList>
            <CommandEmpty>No coin found.</CommandEmpty>
            <CommandGroup>
              {coinsData.result.map((coin: Coin) => (
                <CommandItem
                  key={coin.id}
                  value={coin.id}
                  onSelect={handleCoinChange}
                >
                  <Check
                    className={cn(
                      "mr-2 size-4",
                      selectedCoin === coin.id ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex items-center gap-2 font-extrabold">
                    <img
                      src={coin.icon}
                      alt={`${coin.name} icon`}
                      className="size-4 rounded-full"
                    />
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
