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
import { marketChartDates } from "@/view/layouts/constants";

interface CoinSelectorProps {
  coinsData: CoinResponse;
  selectedCoin: string;
  onSelectedCoinChange: (coin: string) => void;
  onPeriodChange: (period: string) => void;
}

export function CoinSelector({
  coinsData,
  selectedCoin,
  onSelectedCoinChange,
  onPeriodChange,
}: CoinSelectorProps) {
  const [open, setOpen] = useState(false);
  const [activePeriod, setActivePeriod] = useState("24h");

  const selectedCoinData =
    coinsData.result.find((coin: Coin) => coin.id === selectedCoin) ||
    coinsData.result[0];

  const handleCoinChange = (value: string) => {
    onSelectedCoinChange(value === selectedCoin ? "" : value);
    setOpen(false);
  };

  const handlePeriodClick = (period: string) => {
    setActivePeriod(period);
    onPeriodChange(period);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="link"
          role="button"
          aria-expanded={open}
          aria-label="Coin selector"
          className="w-25 h-8 md:w-25 md:h-8 lg:w-30 xl:w-25 xl:h-8 md:mr-4 lg:mr-4 xl:mr-0 sm:mr-0 mr-0 font-bold justify-between bg-primary text-border hover:no-underline sm:gap-3 gap-2"
        >
          <div className="flex items-center gap-2">
            <img src={selectedCoinData.icon} className="size-4 rounded-full" />
            {selectedCoinData.symbol}
          </div>
          <ChevronDown className="size-4 text-background opacity-50" />
        </Button>
      </PopoverTrigger>

      <div className="flex gap-2 sm:gap-3 ml-2 sm:ml-0">
        {marketChartDates.map(({ label, value }) => (
          <Button
            key={value}
            onClick={() => handlePeriodClick(value)}
            role="button"
            aria-label={label}
            className={cn(
              "size-6 rounded-xl font-bold text-background",
              activePeriod === value ? "bg-primary text-border" : "bg-surface-muted"
            )}
            variant="ghost"
          >
            {label}
          </Button>
        ))}
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
              {coinsData.result.map((coin: Coin) => (
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
