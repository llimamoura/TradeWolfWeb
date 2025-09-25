import { httpClient } from "@/lib/http-client";
import { useQuery } from "@tanstack/react-query";

export async function getCoinsChart(params?: {
  period?: string;
  coinsIds?: string;
}) {
  const { data } = await httpClient.get("/coins/charts", {
    params: {
      period: params?.period ?? "1m",
      coinIds: params?.coinsIds ?? "bitcoin,ethereum,ripple,solana,dogecoin",
    },
  });
  return data;
}

export function useCoinsChart(params?: { period?: string; coinsIds?: string }) {
  return useQuery({
    queryKey: ["coinschart", params],
    queryFn: () => getCoinsChart(params),
  });
}