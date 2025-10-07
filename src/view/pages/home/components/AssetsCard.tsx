import { Card, CardHeader, CardTitle } from "@/components/ui/card";

interface CoinsDataProps {
  coinsData: any;
  isLoading: boolean;
  isError: boolean;
}

export function AssetsCard({ coinsData }: CoinsDataProps) {
  return (
    <Card className="bg-card w-full h-auto min-h-50 lg:min-h-85 xl:min-h-50 shadow-lg">
      <CardHeader>
        <CardTitle className="font-extrabold text-primary text-xl lg:text-2xl mb-4">
          Your Assets
        </CardTitle>
        <div className="max-h-60 xl:max-h-30 space-y-3 overflow-y-auto">
          {coinsData.result.slice(0, 10).map((coin: any) => (
            <div
              key={coin.id}
              className="flex justify-between items-center py-2 bg-background"
            >
              <div className="flex items-center space-x-3">
                <img
                  src={coin.icon}
                  alt={coin.name}
                  className="size-6 rounded-full"
                />
                <div>
                  <p className="font-bold text-sm text-blue-muted">
                    {coin.name}
                  </p>
                  <p className="text-xs font-extrabold w-fit bg-quartenary rounded-md p-1 text-primary">
                    {coin.symbol}
                  </p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-blue-muted">
                  ${coin.price?.toFixed(2)}
                </p>
                <p
                  className={`text-xs font-bold ${
                    coin.priceChange1d >= 0 ? "text-success" : "text-error"
                  }`}
                >
                  {coin.priceChange1d >= 0 ? "+" : ""}
                  {coin.priceChange1d?.toFixed(2)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardHeader>
    </Card>
  );
}
