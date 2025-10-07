import { httpClient } from "@/lib/http-client";

export async function getCoins() {
  const { data } = await httpClient.get("/coins");

  return data;
}