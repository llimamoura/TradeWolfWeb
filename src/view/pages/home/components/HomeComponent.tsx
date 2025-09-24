import { Separator } from "@/components/ui/separator";
import { Bell, ChevronsUpDown, Check } from "lucide-react";
import { CircleUser } from "lucide-react";
import { SearchInput } from "@/components/search-input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { useCoinsChart } from "@/services/charts/get-coins-charts";
import { useCoins } from "@/services/currencies/list-currencies";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function HomeComponent() {
  const { data, isLoading, isError } = useCoins();
  const {
    data: chartData,
    isLoading: isChartLoading,
    isError: isChartError,
  } = useCoinsChart();

  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const [open, setOpen] = useState(false);

  if (isLoading) return <p>Loading your coins...</p>;
  if (isError) return <p>Error loading coins</p>;

  const pieChartData = (chartData || []).map((coin: any, index: number) => ({
    coinSybol: coin.symbol,
    coin: coin.coinId,
    price: coin.chart?.length ?? 0,
    fill: `var(--chart-${index + 1})`,
  }));

  const lineChartData =
    (chartData || [])[0]?.chart.map((point: [number, number]) => {
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

  console.log("Chart data:", chartData);
  console.log("Chart data length:", chartData?.length);
  console.log("Line chart data:", lineChartData);
  console.log("First coin data:", chartData?.[0]);

  const chartConfig = {
    portifolio: { label: "Portifolio" },
    ...pieChartData.reduce((config: any, item: any, index: number) => {
      config[item.coin.toLowerCase()] = {
        label: item.coin.toUpperCase(),
        color: `var(--chart-${index + 1})`,
      };
      return config;
    }, {}),
  } satisfies ChartConfig;

  const linechartConfig = {
    price: {
      label: "Price: ",
      color: "var(--chart-1)",
    },
  } satisfies ChartConfig;

  return (
    <div className="p-4 lg:p-6 xl:p-8">
      <div className="flex flex-col lg:flex-row xl:flex-row justify-between lg:items-center space-y-4 lg:space-y-0 my-0 lg:my-8">
        <div className="flex items-center space-x-3 lg:space-x-5">
          <Separator
            className="hidden lg:block ml-0 !mr-2 border-tertiary border-2 rounded-xl h-8"
            orientation="vertical"
          />
          <h1 className="hidden lg:flex text-xl lg:text-3xl text-primary font-extrabold">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-5 xl:space-x-5">
          <SearchInput
            className="hidden lg:flex w-80 lg:w-100 xl:w-120 h-10 bg-background border-tertiary"
            placeholder="Search"
          />
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost">
              <Bell className="size-6 lg:size-7 xl:size-7 text-primary hover:text-primary" />
            </Button>
            <Button variant="ghost">
              <CircleUser className="size-6 lg:size-7 xl:size-7 text-primary hover:text-primary" />
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 place-items-stretch">
          <Card className="bg-card min-h-50 lg:min-h-60 justify-center flex xl:min-h-30 w-full">
            <CardHeader>
              <CardTitle className="font-extrabold text-xl lg:text-2xl mb-4 text-primary">
                My Balance
              </CardTitle>
              <div className="flex flex-col sm:flex-row xl:flex-row items-start sm:items-center gap-5 space-y-2 sm:space-y-0">
                <CardDescription className="text-3xl lg:text-4xl text-primary font-bold">
                  $25,901.41
                </CardDescription>
                <CardContent className="p-2 px-3 bg-success text-background rounded-lg text-sm font-semibold">
                  +810%
                </CardContent>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-card h-auto min-h-50 lg:min-h-85 xl:min-h-50 w-full">
            <CardHeader>
              <CardTitle className="text-xl lg:text-2xl font-bold mb-4 text-primary">
                Your Assets
              </CardTitle>
              <div className="space-y-3 max-h-60 xl:max-h-30 overflow-y-auto">
                {data.result.slice(0, 10).map((coin: any) => (
                  <div
                    key={coin.id}
                    className="flex justify-between items-center p-2 bg-background/50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={coin.icon}
                        alt={coin.name}
                        className="w-6 h-6 rounded-full"
                      />
                      <div>
                        <p className="font-semibold text-sm">{coin.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {coin.symbol}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-sm">
                        ${coin.price?.toFixed(2)}
                      </p>
                      <p
                        className={`text-xs ${
                          coin.priceChange1d >= 0
                            ? "text-success"
                            : "text-error"
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

          <Card className="bg-card h-auto min-h-98 xl:max-h-20">
            <CardHeader className="items-center">
              <CardTitle className="text-xl lg:text-2xl font-bold mb-2 text-primary">
                Portfolio distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 items-center text-center">
              {isChartLoading ? (
                <p className="text-center">Loading chart...</p>
              ) : isChartError ? (
                <p className="text-center text-error">Error loading chart</p>
              ) : !chartData || pieChartData.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  No chart data available
                </p>
              ) : (
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto max-h-screen text-center items-center"
                >
                  <PieChart>
                    <Pie
                      data={pieChartData}
                      dataKey="price"
                      innerRadius="77%"
                      outerRadius="90%"
                      cx="50%"
                      cy="50%"
                      paddingAngle={4}
                      cornerRadius={10}
                    />
                    <ChartTooltip
                      content={<ChartTooltipContent hideLabel nameKey="coin" />}
                      cursor={false}
                    />
                    <ChartLegend
                      layout="vertical"
                      align="left"
                      verticalAlign="middle"
                      content={<ChartLegendContent nameKey="coin" />}
                      className="flex gap-5 text-lg font-semibold flex-col items-start"
                    />
                  </PieChart>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

          <Card className="bg-card h-auto min-h-98 xl:max-h-20">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <CardTitle className="text-xl lg:text-2xl font-bold text-primary">
                  Market Summary
                </CardTitle>
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="coin's history"
                      aria-expanded={open}
                      className="!w-50 !h-10 justify-between bg-primary text-border hover:bg-primary"
                    >
                      {selectedCoin ? (
                        <div className="flex items-center gap-2">
                          <img
                            src={
                              data.result.find(
                                (c: any) => c.id === selectedCoin
                              )?.icon
                            }
                            className="w-4 h-4 rounded-full"
                          />
                          {
                            data.result.find((c: any) => c.id === selectedCoin)
                              ?.symbol
                          }{" "}
                          - {selectedCoin}
                        </div>
                      ) : (
                        "Select coin..."
                      )}
                      <ChevronsUpDown className="h-4 w-4 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full">
                    <Command>
                      <CommandInput placeholder="Search coins..." />
                      <CommandList>
                        <CommandEmpty>No coin found.</CommandEmpty>
                        <CommandGroup>
                          {data.result.slice(0, 10).map((coin: any) => (
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
                                  "mr-2 h-4 w-4",
                                  selectedCoin === coin.id
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                              <div className="flex items-center space-x-2">
                                <img
                                  src={coin.icon}
                                  className="w-4 h-4 rounded-full"
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
            <CardContent>
              {isChartLoading ? (
                <p className="text-center">Loading chart...</p>
              ) : isChartError ? (
                <p className="text-center text-error">Error loading chart</p>
              ) : !lineChartData || lineChartData.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  No chart data available
                </p>
              ) : (
                <ChartContainer config={linechartConfig}>
                  <AreaChart
                    accessibilityLayer
                    data={lineChartData}
                    margin={{ left: 12, right: 12 }}
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
                      <linearGradient
                        id="fillPrice"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
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
        </div>
      </div>
    </div>
  );
}
