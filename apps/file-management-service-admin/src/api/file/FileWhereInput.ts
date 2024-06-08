import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LinkListRelationFilter } from "../link/LinkListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileWhereInput = {
  filename?: StringNullableFilter;
  fileType?: StringNullableFilter;
  fileUrl?: StringNullableFilter;
  id?: StringFilter;
  links?: LinkListRelationFilter;
  uploadedAt?: DateTimeNullableFilter;
  user?: UserWhereUniqueInput;
};
