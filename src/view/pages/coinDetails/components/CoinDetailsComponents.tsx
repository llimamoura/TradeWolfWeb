import { useState, useEffect } from "react";
import { getCoinsChart } from "@/services/charts/get-coins-charts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import type { CoinResponse } from "@/entities/coin";
import { CoinSelector } from "@/components/coin-selector.tsx";
import { useQuery } from "@tanstack/react-query";
import type { Coin } from "@/entities/coin";
import { cn } from "@/lib/utils";

interface CoinDetailsProps {
  coinsData: CoinResponse;
}

export function CoinDetailsComponent({ coinsData }: CoinDetailsProps) {
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const [period, setPeriod] = useState("24h");

  useEffect(() => {
    if (coinsData?.result && coinsData.result.length > 0 && !selectedCoin) {
      setSelectedCoin(coinsData.result[0].id);
    }
  }, [coinsData, selectedCoin]);

  const {
    data: marketChartData = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["marketChart", selectedCoin, period],
    queryFn: () =>
      selectedCoin
        ? getCoinsChart({ coinsIds: [selectedCoin], period })
        : getCoinsChart({ period }),
  });

  const selectedCoinChart = marketChartData[0];

  const lineChartData =
    selectedCoinChart?.chart?.map((point: [number, number, number, number]) => {
      const [timestamp, price] = point;

      const correctedTimestamp =
        timestamp < 1e12 ? timestamp * 1000 : timestamp;
      const date = new Date(correctedTimestamp);

      let timeLabel: string;
      if (period === "24h" || period === "5d") {
        timeLabel = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
      } else {
        timeLabel = date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
        });
      }

      return {
        time: timeLabel,
        price,
      };
    }) ?? [];

  const lineChartConfig = {
    price: {
      label: "Price: ",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  const lineChartHasData = !!lineChartData.length;
  
  const coin = coinsData.result.find((c: Coin) => c.id === selectedCoin);

  if (isLoading) {
    return (
      <Card className="bg-home-layout h-auto min-h-96 shadow-lg flex items-center justify-center">
        <p className="text-muted-foreground">Loading market data...</p>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="bg-home-layout h-auto min-h-96 shadow-lg flex items-center justify-center">
        <p className="text-destructive">Error loading market data.</p>
      </Card>
    );
  }

  return (
    <div>
      <main className="bg-home-layout h-screen min-h-dvh shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <CardTitle className="text-xl lg:text-2xl font-extrabold text-primary">
            {coin && (
            <div
              key={coin.id}
              className="flex justify-around items-stretch px-10 bg-background"
            >
              <div className="flex justify-between items-center space-x-3">
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
              <div className="text-right px-4">
                <p className="font-bold text-sm text-blue-muted">
                  ${coin.price?.toFixed(2)}
                </p>
                <p
                  className={cn(
                    "text-xs font-bold",
                    coin.priceChange1d > 0 && "text-success",
                    coin.priceChange1d < 0 && "text-error",
                    coin.priceChange1d === 0 && "text-surface-muted"
                  )}
                >
                  {coin.priceChange1d === undefined
                    ? "No data"
                    : `${
                        coin.priceChange1d > 0 ? "+" : ""
                      }${coin.priceChange1d.toFixed(2)}%`}
                </p>
              </div>
            </div>
          )}
            </CardTitle>
            <CoinSelector
              coinsData={coinsData}
              selectedCoin={selectedCoin}
              onSelectedCoinChange={setSelectedCoin}
              onPeriodChange={setPeriod}
              period={period}
            />
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-1">
          {!lineChartHasData && (
            <p className="text-center text-muted-foreground">
              No chart data available
            </p>
          )}
          {lineChartHasData && (
            <ChartContainer
              config={lineChartConfig}
              className="h-full w-full px-3"
            >
              <AreaChart
                accessibilityLayer
                data={lineChartData}
                margin={{ left: 0, right: 3, top: 0, bottom: 10 }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  label={{
                    angle: -90,
                    position: "insideLeft",
                  }}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <defs>
                  <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.8}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <Area
                  dataKey="price"
                  type="natural"
                  fill="url(#fillPrice)"
                  fillOpacity={1}
                  stroke="var(--chart-2)"
                  stackId="a"
                />
              </AreaChart>
            </ChartContainer>
          )}
        </CardContent>
      </main>
    </div>
  );
}
