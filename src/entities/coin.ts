export interface Coin {
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
