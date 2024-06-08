import { LinkUpdateManyWithoutFilesInput } from "./LinkUpdateManyWithoutFilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FileUpdateInput = {
  filename?: string | null;
  fileType?: string | null;
  fileUrl?: string | null;
  links?: LinkUpdateManyWithoutFilesInput;
  uploadedAt?: Date | null;
  user?: UserWhereUniqueInput | null;
};
