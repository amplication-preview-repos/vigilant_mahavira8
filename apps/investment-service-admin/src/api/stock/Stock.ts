import { Transaction } from "../transaction/Transaction";

export type Stock = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  tickerSymbol: string | null;
  companyName: string | null;
  currentPrice: number | null;
  transactions?: Array<Transaction>;
};
