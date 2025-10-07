import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ChartConfig } from "@/components/ui/chart";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";

interface PortfolioCardProps {
  portfolioChartData: any;
  isLoading: boolean;
  isError: boolean;
}

export function PortfolioCard({ portfolioChartData }: PortfolioCardProps) {
  const pieChartData = (portfolioChartData || []).map(
    (coin: any, index: number) => ({
      coinSybol: coin.symbol,
      coin: coin.coinId,
      price: coin.chart?.length ?? 0,
      fill: `var(--chart-${index + 1})`,
    })
  );

  const chartConfig = {
    portfolio: { label: "Portfolio" },
    ...pieChartData.reduce((config: any, item: any, index: number) => {
      config[item.coin.toLowerCase()] = {
        label: item.coin.toUpperCase(),
        color: `var(--chart-${index + 1})`,
      };
      return config;
    }, {}),
  } satisfies ChartConfig;

  return (
    <Card className="bg-card h-auto min-h-96 xl:min-h-119 shadow-lg">
      <CardHeader className="items-center">
        <CardTitle className="text-xl lg:text-2xl mb-2 md:mb-3 lg:mb-2 font-extrabold text-primary">
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
  );
}
