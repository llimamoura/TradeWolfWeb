import { getCoinsChart } from "@/services/charts/get-coins-charts";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";
import { getCoins } from "@/services/currencies/list-currencies";
import { cn } from "@/lib/utils";

export function MarketSummaryCard() {
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const [open, setOpen] = useState(false);

  function useCoinsChart(params?: { period?: string; coinsIds?: string[] }) {
    return useQuery({
      queryKey: ["coinschart", params],
      queryFn: () => getCoinsChart(params),
    });
  }

  function useCoins() {
    return useQuery({
      queryKey: ["coins"],
      queryFn: getCoins,
    });
  }
  const { data: coinsData } = useCoins();

  const {
    data: marketChartData,
    isLoading: isMarketChartLoading,
    isError: isMarketChartError,
  } = useCoinsChart({ coinsIds: selectedCoin ? [selectedCoin] : undefined });

  const selectedCoinChart =
    (marketChartData || [])?.find((c: any) => c.coinId === selectedCoin) ||
    (marketChartData || [])[0];

  const lineChartData =
    selectedCoinChart?.chart?.map((point: [number, number]) => {
      const [timestamp, price] = point;
      return {
        time: new Date(timestamp).toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        }),
        price,
      };
    }) ?? [];

  const linechartConfig = {
    price: {
      label: "Price: ",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;
  return (
    <Card className="bg-card h-auto min-h-96 xl:min-h-119 shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <CardTitle className="text-xl lg:text-2xl font-extrabold text-primary">
            Market summary
          </CardTitle>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="link"
                role="coin's history"
                aria-expanded={open}
                className="w-25 h-8 md:w-25 md:h-8 lg:w-30 xl:w-25 xl:h-8 md:mr-4 lg:mr-4 xl:mr-0 sm:mr-0 mr-0 font-bold justify-between bg-primary text-border hover:no-underline sm:gap-3 gap-2"
              >
                {selectedCoin ? (
                  <div className="flex items-center gap-2">
                    <img
                      src={
                        coinsData.result.find((c: any) => c.id === selectedCoin)
                          ?.icon
                      }
                      className="size-4 rounded-full"
                    />
                    {
                      coinsData.result.find((c: any) => c.id === selectedCoin)
                        ?.symbol
                    }
                  </div>
                ) : (
                  "Coin..."
                )}
                <ChevronDown className="size-4 text-background opacity-50" />
              </Button>
            </PopoverTrigger>
            <div className="flex gap-2 sm:gap-3 ml-2 sm:ml-0">
              <Button
                className="size-6 bg-blue-gray rounded-xl font-bold text-background"
                variant="ghost"
              >
                1D
              </Button>
              <Button
                className="size-6 bg-blue-gray rounded-xl font-bold text-background"
                variant="ghost"
              >
                5D
              </Button>
              <Button
                className="size-6 bg-blue-gray rounded-xl font-bold text-background"
                variant="ghost"
              >
                1M
              </Button>
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
                    {coinsData.result.slice(0, 10).map((coin: any) => (
                      <CommandItem
                        key={coin.id}
                        value={coin.id}
                        onSelect={() => {
                          setSelectedCoin(
                            coin.id === selectedCoin ? "" : coin.id
                          );
                          setOpen(false);
                        }}
                      >
                        <Check
                          className={cn(
                            "mr-2 size-4 flex items-start text-start",
                            selectedCoin === coin.id
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                        <div className="flex items-start text-start space-x-2 font-extrabold text-primary">
                          <img
                            src={coin.icon}
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
        </div>
      </CardHeader>
      <CardContent className="flex-1 p-1">
        {isMarketChartLoading ? (
          <p className="text-center">Loading chart...</p>
        ) : isMarketChartError ? (
          <p className="text-center text-error">Error loading chart</p>
        ) : !lineChartData || lineChartData.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No chart data available
          </p>
        ) : (
          <ChartContainer config={linechartConfig} className="h-full w-full">
            <AreaChart
              accessibilityLayer
              data={lineChartData}
              margin={{ left: 12, right: 12, top: 12, bottom: 12 }}
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
