import { Stock as TStock } from "../api/stock/Stock";

export const STOCK_TITLE_FIELD = "companyName";

export const StockTitle = (record: TStock): string => {
  return record.companyName?.toString() || String(record.id);
};
