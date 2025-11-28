export function getYAxisTicks(chartData: { price: number }[], tickCount = 6) {
  if (!chartData || chartData.length === 0) {
    return { yAxisTicks: [], yAxisMin: 0, yAxisMax: 0 };
  }

  const prices = chartData.map((c) => c.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const priceRange = maxPrice - minPrice;
  const yAxisMin = Math.max(0, minPrice - priceRange * 0.1);
  const yAxisMax = maxPrice + priceRange * 0.1;

  const yAxisTicks = [];
  for (let i = 0; i < tickCount; i++) {
    const tickValue = yAxisMin + (yAxisMax - yAxisMin) * (i / (tickCount - 1));
    yAxisTicks.push(Math.round(tickValue));
  }

  return { yAxisTicks, yAxisMin, yAxisMax };
}
