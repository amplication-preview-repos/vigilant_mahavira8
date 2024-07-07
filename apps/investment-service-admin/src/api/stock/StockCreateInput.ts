import { TransactionCreateNestedManyWithoutStocksInput } from "./TransactionCreateNestedManyWithoutStocksInput";

export type StockCreateInput = {
  tickerSymbol?: string | null;
  companyName?: string | null;
  currentPrice?: number | null;
  transactions?: TransactionCreateNestedManyWithoutStocksInput;
};
