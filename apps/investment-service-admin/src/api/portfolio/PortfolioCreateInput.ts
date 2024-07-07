import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TransactionCreateNestedManyWithoutPortfoliosInput } from "./TransactionCreateNestedManyWithoutPortfoliosInput";

export type PortfolioCreateInput = {
  name?: string | null;
  description?: string | null;
  user?: UserWhereUniqueInput | null;
  transactions?: TransactionCreateNestedManyWithoutPortfoliosInput;
};
