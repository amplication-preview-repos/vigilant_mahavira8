import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  transactionDate?: SortOrder;
  typeField?: SortOrder;
  quantity?: SortOrder;
  price?: SortOrder;
  stockId?: SortOrder;
  portfolioId?: SortOrder;
};
