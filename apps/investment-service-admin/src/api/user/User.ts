import { JsonValue } from "type-fest";
import { Portfolio } from "../portfolio/Portfolio";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  portfolios?: Array<Portfolio>;
};
