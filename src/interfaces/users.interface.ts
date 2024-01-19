import { string } from "pg-format";

export interface IUsersRequest {
  name: string;
  email: string;
  password: string;
}
