import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LinkWhereInput = {
  expiryDate?: DateTimeNullableFilter;
  file?: FileWhereUniqueInput;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  linkUrl?: StringNullableFilter;
};
