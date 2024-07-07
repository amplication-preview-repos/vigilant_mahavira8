import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  tickerSymbol?: SortOrder;
  companyName?: SortOrder;
  currentPrice?: SortOrder;
};
