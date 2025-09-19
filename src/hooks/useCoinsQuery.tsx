import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchCoins() {
  const API_KEY = import.meta.env.VITE_COINSTATS_API_KEY;
  const API_URL = import.meta.env.VITE_COINSTATS_API_URL;

  const response = await axios.get(API_URL, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  return response.data;
}

export function useCoins() {
  return useQuery({
    queryKey: ["coins"],
    queryFn: fetchCoins,
  });
}
