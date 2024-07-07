import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { PortfolioWhereUniqueInput } from "../portfolio/PortfolioWhereUniqueInput";

export type TransactionWhereInput = {
  id?: StringFilter;
  transactionDate?: DateTimeNullableFilter;
  typeField?: "Option1";
  quantity?: IntNullableFilter;
  price?: FloatNullableFilter;
  stock?: StockWhereUniqueInput;
  portfolio?: PortfolioWhereUniqueInput;
};
