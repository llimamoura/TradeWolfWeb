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
    <div className="lg:ml-16 ml-0 lg:pb-0 pb-30">
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10 text-sm border-t px-4 lg:px-90 justify-between w-full">
        <div className="flex justify-between w-full lg:w-auto lg:items-center lg:gap-3">
          <span className="text-muted-foreground sm:text-xl text-lg font-medium">
            Opening price:
          </span>
          <p className="text-muted-foreground font-bold sm:text-xl text-md">
            ${formatCurrencyUSD(openingPrice)}
          </p>
        </div>
        <Separator
          className="hidden lg:block bg-muted-foreground ml-2"
          orientation="vertical"
        />
        <div className="flex justify-between w-full lg:w-auto lg:items-center lg:gap-3">
          <span className="text-muted-foreground sm:text-xl text-lg font-medium">
            Previous closing price:
          </span>
          <p className="text-muted-foreground font-bold sm:text-xl text-md">
            ${formatCurrencyUSD(previousClosingPrice)}
          </p>
        </div>
      </div>
    </div>
  );
}
