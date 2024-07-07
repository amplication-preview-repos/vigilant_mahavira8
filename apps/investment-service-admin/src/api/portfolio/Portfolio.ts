import { User } from "../user/User";
import { Transaction } from "../transaction/Transaction";

export type Portfolio = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  user?: User | null;
  transactions?: Array<Transaction>;
};
