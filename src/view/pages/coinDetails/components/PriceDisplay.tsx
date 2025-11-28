import { ArrowDown, ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { formatCurrencyUSD } from "@/utils/format-currency";

interface PriceDisplayProps {
  price: number;
  priceChange: number;
  date: string;
}

export function PriceDisplay({ price, priceChange, date }: PriceDisplayProps) {
  return (
    <div className="mb-4">
      <div className="flex items-baseline gap-2 mb-2">
        <span className="text-4xl lg:text-5xl font-extrabold bg-linear-to-b from-primary to-tertiary from-10% to-50% bg-clip-text text-transparent">
          ${formatCurrencyUSD(price)}
        </span>
        <span
          className={cn(
            "text-sm font-extrabold flex items-center gap-1 px-2 py-1 rounded",
            priceChange > 0 && "text-success bg-success/10",
            priceChange < 0 && "text-error bg-error/10",
            priceChange === 0 && "text-muted-foreground bg-muted/10"
          )}
        >
          {priceChange > 0 && <ArrowUp className="size-3" />}
          {priceChange < 0 && <ArrowDown className="size-3" />}
          {priceChange.toFixed(2)}%
        </span>
      </div>
      <p className="text-lg text-search-dropdown">{date}</p>
    </div>
  );
}
