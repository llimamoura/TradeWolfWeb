import { getCoins } from "@/services/currencies/list-currencies";
import { getCoinsChart } from "@/services/charts/get-coins-charts";
import { useQuery } from "@tanstack/react-query";
import type { ChartConfig } from "@/components/ui/chart";
import { useState } from "react";
import { HomeHeader } from "./HomeHeader";
import { BalanceCard } from "./BalanceCard";
import { AssetsCard } from "./AssetsCard";
import { PortfolioCard } from "./PortfolioCard";
import { MarketSummaryCard } from "./MarketSummaryCard";

export function HomeComponent() {
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
  } = useCoinsChart({ coinsIds: selectedCoin ? [selectedCoin] : undefined });

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

  return (
    <div className="p-4 lg:p-6 xl:p-8">
      <HomeHeader />

      <main className="w-full mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 place-items-stretch">
          <BalanceCard />
          <AssetsCard />
          <PortfolioCard />
          <MarketSummaryCard />
        </section>
      </main>
    </div>
  );
}
