import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Profile = {
  bio: string | null;
  createdAt: Date;
  displayName: string | null;
  id: string;
  profilePicture: JsonValue;
  updatedAt: Date;
  user?: User | null;
};
