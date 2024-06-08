import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileListRelationFilter } from "../file/FileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProfileListRelationFilter } from "../profile/ProfileListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  files?: FileListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  profiles?: ProfileListRelationFilter;
  username?: StringFilter;
};
