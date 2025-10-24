import { getCoins } from "@/services/currencies/list-currencies";
import { getCoinsChart } from "@/services/charts/get-coins-charts";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { HomeHeader } from "./HomeHeader";
import { BalanceCard } from "./BalanceCard";
import { AssetsCard } from "./AssetsCard";
import { PortfolioCard } from "./PortfolioCard";
import { MarketSummaryCard } from "./MarketSummaryCard";

export function HomeComponent() {
  const [selectedCoin, setSelectedCoin] = useState<string>("");

  const {
    data: coinsData,
    isLoading: isCoinsLoading,
    isError: isCoinsError,
  } = useQuery({
    queryKey: ["coins"],
    queryFn: getCoins,
  });

  const {
    data: portfolioChartData,
    isLoading: isPortfolioChartLoading,
    isError: isPortfolioChartError,
  } = useQuery({
    queryKey: ["portfolioChart"],
    queryFn: () => getCoinsChart(),
  });

  if (isCoinsLoading) return <p>Loading your coins...</p>;
  if (isCoinsError) return <p>Error loading coins</p>;

  return (
    <div className="p-4 lg:p-6 xl:p-8">
      <HomeHeader
        coinsData={coinsData}
        selectedCoin={selectedCoin}
        onSelectedCoinChange={setSelectedCoin}
      />
      <main className="w-full mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 place-items-stretch">
          <BalanceCard />

          <AssetsCard
            coinsData={coinsData}
            isLoading={isCoinsLoading}
            isError={isCoinsError}
          />
          <PortfolioCard
            portfolioChartData={portfolioChartData}
            isLoading={isPortfolioChartLoading}
            isError={isPortfolioChartError}
          />
          <MarketSummaryCard
            coinsData={coinsData}
            selectedCoin={selectedCoin}
            onSelectedCoinChange={setSelectedCoin}
          />
        </section>
      </main>
    </div>
  );
}
