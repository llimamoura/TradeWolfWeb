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
import { getCoinsChart } from "@/services/charts/get-coins-charts";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

interface MarketSummaryCardProps {
  coinsData: CoinResponse;
}

export function MarketSummaryCard({ coinsData }: MarketSummaryCardProps) {
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

  if (isLoading) {
    return (
      <Card className="bg-card h-auto min-h-96 shadow-lg flex items-center justify-center">
        <p className="text-muted-foreground">Loading market data...</p>
      </Card>
    );
  }

  if (isError) {
    return (
      <Card className="bg-card h-auto min-h-96 shadow-lg flex items-center justify-center">
        <p className="text-destructive">Error loading market data.</p>
      </Card>
    );
  }

  return (
    <Card className="bg-card h-auto min-h-96 xl:min-h-119 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl lg:text-2xl font-extrabold text-primary">
            Market summary
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
              <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
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
    </Card>
  );
}
