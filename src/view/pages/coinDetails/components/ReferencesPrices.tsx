import { Separator } from "@/components/ui/separator";
import { formatCurrencyUSD } from "@/utils/format-currency";

interface ReferencePricesProps {
  openingPrice: number;
  previousClosingPrice: number;
}

export function ReferencePrices({
  openingPrice,
  previousClosingPrice,
}: ReferencePricesProps) {
  return (
    <div className="ml-16">
      <div className="flex items-center gap-10 text-sm border-t px-90 justify-between">
        <div className="flex items-center gap-5">
          <span className="text-muted-foreground text-xl font-medium">
            Opening price:
          </span>
          <p className="text-muted-foreground font-bold text-xl">
            ${formatCurrencyUSD(openingPrice)}
          </p>
        </div>
        <Separator className="bg-muted-foreground ml-2" orientation="vertical" />
        <div className="flex items-center gap-5">
          <span className="text-muted-foreground text-xl font-medium">
            Previous closing price:
          </span>
          <p className="text-muted-foreground font-bold text-xl">
            ${formatCurrencyUSD(previousClosingPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}
