import type { Coin } from "@/entities/coin";

interface ChartPoint {
  price: number;
  timestamp: number;
}

export function getReferencePrices(chartData: ChartPoint[], coin?: Coin) {
  if (!chartData.length) {
    return { openingPrice: 0, previousClosingPrice: 0, referencePrice: 0 };
  }

  const sortedData = [...chartData].sort((a, b) => a.timestamp - b.timestamp);
  const openingPrice = sortedData[0]?.price || coin?.price || 0;
  const previousClosingPrice =
    sortedData[sortedData.length - 1]?.price || coin?.price || 0;
  const referencePrice = (openingPrice + previousClosingPrice) / 2;

  return { openingPrice, previousClosingPrice, referencePrice };
}
