import { FileWhereUniqueInput } from "../file/FileWhereUniqueInput";

export type LinkUpdateInput = {
  expiryDate?: Date | null;
  file?: FileWhereUniqueInput | null;
  isActive?: boolean | null;
  linkUrl?: string | null;
};
