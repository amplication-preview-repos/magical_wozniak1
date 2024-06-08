import { LinkCreateNestedManyWithoutFilesInput } from "./LinkCreateNestedManyWithoutFilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileCreateInput = {
  filename?: string | null;
  fileType?: string | null;
  fileUrl?: string | null;
  links?: LinkCreateNestedManyWithoutFilesInput;
  uploadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
