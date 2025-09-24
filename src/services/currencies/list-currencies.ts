import { useQuery } from "@tanstack/react-query";
import { httpClient } from "@/lib/http-client";

export async function getCoins() {
  const { data } = await httpClient.get("/coins");
  return data;
}

export function useCoins() {
  return useQuery({
    queryKey: ["coins"],
    queryFn: getCoins,
  });
}