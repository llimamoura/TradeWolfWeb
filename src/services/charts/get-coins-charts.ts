import { httpClient } from "@/lib/http-client";

export async function getCoinsChart(params?: {
  period?: string;
  coinsIds?: string[];
}) {
  const { data } = await httpClient.get("/coins/charts", {
    params: {
      period: params?.period ?? "all",
      coinIds: params?.coinsIds?.join(",") ?? "bitcoin,ethereum,ripple,solana,dogecoin",
    },
  });
  
  return data;
}
