import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Coin, CoinResponse } from "@/entities/coin";
import Notices from "@/assets/img/notices.png";
import { Link } from "react-router-dom";
import { notificationsNewData } from "./constants";
import { notificatiosViewData } from "./constants";

interface CoinsDataPropss {
  coinsData: CoinResponse;
  isLoading: boolean;
  isError: boolean;
}

export function NotificationsCard({
  coinsData,
  isLoading,
  isError,
}: CoinsDataPropss) {
  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar dados.</div>;
  return (
    <main className="lg:px-5 px-0">
      <Card className="bg-card h-175 max-h-dvh w-full">
        <CardHeader className="items-center">
          <CardTitle className="text-primary text-2xl font-bold">New</CardTitle>
        </CardHeader>
        <CardContent>
          {coinsData?.result?.slice(0, 3).map((coin: Coin, index: number) => {
            const { title, description, hour } = notificationsNewData[index];

            return (
              <div
                key={coin.id}
                className="flex items-center justify-between py-3 lg:py-6 bg-background"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={coin.icon}
                    alt={coin.name}
                    className="size-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold text-blue-muted">{title}</p>
                    <p className="text-sm text-search-dropdown hover:underline">
                      <Link to="/home">{description}</Link>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-search-dropdown px-4">{hour}</p>
              </div>
            );
          })}
          <div className="flex items-center justify-between py-3 lg:py-6">
            <div className="flex items-center space-x-3">
              <img
                src={Notices}
                alt="notifications image"
                className="size-10"
              />
              <div className="flex flex-col">
                <p className="font-bold text-blue-muted">Market news</p>
                <p className="text-sm text-search-dropdown hover:underline">
                  <Link to="/home">SEC approves new Bitcoin ETF</Link>
                </p>
              </div>
            </div>
            <p className="text-sm text-search-dropdown px-4">3h</p>
          </div>

          <CardTitle className="text-primary text-2xl font-bold py-5 lg:py-5">
            Views
          </CardTitle>
          {coinsData?.result?.slice(0, 2).map((coin: Coin, index: number) => {
            const { title, description, hour } = notificatiosViewData[index];

            return (
              <div
                key={coin.id}
                className="flex items-center justify-between py-3 lg:py-4 bg-background"
              >
                <div className="flex items-center space-x-3">
                  <img
                    src={coin.icon}
                    alt={coin.name}
                    className="size-10 rounded-full"
                  />
                  <div className="flex flex-col">
                    <p className="font-bold text-blue-muted">
                      {title}
                    </p>
                    <p className="text-sm text-search-dropdown hover:underline">
                      <Link to="/home">{description}</Link>
                    </p>
                  </div>
                </div>
                <p className="text-sm text-search-dropdown px-4">{hour}</p>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </main>
  );
}
