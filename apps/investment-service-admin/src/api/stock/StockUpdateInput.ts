import { TransactionUpdateManyWithoutStocksInput } from "./TransactionUpdateManyWithoutStocksInput";

export type StockUpdateInput = {
  tickerSymbol?: string | null;
  companyName?: string | null;
  currentPrice?: number | null;
  transactions?: TransactionUpdateManyWithoutStocksInput;
};
