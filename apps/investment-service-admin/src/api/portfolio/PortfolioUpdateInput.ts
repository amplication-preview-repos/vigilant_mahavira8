import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionUpdateManyWithoutPortfoliosInput } from "./TransactionUpdateManyWithoutPortfoliosInput";

export type PortfolioUpdateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  transactions?: TransactionUpdateManyWithoutPortfoliosInput;
};
