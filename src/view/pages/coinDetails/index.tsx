import { CoinDetailsComponent } from "./components/CoinDetailsComponents";
import { getCoins } from "@/services/currencies/list-currencies";
import { useQuery } from "@tanstack/react-query";

export function CoinDetailsPage() {
  const { data: coinsData } = useQuery({
    queryKey: ["coins"],
    queryFn: getCoins,
  });

  if (!coinsData) return <div>Carregando...</div>;

  return (
    <main>
      <CoinDetailsComponent coinsData={coinsData} />
    </main>
  );
}
