import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchCoinsChart() {
  const API_KEY = import.meta.env.VITE_COINSTATS_API_KEY;
  const API_URL = import.meta.env.VITE_COINSTATS_API_CHARTS_URL;

  const response = await axios.get(API_URL, {
    headers: {
      "X-API-KEY": API_KEY,
    },
  });
  return response.data;
}

export function useCoinsChart() {
  return useQuery({
    queryKey: ["coinschart"],
    queryFn: fetchCoinsChart,
  });
}
