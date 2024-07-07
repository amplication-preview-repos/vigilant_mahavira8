import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type TransactionUpdateInput = {
  transactionDate?: Date | null;
  typeField?: "Option1" | null;
  quantity?: number | null;
  price?: number | null;
  stock?: StockWhereUniqueInput | null;
  portfolio?: PortfolioWhereUniqueInput | null;
};
