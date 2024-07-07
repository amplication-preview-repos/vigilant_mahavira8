import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { TransactionListRelationFilter } from "../transaction/TransactionListRelationFilter";

export type StockWhereInput = {
  id?: StringFilter;
  tickerSymbol?: StringNullableFilter;
  companyName?: StringNullableFilter;
  currentPrice?: FloatNullableFilter;
  transactions?: TransactionListRelationFilter;
};
