import { useState, useEffect, useMemo } from "react";
import { getCoinsChart } from "@/services/charts/get-coins-charts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";
import type { CoinResponse } from "@/entities/coin";
import { useQuery } from "@tanstack/react-query";
import type { Coin } from "@/entities/coin";
import { cn } from "@/lib/utils";
import { coinDetailsPeriods } from "../constants";
import { PriceDisplay } from "./PriceDisplay";
import { ReferencePrices } from "./ReferencesPrices";
import { getYAxisTicks } from "../../../../utils/format-YAxisTicks";
import { getReferencePrices } from "../../../../services/coin-prices/getReferencePrices";
import { CoinSelectorButton } from "@/components/coin-selector-button";
import { Button } from "@/components/ui/button";

interface CoinDetailsProps {
  coinsData: CoinResponse;
}

export function CoinDetailsComponent({ coinsData }: CoinDetailsProps) {
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const [period, setPeriod] = useState("all");

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

  const chartData = useMemo(() => {
    return selectedCoinChart?.chart?.map((point: [number, number, number, number]) => {
      const [timestamp, price] = point;
      const correctedTimestamp = timestamp < 1e12 ? timestamp * 1000 : timestamp;
      const date = new Date(correctedTimestamp);
  
      let timeLabel: string;
  
      if (period === "24h") {
        timeLabel = date.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        });
      } else if (period === "1w") {
        timeLabel = date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
        });
      } else if (period === "1y") {
        timeLabel = date.toLocaleDateString("en-US", {
          month: "short",
        });
      } else if (period === "all") {
        timeLabel = date.getFullYear().toString();
      } else {
        timeLabel = date.toLocaleDateString("en-US", {
          day: "2-digit",
          month: "2-digit",
        });
      }

      return {
        time: timeLabel,
        price,
        timestamp: correctedTimestamp,
      };
    }) ?? [];
  }, [selectedCoinChart, period]);

  const filteredChartData: typeof chartData = [];
  const seen = new Set<string>();
  for (const item of chartData) {
    if (!seen.has(item.time)) {
      filteredChartData.push(item);
      seen.add(item.time);
    }
  }

  const lineChartConfig = {
    price: {
      label: "Price: ",
      color: "var(--chart-2)",
    },
  } satisfies ChartConfig;

  const lineChartHasData = !!chartData.length;

  const coin = coinsData.result.find((c: Coin) => c.id === selectedCoin);

  const currentDate = new Date().toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
  });

  const { openingPrice, previousClosingPrice } = useMemo(
    () => getReferencePrices(chartData, coin),
    [chartData, coin]
  );

  const priceInUSD = coin ? coin.price : 0;

  if (isLoading) {
    return (
      <div className="bg-background h-screen min-h-dvh flex items-center justify-center">
        <p className="text-muted-foreground">Loading market data...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-background h-screen min-h-dvh flex items-center justify-center">
        <p className="text-destructive">Error loading market data.</p>
      </div>
    );
  }

  if (!coin) {
    return (
      <div className="bg-background h-screen min-h-dvh flex items-center justify-center">
        <p className="text-muted-foreground">No currency selected.</p>
      </div>
    );
  }

  const { yAxisTicks, yAxisMin, yAxisMax } = getYAxisTicks(chartData, 6);

  return (
    <div className="bg-background h-screen min-h-dvh w-full">
      <main className="h-full w-full p-5 lg:p-8 flex flex-col">
        <div className="mb-8">
          <div className="flex justify-center sm:pb-0 pb-10">
            <CoinSelectorButton
              coinsData={coinsData}
              selectedCoin={selectedCoin}
              onSelectedCoinChange={setSelectedCoin}
            />
          </div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={coin.icon}
              alt={coin.name}
              className="size-8 rounded-full"
            />
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold text-foreground">
                  {coin.name}
                </h1>
                <span className="text-xs font-extrabold bg-primary w-fit px-2 py-1 text-center justify-center flex rounded text-background">
                  {coin.symbol}
                </span>
              </div>
            </div>
          </div>

          <PriceDisplay
            price={priceInUSD}
            priceChange={coin.priceChange1d}
            date={currentDate}
          />
        </div>

        <div className="flex-1 min-h-96 mb-6">
          {!lineChartHasData && (
            <div className="h-full flex items-center justify-center">
              <p className="text-center text-muted-foreground">
                No chart data available
              </p>
            </div>
          )}
          {lineChartHasData && (
            <ChartContainer config={lineChartConfig} className="h-full w-full">
              <AreaChart
                accessibilityLayer
                data={filteredChartData}
                margin={{ left: 20, right: 20, top: 10, bottom: 20 }}
              >
                <defs>
                  <linearGradient id="fillPrice" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="95%"
                      stopColor="var(--chart-2)"
                      stopOpacity={0.1}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  vertical={false}
                  strokeDasharray="3 3"
                  stroke="var(--border)"
                />
                <XAxis
                  dataKey="time"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={12}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                />
                <YAxis
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  domain={[yAxisMin, yAxisMax]}
                  ticks={yAxisTicks}
                  tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`}
                />
                <ReferenceLine
                  stroke="var(--border)"
                  strokeDasharray="3 3"
                  strokeWidth={1}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent />}
                />
                <Area
                  dataKey="price"
                  type="natural"
                  fill="url(#fillPrice)"
                  fillOpacity={1}
                  stroke="var(--chart-2)"
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, fill: "var(--chart-2)" }}
                />
              </AreaChart>
            </ChartContainer>
          )}
        </div>

        <div className="flex justify-center gap-x-30 mb-6">
          {coinDetailsPeriods.map(({ label, value }) => (
            <Button
              variant="link"
              key={value}
              onClick={() => setPeriod(value)}
              className={cn(
                "px-4 py-2 rounded-3xl font-bold sm:text-lg text-md transition-colors",
                period === value
                  ? "text-background bg-linear-to-b from-primary to-tertiary from-10% to-50%"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {label}
            </Button>
          ))}
        </div>

        <ReferencePrices
          openingPrice={openingPrice}
          previousClosingPrice={previousClosingPrice}
        />
      </main>
    </div>
  );
}
