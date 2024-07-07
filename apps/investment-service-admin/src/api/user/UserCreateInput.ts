import { InputJsonValue } from "../../types";
import { PortfolioCreateNestedManyWithoutUsersInput } from "./PortfolioCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  portfolios?: PortfolioCreateNestedManyWithoutUsersInput;
};
