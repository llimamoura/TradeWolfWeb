export interface Coin {
  chart?: [number, number][];
  coinId?: string;
  id: string;
  name: string;
  symbol: string;
  icon: string;
  price: number;
  priceChange1d: number;
}

export interface CoinResponse {
  result: Coin[];
}
