import { SortOrder } from "../../util/SortOrder";

export type PortfolioOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  userId?: SortOrder;
};
