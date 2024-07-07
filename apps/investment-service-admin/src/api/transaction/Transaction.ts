import { Stock } from "../stock/Stock";
import { Portfolio } from "../portfolio/Portfolio";

export type Transaction = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  transactionDate: Date | null;
  typeField?: "Option1" | null;
  quantity: number | null;
  price: number | null;
  stock?: Stock | null;
  portfolio?: Portfolio | null;
};
