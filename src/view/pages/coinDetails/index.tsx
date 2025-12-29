import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCoins } from "@/services/currencies/list-currencies";
import { CoinDetailsComponent } from "./components/CoinDetailsComponent";

export function CoinDetailsPage() {
  const { coin } = useParams<{ coin: string }>();
  const { data: coinsData } = useQuery({
    queryKey: ["coins"],
    queryFn: getCoins,
  });

  if (!coinsData) return <div>Carregando...</div>;

  return <CoinDetailsComponent coinsData={coinsData} urlCoin={coin} />;
}