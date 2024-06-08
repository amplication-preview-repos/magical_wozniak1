import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type LinkCreateInput = {
  expiryDate?: Date | null;
  file?: FileWhereUniqueInput | null;
  isActive?: boolean | null;
  linkUrl?: string | null;
};
