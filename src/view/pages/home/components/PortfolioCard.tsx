import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMemo } from "react";
import type { ChartConfig } from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import type { Coin } from "@/entities/coin";

interface PortfolioCardProps {
  portfolioChartData: Coin[];
  isLoading: boolean;
  isError: boolean;
}

type ChartConfigMap = Record<string, { label: string; color: string }>;

export function PortfolioCard({ portfolioChartData }: PortfolioCardProps) {
  const pieChartData = (portfolioChartData || []).map(
    (coin: Coin, index: number) => ({
      coinSybol: coin.symbol,
      coin: coin.coinId,
      price: coin.chart?.length ?? 0,
      fill: `var(--chart-${index + 1})`,
    })
  );

  const chartConfig: ChartConfig = useMemo(() => {
    return {
      portfolio: { label: "Portfolio" },
      ...pieChartData.reduce<ChartConfigMap>((config, item, index) => {
        if (item.coin) {
          config[item.coin.toLowerCase()] = {
            label: item.coin.toUpperCase(),
            color: `var(--chart-${index + 1})`,
          };
        }
        return config;
      }, {}),
    };
  }, [pieChartData]);

  return (
    <Card className="bg-card h-auto min-h-[20dvh] max-h-[40dvh] xl:min-h-[25dvh] xl:max-h-[50dvh] shadow-lg">
      <CardHeader className="items-center">
        <CardTitle className="text-xl lg:text-2xl mb-4 md:mb-3 lg:mb-1 font-extrabold text-primary">
          Portfolio distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 items-center text-center">
        {!portfolioChartData || pieChartData.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No chart data available
          </p>
        ) : (
          <ChartContainer
            config={chartConfig}
            className="xl:ml-6 ml-0 max-h-full items-center text-center"
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
                className="flex xl:gap-10 gap-8 flex-col items-start xl:text-2xl text-xl text-blue-muted font-bold"
              />
            </PieChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}
