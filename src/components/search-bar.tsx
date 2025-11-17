import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { SearchIcon } from "lucide-react";
import { useState, useMemo } from "react";
import type { Coin, CoinResponse } from "@/entities/coin";

interface SearchBarProps {
  coinsData: CoinResponse;
  onSelectedCoinChange: (coin: string) => void;
}

export function SearchBar({ coinsData, onSelectedCoinChange }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const filteredCoins = useMemo(
    () =>
      coinsData.result.filter(
        (coin: Coin) =>
          coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [coinsData.result, searchTerm]
  );

  return (
    <div className="relative hidden lg:flex w-80 lg:w-100 xl:w-160 border-tertiary rounded-lg">
      <Command className="w-full text-primary border border-accent-light rounded-full bg-transparent">
        <CommandInput
          placeholder="Search.."
          value={searchTerm}
          onValueChange={(value) => {
            setSearchTerm(value);
            setIsDropdownOpen(!!value);
          }}
          className="placeholder:font-extrabold placeholder:text-surface-muted placeholder:p-4"
          trailing={
            <SearchIcon className="size-fit p-2 text-background bg-gradient-to-b from-primary to-tertiary rounded-4xl" />
          }
        />
        {isDropdownOpen && (
          <CommandList className="absolute top-full left-0 w-full max-h-60 mt-1 overflow-y-auto z-50 border border-border rounded-lg shadow-lg bg-search-dropdown">
            <CommandEmpty>No coins found.</CommandEmpty>
            <CommandGroup>
              {filteredCoins.map((coin: Coin) => (
                <CommandItem
                  key={coin.id}
                  value={coin.id}
                  className="flex items-center justify-between p-2 text-card"
                  onSelect={() => {
                    setSearchTerm(coin.symbol);
                    onSelectedCoinChange(coin.id);
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
  );
}
