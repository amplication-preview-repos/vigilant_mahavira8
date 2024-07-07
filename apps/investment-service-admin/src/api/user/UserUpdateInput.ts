import { InputJsonValue } from "../../types";
import { PortfolioUpdateManyWithoutUsersInput } from "./PortfolioUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  portfolios?: PortfolioUpdateManyWithoutUsersInput;
};
