import { NotificationsHeader } from "./NotificationsHeader";
import { NotificationsCard } from "./NotificationsCard";
import { useQuery } from "@tanstack/react-query";
import { getCoins } from "@/services/currencies/list-currencies";

export function NotificationsComponent() {
  const {
    data: coinsData,
    isLoading: isCoinsLoading,
    isError: isCoinsError,
  } = useQuery({
    queryKey: ["coins"],
    queryFn: getCoins,
  });

  return (
    <div>
      <NotificationsHeader />
      <NotificationsCard
        coinsData={coinsData}
        isLoading={isCoinsLoading}
        isError={isCoinsError}
      />
    </div>
  );
}
