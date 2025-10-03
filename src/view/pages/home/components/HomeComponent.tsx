import { Separator } from "@/components/ui/separator";
import { Bell, ChevronDown, Check, CircleUser } from "lucide-react";
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
import { getCoins } from "@/services/currencies/list-currencies";
import { getCoinsChart } from "@/services/charts/get-coins-charts";
import { useQuery } from "@tanstack/react-query";
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
  const [selectedCoin, setSelectedCoin] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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

  const {
    data: coinsData,
    isLoading: isCoinsLoading,
    isError: isCoinsError,
  } = useCoins();
  const {
    data: portfolioChartData,
    isLoading: isPortfolioChartLoading,
    isError: isPortfolioChartError,
  } = useCoinsChart();
  const {
    data: marketChartData,
    isLoading: isMarketChartLoading,
    isError: isMarketChartError,
  } = useCoinsChart({ coinsIds: selectedCoin ? [selectedCoin] : undefined,});

  if (isCoinsLoading) return <p>Loading your coins...</p>;
  if (isCoinsError) return <p>Error loading coins</p>;

  const pieChartData = (portfolioChartData || []).map(
    (coin: any, index: number) => ({
      coinSybol: coin.symbol,
      coin: coin.coinId,
      price: coin.chart?.length ?? 0,
      fill: `var(--chart-${index + 1})`,
    })
  );

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

  const filteredCoins = coinsData.result.filter(
    (coin: any) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 lg:p-6 xl:p-8">
      <header className="flex flex-col lg:flex-row justify-between lg:items-center space-y-4 lg:space-y-0 my-0 lg:my-8">
        <div className="flex items-center space-x-3 lg:space-x-5">
          <Separator
            className="hidden lg:block mr-2 border-tertiary border-2 rounded-xl"
            orientation="vertical"
          />
          <h1 className="hidden lg:flex text-xl lg:text-3xl text-primary font-extrabold">
            Dashboard
          </h1>
        </div>

        <div className="flex items-center space-x-3 lg:space-x-5">
          <div className="relative hidden lg:flex w-80 lg:w-100 xl:w-120 bg-background border-tertiary rounded-lg">
            <Command className="w-full text-primary border border-primary rounded-xl">
              <CommandInput
                placeholder="Search coins..."
                value={searchTerm}
                onValueChange={(value) => {
                  setSearchTerm(value);
                  setIsDropdownOpen(!!value);
                }}
                className="placeholder:text-extrabold"
              />
              {isDropdownOpen && (
                <CommandList className="absolute top-full left-0 w-full max-h-40 mt-1 overflow-y-auto z-50 bg-card border border-border rounded-lg shadow-lg">
                  <CommandEmpty>No coins found.</CommandEmpty>
                  <CommandGroup>
                    {filteredCoins.slice().map((coin: any) => (
                      <CommandItem
                        key={coin.id}
                        value={coin.id}
                        className="flex items-center justify-between p-2"
                        onSelect={() => {
                          setSearchTerm(`${coin.symbol}`);
                          setSelectedCoin(coin.id);
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

          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" aria-label="Notifications">
              <Bell className="size-6 lg:size-7 text-primary" />
            </Button>
            <Button variant="ghost" aria-label="User Profile">
              <CircleUser className="size-6 lg:size-7 text-primary" />
            </Button>
          </div>
        </div>
      </header>

      <main className="w-full mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 place-items-stretch">
          <Card className="flex justify-center w-full min-h-50 lg:min-h-60 xl:min-h-30 bg-card shadow-lg">
            <CardHeader>
              <CardTitle className="font-extrabold text-search-dropdown text-xl md:text-3xl mb-6">
                My balance
              </CardTitle>
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 gap-5">
                <CardDescription className="font-extrabold text-3xl md:text-4xl text-blue-muted">
                  $25,901.41
                </CardDescription>
                <CardContent className="p-2 text-sm text-background font-semibold bg-success rounded-lg">
                  810%
                </CardContent>
              </div>
            </CardHeader>
          </Card>

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

          <Card className="bg-card h-auto min-h-96 xl:min-h-119 shadow-lg">
            <CardHeader className="items-center">
              <CardTitle className="text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-2 font-extrabold text-primary">
                Portfolio distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 items-center text-center">
              {isPortfolioChartLoading ? (
                <p className="text-center">Loading chart...</p>
              ) : isPortfolioChartError ? (
                <p className="text-center text-error">Error loading chart</p>
              ) : !portfolioChartData || pieChartData.length === 0 ? (
                <p className="text-center text-muted-foreground">
                  No chart data available
                </p>
              ) : (
                <ChartContainer
                  config={chartConfig}
                  className="mx-auto max-h-full xl:h-75 items-center text-center"
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
                      className="flex gap-8 flex-col items-start sm:mt-0 mt-5 text-xl text-blue-muted font-bold"
                    />
                  </PieChart>
                </ChartContainer>
              )}
            </CardContent>
          </Card>

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
                              coinsData.result.find(
                                (c: any) => c.id === selectedCoin
                              )?.icon
                            }
                            className="size-4 rounded-full"
                          />
                          {
                            coinsData.result.find(
                              (c: any) => c.id === selectedCoin
                            )?.symbol
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
                <ChartContainer
                  config={linechartConfig}
                  className="h-full w-full"
                >
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
        </section>
      </main>
    </div>
  );
}
