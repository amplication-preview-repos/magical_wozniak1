import { FileUpdateManyWithoutUsersInput } from "./FileUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  files?: FileUpdateManyWithoutUsersInput;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  profiles?: ProfileUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  username?: string;
};
